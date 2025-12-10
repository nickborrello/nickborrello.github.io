import { LucideIcon } from "lucide-react";

export interface StatAttribute {
  label: string;
  value: string | number;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period?: string;
  description: string;
  skills: string[];
  location?: string;
  type?: string;
  achievements?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features?: string[];
  imageUrl?: string;
  link?: string;
  repoUrl?: string;
  highlight?: string;
  status?: string;
}

export interface ContactMethod {
  platform: string;
  handle: string;
  link: string;
  icon: LucideIcon;
  status: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Language' | 'Framework' | 'Tool';
  level: string;
  icon: LucideIcon;
}

export enum MenuTab {
  Profile = 'Profile', // Experience
  Projects = 'Projects',
  Skills = 'Skills',
  About = 'About', // Intro/Bio
  Credits = 'Credits'
}