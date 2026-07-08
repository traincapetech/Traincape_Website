/**
 * Finds a product in productsData by its slug.
 * 
 * @param {Array} products - Complete products data
 * @param {string} slug - Route URL slug parameter
 * @returns {Object|null} Matching product object
 */
export const getProductBySlug = (products, slug) => {
  if (!products || !slug) return null;
  return products.find((prod) => prod.slug.toLowerCase() === slug.toLowerCase()) || null;
};
