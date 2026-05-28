export interface Skill {
  name: string;
  percentage: number; // 0 to 100
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'soft-skills';
  icon: string; // Lucide icon name
  level: string; // e.g. "Intermediate", "Advanced"
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'frontend' | 'backend' | 'database' | 'fullstack';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  features: string[];
  role: string;
  difficulty: string; // e.g. "Intermediate", "Beginner Friendly"
}

export interface EducationItem {
  school: string;
  degree: string;
  gpa: string;
  period: string;
  coursework: string[];
  certifications: { name: string; issuer: string; date: string }[];
  seminars: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: 'freelance' | 'hackathon' | 'leadership' | 'project';
  description: string;
  bullets: string[];
  tags: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string; // Lucide icon name
}
