interface Education {
  school: string;
  degree?: string;
  field?: string;
  duration: string;
  gpa: number;
  focus?: string[];
  relevantCoursework?: string[];
  achievements?: string[];
}

export const education: Education[] = [
  {
    school: "University of North Georgia",
    degree: "B.S.",
    field: "Cybersecurity",
    duration: "Present",
    gpa: 3.37,
    focus: [
      "Financial Technology",
      "Web Development"
    ],
    relevantCoursework: [
      "Web Programming",
      "Applied Cybersecurity"
    ]
  },
  {
    school: "Denmark High School",
    duration: "Graduated",
    gpa: 3.88,
    relevantCoursework: [
      "AP Computer Science Principles",
      "AP Computer Science A"
    ],
    achievements: [
      "Football Team Captain",
      "Student of the Year",
      "All A's except for Sophmore Year"
    ]
  }
]; 