/**
 * Sorts projects based on featured status or alphabetical order.
 * 
 * @param {Array} projects - List of projects
 * @param {string} sortBy - Sort criteria ('default', 'name')
 * @returns {Array} Sorted list of projects
 */
export const sortProjects = (projects, sortBy = 'default') => {
  if (!projects) return [];
  const projectsCopy = [...projects];
  
  if (sortBy === 'name') {
    return projectsCopy.sort((a, b) => a.title.localeCompare(b.title));
  }
  
  // Default sorting: Featured first
  return projectsCopy.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
};
