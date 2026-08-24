export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  highlights?: string[];
  tech: string[];
  link?: string;
  repoUrl?: string;
  image?: string;
  imageAlt?: string;
  gallery?: { src: string; alt: string }[];
  featured?: boolean;
  startDate?: string;
  endDate?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type?: string;
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface CapabilityGroup {
  id: string;
  label: string;
  description?: string;
  skills: string[];
}

export interface ContactLink {
  platform: string;
  handle: string;
  link: string;
}

export interface UserInfo {
  name: string;
  firstName: string;
  title: string;
  location: string;
  status: string;
  positioning: string;
  summary: string;
  bio: string;
}
