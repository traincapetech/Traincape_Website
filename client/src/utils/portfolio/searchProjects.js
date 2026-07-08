/**
 * Searches projects by checking if query matches title, description, technologies, industry, or type.
 * 
 * @param {Array} projects - List of projects
 * @param {string} query - Text search query input
 * @returns {Array} Filtered list of matching projects
 */
export const searchProjects = (projects, query) => {
  if (!projects) return [];
  if (!query || query.trim() === '') return projects;
  
  const cleanQuery = query.toLowerCase().trim();
  
  return projects.filter(project => {
    const titleMatch = project.title && project.title.toLowerCase().includes(cleanQuery);
    const descMatch = project.description && project.description.toLowerCase().includes(cleanQuery);
    const industryMatch = project.industry && project.industry.toLowerCase().includes(cleanQuery);
    const typeMatch = project.projectType && project.projectType.toLowerCase().includes(cleanQuery);
    
    // Check array of technologies
    const techMatch = project.technologies && project.technologies.some(tech => 
      tech.toLowerCase().includes(cleanQuery)
    );
    
    return titleMatch || descMatch || industryMatch || typeMatch || techMatch;
  });
};
