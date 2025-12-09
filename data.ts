import { 
  Github, 
  Linkedin, 
  Mail, 
  Cloud, 
  Shield,
  Code,
  Terminal,
  Layout,
  Globe,
  Cpu
} from 'lucide-react';
import { ProjectItem, ContactMethod, ExperienceItem, SkillItem } from './types';

export const USER_INFO = {
  name: "Nicholas Borrello",
  title: "Software Engineer",
  yearsExp: "2+", 
  location: "Open to Relocation",
  tagline: "Passionate about building innovative solutions.",
  bio: "Software Engineer with over 2 years of experience building innovative solutions. Specialized in full-stack development with a focus on automation, internal tools, and responsive user interfaces. Proven track record of improving operational efficiency through custom software."
};

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Software Engineer",
    company: "Baystate Pet & Garden",
    description: "Building internal tools to automate product registration and integrate with web inventory systems. Focusing on real-time inventory management and process automation.",
    skills: ["Python", "Automation", "Internal Tools"]
  },
  {
    id: "exp2",
    role: "Process Engineering Intern",
    company: "Allegro Microsystems",
    description: "Created Azure DevOps pipelines to automate test driver deployments. Streamlined CI/CD workflows to improve development efficiency.",
    skills: ["Azure DevOps", "CI/CD", "Scripting"]
  }
];

export const SKILLS: SkillItem[] = [
  { id: "s1", name: "TypeScript", category: "Language", level: "S-Tier", icon: Code },
  { id: "s2", name: "Python", category: "Language", level: "A-Tier", icon: Terminal },
  { id: "s3", name: "React", category: "Framework", level: "S-Tier", icon: Layout },
  { id: "s4", name: "Next.js", category: "Framework", level: "A-Tier", icon: Globe },
  { id: "s5", name: "Java", category: "Language", level: "B-Tier", icon: Cpu },
  { id: "s6", name: "Git", category: "Tool", level: "S-Tier", icon: Github },
  { id: "s7", name: "Azure", category: "Tool", level: "A-Tier", icon: Cloud },
  { id: "s8", name: "Auth0", category: "Tool", level: "B-Tier", icon: Shield },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Syllablast Puzzle Game",
    description: "A Next.js puzzle game where players reconstruct words by swapping syllables on a 4×4 grid. Features interactive gameplay logic and responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind", "React"],
    imageUrl: "https://picsum.photos/id/1050/400/300?grayscale",
    link: "https://nickborrello.github.io/syllablast/",
    highlight: "Deployed & Playable"
  },
  {
    id: "p2",
    title: "Hospital Kiosk App",
    description: "Led the frontend team for a JavaFX application used for hospital navigation and service management. Coordinated directly with stakeholders to meet specific operational needs.",
    tech: ["Java", "JavaFX", "UI/UX"],
    imageUrl: "https://picsum.photos/id/180/400/300?grayscale",
    link: "https://github.com/CS-3733-D23-Team-E?view_as=public",
    highlight: "Frontend Lead"
  },
  {
    id: "p3",
    title: "Staffing Tool Security",
    description: "Enhanced API security for a staffing tool application. Configured Auth0 roles and permissions within a full-stack web environment to ensure robust data protection.",
    tech: ["Auth0", "Security", "Full Stack"],
    imageUrl: "https://picsum.photos/id/60/400/300?grayscale",
    link: "#",
    highlight: "Auth0 Implementation"
  },
  {
    id: "p4",
    title: "PDF Keyword Search",
    description: "Built a desktop tool using Python and Qt to extract key insights from large document sets instantly. Optimized for performance when parsing multiple large files.",
    tech: ["Python", "Qt", "Data Parsing"],
    imageUrl: "https://picsum.photos/id/1073/400/300?grayscale",
    link: "#",
    highlight: "Python Desktop App"
  },
];

export const CONTACTS: ContactMethod[] = [
  { platform: "GitHub", handle: "@nickborrello", link: "https://github.com/nickborrello", icon: Github, status: "Active" },
  { platform: "LinkedIn", handle: "nicholasborrello", link: "https://www.linkedin.com/in/nicholasborrello/", icon: Linkedin, status: "Professional" },
  { platform: "Trailhead", handle: "nborrello", link: "https://www.salesforce.com/trailblazer/nborrello", icon: Cloud, status: "Learning" },
  { platform: "Email", handle: "Contact Me", link: "mailto:hello@example.com", icon: Mail, status: "Direct" },
];