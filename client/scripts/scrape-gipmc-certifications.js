#!/usr/bin/env node
/**
 * Scrape GIPMC certification catalog using sitemap.xml + the "Our Certifications" mega-menu.
 *
 * Outputs:
 * - src/data/gipmc-certifications.json (enriched course list)
 * - src/data/gipmc-certifications-menu.json (raw hierarchy extracted from mega-menu)
 * - src/data/gipmc-certifications-missing.json (unreachable URLs during scrape)
 *
 * Why mega-menu:
 * - /C/* category pages are intermittently redirecting to PageNotFound.
 * - The mega-menu on /CD/* pages still lists the full hierarchy and all certification links.
 */
const fs = require("fs");
const path = require("path");
const https = require("https");

const SITEMAP_URL = "https://www.gipmc.org/sitemap.xml";
const OUT_FILE = path.join(__dirname, "..", "src", "data", "gipmc-certifications.json");
const OUT_MENU_FILE = path.join(__dirname, "..", "src", "data", "gipmc-certifications-menu.json");
const OUT_MISSING_FILE = path.join(__dirname, "..", "src", "data", "gipmc-certifications-missing.json");

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchText(url, retries = 3, redirectLeft = 5) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        const status = res.statusCode || 0;
        const location = res.headers.location;
        if (status >= 300 && status < 400 && location && redirectLeft > 0) {
          const nextUrl = location.startsWith("http")
            ? location
            : new URL(location, url).toString();
          // Consume response to free socket
          res.resume();
          return resolve(fetchText(nextUrl, retries, redirectLeft - 1));
        }

        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          if (status >= 400) {
            return reject(new Error(`HTTP ${status} for ${url}`));
          }
          resolve(data);
        });
      })
      .on("error", reject);
  });
}

