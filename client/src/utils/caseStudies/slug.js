/**
 * Resolves a case study from list by matching the slug parameter.
 * 
 * @param {Array} caseStudies - Complete case studies data
 * @param {string} slug - Route URL slug parameter
 * @returns {Object|null} Matching case study object
 */
export const getCaseStudyBySlug = (caseStudies, slug) => {
  if (!caseStudies || !slug) return null;
  return caseStudies.find((study) => study.slug.toLowerCase() === slug.toLowerCase()) || null;
};

/**
 * Returns a list of case study objects that match the specified related slugs array.
 * 
 * @param {Array} caseStudies - Complete case studies data
 * @param {Array} relatedSlugs - Slugs of related projects (e.g. ['verda', 'traincape'])
 * @returns {Array} List of related case studies objects
 */
export const getRelatedStudies = (caseStudies, relatedSlugs) => {
  if (!caseStudies || !relatedSlugs) return [];
  return caseStudies.filter((study) => relatedSlugs.includes(study.slug));
};
