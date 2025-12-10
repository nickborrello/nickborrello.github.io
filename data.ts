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
    period: "2023 - Present",
    description: "Building internal tools to automate product registration and integrate with web inventory systems. Focusing on real-time inventory management and process automation.",
    location: "Remote / Hybrid",
    type: "Full-time",
    skills: ["Python", "Automation", "Internal Tools", "React", "TypeScript", "SQL"],
    achievements: [
      "Developed a custom inventory synchronization tool reducing manual entry time by 80%",
      "Engineered automated product registration scripts for vendor portals",
      "Built a modern React-based dashboard for real-time sales analytics",
      "Maintained 99.9% uptime for critical internal business applications"
    ]
  },
  {
    id: "exp2",
    role: "Process Engineering Intern",
    company: "Allegro Microsystems",
    period: "2022",
    description: "Created Azure DevOps pipelines to automate test driver deployments. Streamlined CI/CD workflows to improve development efficiency.",
    location: "Manchester, NH",
    type: "Internship",
    skills: ["Azure DevOps", "CI/CD", "PowerShell", "Scripting", "Agile"],
    achievements: [
      "Designed and deployed automated CI/CD pipelines for driver testing",
      "Reduced deployment validation time by 40% through automation",
      "Collaborated with senior engineers to optimize build configurations",
      "Documented standard operating procedures for DevOps workflows"
    ]
  },
  {
    id: "exp3",
    role: "Undergraduate Student",
    company: "Worcester Polytechnic Institute",
    period: "2019 - 2023",
    description: "Completed rigorous coursework in Computer Science, Software Engineering, and Embedded Systems. Led multiple team projects and research initiatives.",
    location: "Worcester, MA",
    type: "Education",
    skills: ["Java", "C/C++", "System Design", "Algorithms", "Leadership"],
    achievements: [
      "Completed Major Qualifying Project (MQP) on advanced graphics engines",
      "Dean's List for academic excellence (Multiple Semesters)",
      "Served as Frontend Lead for Hospital Kiosk Service Engineering project",
      "Specialized in Software Security and Network Protocols"
    ]
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
    title: "Resumancer",
    description: "Resume Builder with Agentic AI Assistance. Features real-time content generation, formatting, and export capabilities.",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind"],
    features: [
      "AI-powered content suggestions",
      "Real-time PDF preview & generation",
      "Version control for resumes",
      "Customizable templates"
    ],
    link: "https://resumancer.dev",
    repoUrl: "https://github.com/nickborrello/resumancer",
    highlight: "Active Development",
    status: "Beta"
  },
  {
    id: "p2",
    title: "Syllablast",
    description: "A Next.js puzzle game where players reconstruct words by swapping syllables on a 4×4 grid. Features interactive gameplay logic.",
    tech: ["Next.js", "TypeScript", "Tailwind", "React"],
    features: [
      "Daily puzzle challenges",
      "Interactive drag-and-drop mechanics",
      "Responsive mobile-first design",
      "Score tracking and statistics"
    ],
    imageUrl: "/syllablast.png",
    link: "https://nickborrello.github.io/syllablast/",
    repoUrl: "https://github.com/nickborrello/syllablast",
    highlight: "Deployed & Playable",
    status: "Live"
  },
  {
    id: "p3",
    title: "BayState Internal Tools",
    description: "Building internal tools to automate product registration and integrate with web inventory systems. Focusing on real-time inventory management.",
    tech: ["Python", "React", "TypeScript", "Automation"],
    features: [
      "Automated product registration workflow",
      "Real-time inventory synchronization",
      "Custom dashboard for metrics",
      "Role-based access control"
    ],
    imageUrl: "/staffing_tool.png",
    repoUrl: "https://github.com/nickborrello/BayStateTools",
    highlight: "Production Tooling",
    status: "In Production"
  },
  {
    id: "p4",
    title: "Hospital Kiosk App",
    description: "Led the frontend team for a JavaFX application used for hospital navigation and service management.",
    tech: ["Java", "JavaFX", "UI/UX"],
    features: [
      "A* Pathfinding for hospital navigation",
      "Service request management system",
      "Interactive graphical map editor",
      "Employee database integration"
    ],
    imageUrl: "/kiosk.png",
    link: "https://github.com/CS-3733-D23-Team-E?view_as=public",
    repoUrl: "https://github.com/CS-3733-D23-Team-E",
    highlight: "Frontend Lead",
    status: "Completed"
  },
  {
    id: "p5",
    title: "NEVI Plan Search",
    description: "Tool designed to help analysts search through state NEVI plans for structured, consistent responses to critical questions.",
    tech: ["Python", "Data Analysis", "Search"],
    features: [
      "Keyword frequency analysis",
      "Contextual snippet extraction",
      "Batch PDF processing",
      "Export results to CSV"
    ],
    imageUrl: "/search_tool.png",
    repoUrl: "https://github.com/nickborrello/NEVI-Search-Tool",
    highlight: "Data Tool",
    status: "Completed"
  },
  {
    id: "p6",
    title: "Webware Fullstack Suite",
    description: "A collection of modern full-stack web applications featuring React, Vite, Node.js, Express, and MongoDB authentication.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "JWT & Session-based Authentication",
      "RESTful API design patterns",
      "Persistent data storage with MongoDB",
      "Responsive React frontends"
    ],
    repoUrl: "https://github.com/nickborrello/webware-react-vite-app",
    highlight: "Fullstack Coursework",
    status: "Completed"
  },
  {
    id: "p7",
    title: "MSP430 Guitar Hero",
    description: "Embedded interactive rhythm game developed for the MSP430F5529 LaunchPad. Uses hardware interrupts and LCD display.",
    tech: ["C", "Embedded", "MSP430"],
    features: [
      "Real-time hardware interrupts",
      "Custom LCD graphics driver",
      "Audio output generation",
      "Button input debouncing"
    ],
    repoUrl: "https://github.com/nickborrello/msp430-embedded-projects",
    highlight: "Embedded C",
    status: "Completed"
  },
  {
    id: "p8",
    title: "Network Protocols",
    description: "Implementation of custom network protocols and routing logic simulations using Python.",
    tech: ["Python", "Networking"],
    features: [
      "Custom packet structure implementation",
      "Routing algorithm simulations",
      "Network traffic analysis",
      "Socket programming examples"
    ],
    repoUrl: "https://github.com/nickborrello/python-network-protocols",
    status: "Completed"
  },
];

export const CONTACTS: ContactMethod[] = [
  { platform: "GitHub", handle: "@nickborrello", link: "https://github.com/nickborrello", icon: Github, status: "Active" },
  { platform: "LinkedIn", handle: "nicholasborrello", link: "https://www.linkedin.com/in/nicholasborrello/", icon: Linkedin, status: "Professional" },
  { platform: "Trailhead", handle: "nborrello", link: "https://www.salesforce.com/trailblazer/nborrello", icon: Cloud, status: "Learning" },
  { platform: "Email", handle: "Direct Connect", link: "mailto:nvborrello@gmail.com", icon: Mail, status: "Direct" },
];