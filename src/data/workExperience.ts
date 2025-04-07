interface WorkExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Freelance",
    period: "2025 - Present",
    description: [
      "Develop and maintain responsive web applications using React, Next.js, and Tailwind CSS",
      "Implement modern UI/UX designs with a focus on accessibility and performance optimization",
      "Collaborate with clients to translate business requirements into technical solutions",
      "Utilize version control (Git) and modern development workflows to ensure code quality"
    ]
  },
  {
    id: 2,
    title: "Lead Checker",
    company: "Tennis Warehouse",
    period: "2023 - Present", 
    description: [
      "Perform final quality control checks on strung tennis racquets before customer delivery",
      "Review 15+ racquets daily for proper string tension, pattern accuracy and customization specs",
      "Document and report quality issues to help improve stringing team performance",
      "Assist with inventory management and maintain detailed records of string and grip stock"
    ]
  },
  {
    id: 3,
    title: "Crew Member / Shift Lead",
    company: "Dunkin Donuts",
    period: "2021 - 2023",
    description: [
      "Supervised and coordinated 2-3 team members during peak hours to maintain efficient operations",
      "Managed cash handling and daily sales reconciliation with 100% accuracy",
      "Trained new employees on company procedures, food safety, and customer service standards",
      "Maintained store cleanliness and inventory levels while adhering to food safety regulations"
    ]
  }
]; 