import { useLocation } from "react-router-dom";

const PATH_MAP = {
  "about-us": "About Us",
  "contact-us": "Contact Us",
  "services": "Services",
  "products": "Products",
  "portfolio": "Portfolio",
  "case-studies": "Case Studies",
  "certifications": "Certifications",
  "faq": "FAQs",
  "blogs": "Blogs",
  "career": "Careers",
  "policies": "Policies",
  "terms-and-conditions": "Terms & Conditions"
};

function cleanSlug(slug) {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Custom React hook to generate breadcrumbs list dynamically based on path.
 * @returns {Array} - Array of { name, url } breadcrumbs
 */
export default function useBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  
  const crumbs = [{ name: "Home", url: "/" }];
  
  let currentUrl = "";
  pathnames.forEach((pathSegment) => {
    currentUrl += `/${pathSegment}`;
    const name = PATH_MAP[pathSegment.toLowerCase()] || cleanSlug(pathSegment);
    crumbs.push({ name, url: currentUrl });
  });
  
  return crumbs;
}
