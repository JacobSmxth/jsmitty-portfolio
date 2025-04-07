export interface DailyLearning {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
}

export const dailyLearnings: DailyLearning[] = [
  {
    id: '1',
    date: '2025-04-06',
    title: 'Next.js Server Actions',
    description: 'Discovered how to use Next.js server actions for form handling without API routes. Much cleaner approach!',
    tags: ['Next.js', 'React', 'Server Actions']
  },
  {
    id: '2',
    date: '2025-04-05',
    title: 'CSS Container Queries',
    description: 'Learned how to use container queries for more modular responsive design. No more media queries everywhere!',
    tags: ['CSS', 'Responsive Design']
  },
  {
    id: '3',
    date: '2025-04-04',
    title: 'React Suspense Patterns',
    description: 'Explored new patterns for data loading with React Suspense and streaming SSR.',
    tags: ['React', 'Performance']
  }
]; 