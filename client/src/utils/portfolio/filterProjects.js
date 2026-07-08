/**
 * Filters projects based on the selected category key.
 * 
 * @param {Array} projects - Complete list of projects from data
 * @param {string} category - Active filter category (e.g. 'all', 'Web Development', etc.)
 * @returns {Array} Filtered list of projects
 */
export const filterProjects = (projects, category) => {
  if (!projects) return [];
  if (!category || category.toLowerCase() === 'all') return projects;
  
  return projects.filter(project => {
    // Exact or loose match on projectType or industry
    const typeMatch = project.projectType && project.projectType.toLowerCase() === category.toLowerCase();
    
    // In case of special CRM filter mapping to projects that contain CRM in description/title
    if (category.toLowerCase() === 'crm') {
      const titleMatch = project.title && project.title.toLowerCase().includes('crm');
      const descMatch = project.description && project.description.toLowerCase().includes('crm');
      return typeMatch || titleMatch || descMatch;
    }
    
    return typeMatch;
  });
};
