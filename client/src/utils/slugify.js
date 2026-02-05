export function slugify(input) {
  return String(input || "")
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/&/g, "and")
    .replace(/&#160;|&nbsp;/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function decodeHtmlEntities(input) {
  return String(input || "")
    .replace(/&#160;|&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim();
}

