export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'web' | 'tools';
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  phone: string;
}