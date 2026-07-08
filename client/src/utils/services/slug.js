/**
 * Finds a service in servicesData by its slug.
 * 
 * @param {Array} services - Complete services data
 * @param {string} slug - Route URL slug parameter
 * @returns {Object|null} Matching service object
 */
export const getServiceBySlug = (services, slug) => {
  if (!services || !slug) return null;
  return services.find((serv) => serv.slug.toLowerCase() === slug.toLowerCase()) || null;
};
