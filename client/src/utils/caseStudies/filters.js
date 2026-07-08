/**
 * Filters case studies by category and searches text matching client, title, overview, tech, or features.
 * 
 * @param {Array} caseStudies - Complete case studies data
 * @param {string} category - Active category filter (e.g. 'all', 'Retail & E-commerce', etc.)
 * @param {string} query - Search term
 * @returns {Array} Filtered and matching case studies
 */
export const filterCaseStudies = (caseStudies, category = "all", query = "") => {
  if (!caseStudies) return [];
  
  let result = caseStudies;
  
  // 1. Category Filter
  if (category && category !== "all") {
    result = result.filter(
      (study) => study.industry.toLowerCase() === category.toLowerCase()
    );
  }
  
  // 2. Search Query Filter
  if (query && query.trim() !== "") {
    const cleanQuery = query.toLowerCase().trim();
    result = result.filter((study) => {
      const clientMatch = study.client && study.client.toLowerCase().includes(cleanQuery);
      const titleMatch = study.title && study.title.toLowerCase().includes(cleanQuery);
      const overviewMatch = study.overview && study.overview.toLowerCase().includes(cleanQuery);
      const techMatch = study.technologyStack && study.technologyStack.some(tech => 
        tech.toLowerCase().includes(cleanQuery)
      );
      const featureMatch = study.features && study.features.some(feat => 
        feat.toLowerCase().includes(cleanQuery)
      );
      
      return clientMatch || titleMatch || overviewMatch || techMatch || featureMatch;
    });
  }
  
  return result;
};
