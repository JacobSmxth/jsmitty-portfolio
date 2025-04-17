import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recruiter Information | Jacob Smith',
  description: 'Information for recruiters: work experience, education, projects, and skills of Jacob Smith, Front End Web Developer.',
};

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {children}
    </div>
  );
} 