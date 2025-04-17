/**
 * workThoughts.ts
 * 
 * Stores brief updates or reflections related to work and projects.
 * Primarily displayed in a sidebar or section on the main /reader page.
 */
export interface WorkThought {
  id: string;
  date: string;
  title: string;
  thought: string;
  mood: 'positive' | 'neutral' | 'challenging' | 'excited' | 'productive' | 'analytical';
}

export const workThoughts: WorkThought[] = [
  {
    id: '2025-04-13',
    date: '2025-04-13',
    title: 'Fr0st.gg Major Update',
    thought: 'Fr0st has requested a significant expansion of his website, including a user authentication system, point/reward system for viewers, and a new challenges page. This will be a substantial project requiring careful planning and implementation of new features to enhance user engagement and site functionality.',
    mood: 'excited'
  },
  {
    id: '1',
    date: '2025-04-06',
    title: 'Fr0st.gg Project Completion',
    thought: 'Successfully completed the Fr0st.gg project! Implemented a comprehensive leaderboard system, secure backend CMS panel, and encrypted API endpoints. The platform now features real-time data processing, secure user authentication, and advanced rate limiting. Very satisfied with the final result and the positive client feedback.',
    mood: 'positive'
  },
  {
    id: '3',
    date: '2025-04-08',
    title: 'Fr0st.gg Updates',
    thought: 'Reconnected with Fr0st to implement some minor fixes and updates to the site. The changes were straightforward but meaningful, and it was great to see how the platform continues to serve its purpose effectively.',
    mood: 'positive'
  },
  {
    id: '2',
    date: '2025-04-05',
    title: 'Client Project Progress',
    thought: 'Hit a small setback today when a file corruption cost me about 1-2 hours of work. However, I was able to recover and rebuild most of the progress. The project is getting close to completion, and I\'m excited to see it come together. This experience reinforced the importance of regular commits and backups!',
    mood: 'challenging'
  },
  {
    id: '2025-04-11',
    date: '2025-04-11',
    title: 'FuhrerGoatTV Project Growth',
    thought: 'The FuhrerGoatTV project has evolved significantly from its initial single-page design. Successfully implemented two sponsor-specific leaderboards and a dedicated challenges page. The addition of a Firebase backend has streamlined operations and automated updates, making the site more maintainable and efficient.',
    mood: 'productive'
  },
  {
    id: '2025-04-09',
    date: '2025-04-09',
    title: 'FuhrerGoatTV Project Progress',
    thought: 'Started implementing new features for FuhrerGoatTV, including sponsor leaderboards and a challenges section. The site is performing well, and the planned backend implementation will help manage the growing complexity of the project.',
    mood: 'analytical'
  },
  {
    id: '2025-04-14',
    date: '2025-04-14',
    title: 'Fr0st.gg Architecture Planning',
    thought: 'Considering migrating Fr0st.gg from Vite to Next.js to better support the new features. Next.js would provide built-in API routes for the authentication system, better SEO for the challenges page, and improved security with server-side rendering. The built-in middleware would also help manage the point/reward system more efficiently. This would be a significant but worthwhile upgrade for the project\'s long-term scalability.',
    mood: 'analytical'
  }
  // Add more work thoughts here
];

// Sort the array by date (most recent first)
workThoughts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); 