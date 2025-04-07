import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jacob Smith | Web Developer",
  description: "Portfolio of Jacob Smith, a front-end web developer.",
};

export default function Template({ children }: { children: React.ReactNode }) {
  return children;
} 