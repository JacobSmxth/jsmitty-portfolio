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
    date: '2025-03-15',
    title: 'The Power of Deep Work',
    description: "Cal Newport's concept of deep work has transformed how I approach productivity. By creating focused, distraction-free blocks of time, I've found that I can accomplish more in 2-3 hours than I used to in an entire day. The key is eliminating distractions and committing fully to the task at hand.",
    tags: ['Productivity', 'Personal Development', 'Focus']
  },
  {
    id: '2',
    date: '2025-03-16',
    title: 'The 80/20 Rule in Learning',
    description: 'The Pareto Principle applies beautifully to learning new skills. Often, 20% of the effort yields 80% of the results. Instead of trying to master everything, focusing on the most impactful aspects first can lead to faster progress and better results.',
    tags: ['Learning', 'Efficiency', 'Personal Growth']
  },
  {
    id: '3',
    date: '2025-03-17',
    title: 'The Importance of Sleep Hygiene',
    description: 'Creating a consistent sleep routine has dramatically improved my energy levels and focus. Going to bed and waking up at the same time every day, even on weekends, has been more effective than any productivity hack I\'ve tried.',
    tags: ['Health', 'Wellness', 'Routine']
  },
  {
    id: '4',
    date: '2025-03-18',
    title: 'The Art of Saying No',
    description: 'Learning to say no to good opportunities to make room for great ones has been a game-changer. It\'s not about being negative, but about being intentional with your time and energy. This has helped me focus on what truly matters.',
    tags: ['Time Management', 'Boundaries', 'Personal Growth']
  },
  {
    id: '5',
    date: '2025-03-19',
    title: 'The Power of Compound Interest',
    description: 'Starting to invest early, even with small amounts, can lead to significant growth over time. The key is consistency and patience. This principle applies not just to finances, but to skills, relationships, and personal development as well.',
    tags: ['Finance', 'Long-term Thinking', 'Growth']
  },
  {
    id: '6',
    date: '2025-03-20',
    title: 'The Value of Delayed Gratification',
    description: 'The ability to delay gratification is one of the strongest predictors of success. Whether it\'s saving money, building skills, or working on long-term projects, the willingness to invest time now for future rewards is crucial.',
    tags: ['Success', 'Discipline', 'Personal Development']
  },
  {
    id: '7',
    date: '2025-03-21',
    title: 'The Importance of Physical Movement',
    description: 'Regular movement throughout the day, not just exercise, is crucial for maintaining energy and focus. Taking short walks, stretching, or even just standing up regularly can significantly improve productivity and well-being.',
    tags: ['Health', 'Productivity', 'Wellness']
  },
  {
    id: '8',
    date: '2025-03-22',
    title: 'The Power of Writing Things Down',
    description: 'Writing down thoughts, ideas, and tasks not only helps with memory but also with processing and understanding. It\'s a simple habit that has significantly improved my clarity and organization.',
    tags: ['Organization', 'Clarity', 'Productivity']
  },
  {
    id: '9',
    date: '2025-03-23',
    title: 'The Value of Diverse Perspectives',
    description: 'Seeking out and listening to different viewpoints, even those that challenge my own, has been incredibly valuable. It helps me grow, learn, and make better decisions by considering multiple angles.',
    tags: ['Growth', 'Open-mindedness', 'Learning']
  },
  {
    id: '10',
    date: '2025-03-24',
    title: 'The Importance of Rest',
    description: 'Taking regular breaks and allowing time for rest is not a sign of weakness but a crucial part of sustainable productivity. Quality rest leads to better focus, creativity, and overall performance.',
    tags: ['Wellness', 'Productivity', 'Balance']
  }
]; 