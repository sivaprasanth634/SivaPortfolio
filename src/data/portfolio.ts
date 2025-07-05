import { Project, Skill, Certification, ContactInfo } from '../types';

export const personalInfo = {
  name: "Sivaprasanth T",
  title: "AI & Data Science Student",
  education: {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    institution: "Dr. N.G.P Institute of Technology",
    cgpa: "7.36",
    school: "Vivekam Matric Hr. Sec School",
    schoolPercentage: "80.33%"
  },
  bio: "Passionate AI and Data Science student with a strong foundation in programming and web development. Currently pursuing B.Tech with hands-on experience in machine learning projects and full-stack development."
};

export const skills: Skill[] = [
  { name: "Python", level: 90, category: "programming" },
  { name: "Java", level: 85, category: "programming" },
  { name: "C", level: 80, category: "programming" },
  { name: "HTML", level: 85, category: "web" },
  { name: "CSS", level: 80, category: "web" },
  { name: "Power BI", level: 75, category: "tools" },
  { name: "Microsoft Excel", level: 80, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Sign Language Detection",
    description: "AI-powered system that converts sign language gestures into text using computer vision and machine learning algorithms.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Machine Learning"],
    features: [
      "Real-time gesture recognition",
      "High accuracy detection",
      "Text conversion output",
      "User-friendly interface"
    ]
  },
  {
    id: 2,
    title: "Virtual Classroom Learning Management System",
    description: "A comprehensive digital learning platform that facilitates online education with interactive features and content management.",
    technologies: ["Web Development", "Database Management", "UI/UX Design"],
    features: [
      "Course management system",
      "Student progress tracking",
      "Interactive assignments",
      "Real-time communication",
      "Resource sharing"
    ]
  },
  {
    id: 3,
    title: "College Event Management System",
    description: "Web-based system designed to streamline the planning, organization, and management of college events and activities.",
    technologies: ["Web Development", "Database Design", "Event Planning"],
    features: [
      "Event creation and scheduling",
      "Registration management",
      "Attendance tracking",
      "Resource allocation",
      "Notification system"
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Introduction to Industry 4.0 and Industrial Internet of Things",
    issuer: "NPTEL",
    year: "2024",
    description: "Comprehensive course covering Industry 4.0 concepts, IoT applications, and smart manufacturing technologies."
  },
  {
    id: 2,
    title: "Virtual Classroom LMS - Research Paper",
    issuer: "2nd International Conference (UAE)",
    year: "2024",
    description: "Presented research on Virtual Classroom Learning Management System at an international conference."
  },
  {
    id: 3,
    title: "Power BI Workshop",
    issuer: "OfficeMast",
    year: "2024",
    description: "Hands-on workshop on Power BI for data visualization and business intelligence."
  }
];

export const contactInfo: ContactInfo = {
  email: "prasanththangaraj11@gmail.com",
  linkedin: "https://www.linkedin.com/in/sivaprasanth-t",
  github: "https://github.com/sivaprasanth634",
  phone: "+91-8870075011"
};