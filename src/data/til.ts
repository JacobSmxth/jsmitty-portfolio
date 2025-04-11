interface TIL {
  id: number;
  title: string;
  content: string;
  date: string;
  tags: string[];
}

const til: TIL[] = [
  {
    id: 1,
    title: "The Power of Deep Work",
    content: "Cal Newport's concept of deep work has transformed how I approach productivity. By creating focused, distraction-free blocks of time, I've found that I can accomplish more in 2-3 hours than I used to in an entire day. The key is eliminating distractions and committing fully to the task at hand.",
    date: "2025-03-15",
    tags: ["Productivity", "Personal Development", "Focus"]
  },
  {
    id: 2,
    title: "The 80/20 Rule in Learning",
    content: "The Pareto Principle applies beautifully to learning new skills. Often, 20% of the effort yields 80% of the results. Instead of trying to master everything, focusing on the most impactful aspects first can lead to faster progress and better results.",
    date: "2025-03-14",
    tags: ["Learning", "Efficiency", "Personal Growth"]
  },
  {
    id: 3,
    title: "The Importance of Sleep Hygiene",
    content: "Creating a consistent sleep routine has dramatically improved my energy levels and focus. Going to bed and waking up at the same time every day, even on weekends, has been more effective than any productivity hack I've tried.",
    date: "2025-03-13",
    tags: ["Health", "Wellness", "Routine"]
  },
  {
    id: 4,
    title: "The Art of Saying No",
    content: "Learning to say no to good opportunities to make room for great ones has been a game-changer. It's not about being negative, but about being intentional with your time and energy. This has helped me focus on what truly matters.",
    date: "2025-03-12",
    tags: ["Time Management", "Boundaries", "Personal Growth"]
  },
  {
    id: 5,
    title: "The Power of Compound Interest",
    content: "Starting to invest early, even with small amounts, can lead to significant growth over time. The key is consistency and patience. This principle applies not just to finances, but to skills, relationships, and personal development as well.",
    date: "2025-03-11",
    tags: ["Finance", "Long-term Thinking", "Growth"]
  },
  {
    id: 6,
    title: "The Value of Delayed Gratification",
    content: "The ability to delay gratification is one of the strongest predictors of success. Whether it's saving money, building skills, or working on long-term projects, the willingness to invest time now for future rewards is crucial.",
    date: "2025-03-10",
    tags: ["Success", "Discipline", "Personal Development"]
  },
  {
    id: 7,
    title: "The Importance of Physical Movement",
    content: "Regular movement throughout the day, not just exercise, is crucial for maintaining energy and focus. Taking short walks, stretching, or even just standing up regularly can significantly improve productivity and well-being.",
    date: "2025-03-09",
    tags: ["Health", "Productivity", "Wellness"]
  },
  {
    id: 8,
    title: "The Power of Writing Things Down",
    content: "Writing down thoughts, ideas, and tasks not only helps with memory but also with processing and understanding. It's a simple habit that has significantly improved my clarity and organization.",
    date: "2025-03-08",
    tags: ["Organization", "Clarity", "Productivity"]
  },
  {
    id: 9,
    title: "The Value of Diverse Perspectives",
    content: "Seeking out and listening to different viewpoints, even those that challenge my own, has been incredibly valuable. It helps me grow, learn, and make better decisions by considering multiple angles.",
    date: "2025-03-07",
    tags: ["Growth", "Open-mindedness", "Learning"]
  },
  {
    id: 10,
    title: "The Importance of Rest",
    content: "Taking regular breaks and allowing time for rest is not a sign of weakness but a crucial part of sustainable productivity. Quality rest leads to better focus, creativity, and overall performance.",
    date: "2025-03-06",
    tags: ["Wellness", "Productivity", "Balance"]
  }
];

// Sort the array by date (most recent first