function stripTags(html = "") {
  return String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractMeta(html, name) {
  const re = new RegExp(
    `<meta[^>]+name=(?:\"|')${name}(?:\"|')[^>]+content=(?:\"|')([^\"']+)`,
    "i"
  );
  const m = html.match(re);
  return m ? m[1].trim() : "";
}

function extractCanonical(html) {
  const m = html.match(/<link[^>]+rel=(?:\"|')canonical(?:\"|')[^>]+href=(?:\"|')([^\"']+)/i);
  return m ? m[1].trim() : "";
}

function extractCourseTitle(html) {
  // Many pages include a heading with class containing "title"
  const m =
    html.match(/<h[1-3][^>]*class=(?:\"|')[^\"']*title[^\"']*(?:\"|')[^>]*>([\s\S]*?)<\/h[1-3]>/i) ||
    html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (m) return stripTags(m[1]);

  // Fallback to og:title / title tag
  const og = html.match(/<meta[^>]+property=(?:\"|')og:title(?:\"|')[^>]+content=(?:\"|')([^\"']+)/i);
  if (og) return og[1].trim();
  const t = html.match(/<title>([^<]+)<\/title>/i);
  return t ? t[1].trim() : "";
}

function extractCategoryTitle(html) {
  // Category pages usually have a visible heading; best-effort:
  const m =
    html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) ||
    html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) ||
    html.match(/<title>([^<]+)<\/title>/i);
  return m ? stripTags(m[1]) : "";
}

function extractCdLinks(html) {
  // Extract /CD/... links + anchor text
  const links = [];
  const re = /<a[^>]+href=(?:\"|')(\/CD\/[^\"']+)(?:\"|')[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html))) {
    const href = `https://www.gipmc.org${m[1]}`;
    const text = stripTags(m[2]);
    if (!text) continue;
    links.push({ href, text });
  }
  // De-dupe by href
  const map = new Map();
  for (const l of links) {
    if (!map.has(l.href)) map.set(l.href, l);
  }
  return [...map.values()];
}

function extractMegaMenuSegment(html) {
  const lower = html.toLowerCase();
  const idx = lower.indexOf("our certifications");
  if (idx < 0) return "";
  // start around the menu item block
  const start = Math.max(0, lower.lastIndexOf("<li", idx));
  // heuristically end before </nav> or next top-level menu item
  const navEnd = lower.indexOf("</nav>", idx);
  const end = navEnd > 0 ? navEnd : Math.min(html.length, start + 250000);
  return html.slice(start, end);
}

function parseMegaMenuHierarchy(segmentHtml) {
  // We parse headings (h2/h3) and /CD/ links in-order.
  // Output format:
  // [{ domainTitle, groups: [{ groupTitle, courses: [{ title, url }] }] }]
  const domains = [];
  let currentDomain = null;
  let currentGroup = null;

  const tokenRe =
    /<(h2|h3)[^>]*>([\s\S]*?)<\/\1>|<a[^>]+href=(?:\"|')([^\"']*\/CD\/[^\"']+)(?:\"|')[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = tokenRe.exec(segmentHtml))) {
    const tag = m[1];
    if (tag) {
      const text = stripTags(m[2]);
      if (!text) continue;
      if (tag.toLowerCase() === "h2") {
        currentDomain = { domainTitle: text, groups: [] };
        domains.push(currentDomain);
        currentGroup = null;
      } else if (tag.toLowerCase() === "h3") {
        if (!currentDomain) {
          currentDomain = { domainTitle: "Uncategorized", groups: [] };
          domains.push(currentDomain);
        }
        currentGroup = { groupTitle: text, courses: [] };
        currentDomain.groups.push(currentGroup);
      }
      continue;
    }

    // link
    const href = m[3];
    const text = stripTags(m[4]);
    if (!href || !text) continue;
    if (!currentDomain) {
      currentDomain = { domainTitle: "Uncategorized", groups: [] };
      domains.push(currentDomain);
    }
    if (!currentGroup) {
      currentGroup = { groupTitle: "General", courses: [] };
      currentDomain.groups.push(currentGroup);
    }
    const url = href.startsWith("http") ? href : `https://www.gipmc.org${href}`;
    currentGroup.courses.push({ title: text, url });
  }

  // de-dupe courses per group
  for (const d of domains) {
    for (const g of d.groups) {
      const seen = new Set();
      g.courses = g.courses.filter((c) => {
        if (seen.has(c.url)) return false;
        seen.add(c.url);
        return true;
      });
    }
  }

  return domains;
}

async function main() {
  console.log("Fetching sitemap:", SITEMAP_URL);
  const missing = [];
  const xml = await fetchText(SITEMAP_URL).catch((e) => {
    missing.push({ url: SITEMAP_URL, error: e.message });
    throw e;
  });
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  const detailUrls = locs.filter((u) => /https:\/\/www\.gipmc\.org\/CD\//.test(u));

  console.log("Found detail pages:", detailUrls.length);

  // Step 1: Extract mega-menu hierarchy from the first reachable /CD/ page
  let menuHtml = "";
  let menuSourceUrl = "";
  for (const du of detailUrls.slice(0, 25)) {
    try {
      menuHtml = await fetchText(du, 2);
      menuSourceUrl = du;
      break;
    } catch (e) {
      missing.push({ url: du, error: e.message, phase: "menu-seed" });
      await sleep(400);
    }
  }
  if (!menuHtml) throw new Error("Unable to fetch a seed /CD/ page to extract mega-menu.");

  const menuSegment = extractMegaMenuSegment(menuHtml);
  const menuHierarchy = parseMegaMenuHierarchy(menuSegment);

  fs.mkdirSync(path.dirname(OUT_MENU_FILE), { recursive: true });
  fs.writeFileSync(
    OUT_MENU_FILE,
    JSON.stringify({ generatedAt: new Date().toISOString(), sourceUrl: menuSourceUrl, hierarchy: menuHierarchy }, null, 2)
  );
  console.log("Wrote:", OUT_MENU_FILE);

  // Build a categoryMap from menu hierarchy (courseUrl -> {domain, group})
  const categoryMap = new Map();
  for (const d of menuHierarchy) {
    for (const g of d.groups) {
      for (const c of g.courses) {
        if (!categoryMap.has(c.url)) {
          categoryMap.set(c.url, {
            domainTitle: d.domainTitle,
            groupTitle: g.groupTitle,
            linkText: c.title,
          });
        }
      }
    }
  }

  // Enrich each course: use union of sitemap /CD/ URLs + mega-menu /CD/ URLs.
  const allCourseUrls = Array.from(
    new Set([...detailUrls, ...Array.from(categoryMap.keys())])
  );
  console.log("Total unique /CD/ URLs (sitemap ∪ menu):", allCourseUrls.length);

  const courses = [];
  for (const du of allCourseUrls) {
    let html = "";
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        html = await fetchText(du);
        break;
      } catch (e) {
        if (attempt === 2) {
          missing.push({ url: du, error: e.message, phase: "enrich" });
        }
        await sleep(400 + attempt * 400);
      }
    }
    if (!html) continue;
    const metaDescription = extractMeta(html, "description");
    const canonical = extractCanonical(html) || du;
    const mapped = categoryMap.get(du) || {};
    // Prefer the menu link text (more accurate than og:title which can be generic).
    const title = mapped.linkText || extractCourseTitle(html) || du;

    courses.push({
      source: "gipmc",
      sourceUrl: du,
      canonical,
      title,
      metaDescription,
      domainTitle: mapped.domainTitle || "",
      groupTitle: mapped.groupTitle || "",
    });
    if (courses.length % 25 === 0) {
      console.log(`Enriched ${courses.length}/${allCourseUrls.length}`);
    }
  }

  const output = {
    generatedAt: new Date().toISOString(),
    source: {
      sitemap: SITEMAP_URL,
      detailsCount: detailUrls.length,
      menuCourseCount: categoryMap.size,
      menuSourceUrl,
    },
    courses,
  };

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(output, null, 2));
  console.log("Wrote:", OUT_FILE);
  console.log("Courses:", courses.length);

  fs.writeFileSync(OUT_MISSING_FILE, JSON.stringify({ generatedAt: new Date().toISOString(), missing }, null, 2));
  console.log("Wrote:", OUT_MISSING_FILE);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

