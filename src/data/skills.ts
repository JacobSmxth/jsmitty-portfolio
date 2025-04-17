export interface Skill {
  name: string;
  level: number;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 70 },
  { name: 'Next.js', level: 65 },
  { name: 'TypeScript', level: 55 },
  { name: 'JavaScript', level: 75 },
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Framer Motion', level: 70 },
  { name: 'Responsive Design', level: 85 },
  { name: 'Web Accessibility', level: 75 },

  // Backend
  { name: 'Node.js', level: 45 },
  { name: 'RESTful APIs', level: 50 },
  { name: 'Firebase', level: 75 },

  // Version Control
  { name: 'Git', level: 85 },
  { name: 'GitHub', level: 90 },

  // Design
  { name: 'UI/UX Design', level: 80 },
  { name: 'Photoshop', level: 70 },

  // Soft Skills
  { name: 'Open to Learning', level: 100 },
  { name: 'Problem Solving', level: 85 },
  { name: 'Communication', level: 95 },
  { name: 'Documentation', level: 80 }
];