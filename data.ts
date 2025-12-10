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
  Cpu,
  Database,
  Server,
  Palette,
  FileCode,
  Settings,
  RefreshCw,
  PenTool,
  Zap,
  FileText
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
  { id: "s9", name: "PostgreSQL", category: "Tool", level: "A-Tier", icon: Database },
  { id: "s10", name: "Tailwind", category: "Framework", level: "A-Tier", icon: Palette },
  { id: "s11", name: "Node.js", category: "Framework", level: "A-Tier", icon: Server },
  { id: "s12", name: "SQL", category: "Language", level: "A-Tier", icon: Database },
  { id: "s13", name: "C/C++", category: "Language", level: "B-Tier", icon: FileCode },
  { id: "s14", name: "Azure DevOps", category: "Tool", level: "A-Tier", icon: RefreshCw },
  { id: "s15", name: "MongoDB", category: "Tool", level: "B-Tier", icon: Database },
  { id: "s16", name: "PowerShell", category: "Language", level: "B-Tier", icon: Terminal },
  { id: "s17", name: "JavaFX", category: "Framework", level: "B-Tier", icon: Layout },
  { id: "s18", name: "UI/UX", category: "Tool", level: "B-Tier", icon: PenTool },
  { id: "s19", name: "C#", category: "Language", level: "B-Tier", icon: Code },
  { id: "s20", name: "Unity", category: "Framework", level: "B-Tier", icon: Layout },
  { id: "s21", name: "PyQt6", category: "Framework", level: "B-Tier", icon: Layout },
  { id: "s22", name: "Supabase", category: "Tool", level: "A-Tier", icon: Database },
  { id: "s23", name: "Vite", category: "Tool", level: "A-Tier", icon: Zap },
  { id: "s24", name: "Shadcn/UI", category: "Framework", level: "A-Tier", icon: Palette },
  { id: "s25", name: "Zustand", category: "Framework", level: "B-Tier", icon: Database },
  { id: "s26", name: "DigitalOcean", category: "Tool", level: "B-Tier", icon: Cloud },
  { id: "s27", name: "PyMuPDF", category: "Tool", level: "B-Tier", icon: FileText },
  { id: "s28", name: "AWS CDK", category: "Tool", level: "A-Tier", icon: Cloud },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Resumancer",
    description: "Resume Builder with Agentic AI Assistance. Features real-time content generation, formatting, and export capabilities.",
    tech: ["TypeScript", "Next.js", "Supabase", "Tailwind", "Shadcn/UI", "Zustand"],
    features: [
      "AI-powered content suggestions (Vercel AI SDK)",
      "Real-time PDF preview & generation",
      "Version control for resumes",
      "Drag-and-drop layout editor"
    ],
    link: "https://resumancer.dev",
    repoUrl: "https://github.com/nickborrello/resumancer",
    highlight: "Active Development",
    status: "Beta",
    date: "2024-12"
  },
  {
    id: "p2",
    title: "Morning Dashboard",
    description: "A Windows XP-inspired personal dashboard featuring Clippy, real-time weather, and schedule management.",
    tech: ["React", "Vite", "CSS", "DigitalOcean"],
    features: [
      "Windows XP aesthetic with Clippy integration",
      "Real-time WeatherAPI data fetching",
      "Dynamic day/night background switching",
      "Persistent user settings"
    ],
    link: "https://shark-app-rwrq8.ondigitalocean.app",
    repoUrl: "https://github.com/nickborrello/final_project",
    highlight: "React App",
    status: "Live",
    date: "2024-05"
  },
  {
    id: "p3",
    title: "Syllablast",
    description: "A Next.js puzzle game where players reconstruct words by swapping syllables on a 4×4 grid.",
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
    status: "Live",
    date: "2024-05"
  },
  {
    id: "p4",
    title: "BayState Internal Tools",
    description: "Desktop automation suite for pet product businesses, automating data collection and inventory management.",
    tech: ["Python", "Pandas", "Automation", "Selenium"],
    features: [
      "Multi-site competitive pricing analysis",
      "Automated product registration workflow",
      "Data quality validation (>95% accuracy)",
      "Excel/CSV data export"
    ],
    imageUrl: "/staffing_tool.png",
    repoUrl: "https://github.com/nickborrello/BayStateTools",
    highlight: "Production Tooling",
    status: "In Production",
    date: "2024-03"
  },
  {
    id: "p5",
    title: "NEVI Plan Search",
    description: "Desktop tool for analysts to search state NEVI plans using exact keyword and fuzzy string matching.",
    tech: ["Python", "PyQt6", "PyMuPDF", "NLP"],
    features: [
      "Exact & Fuzzy keyword search",
      "PDF text extraction & highlighting",
      "NLP preprocessing with spaCy",
      "Persistent user configuration"
    ],
    imageUrl: "/search_tool.png",
    repoUrl: "https://github.com/nickborrello/NEVI-Search-Tool",
    highlight: "Data Tool",
    status: "Completed",
    date: "2023-11"
  },
  {
    id: "p6",
    title: "Webware Fullstack Suite",
    description: "A collection of modern full-stack web applications featuring React, Vite, Node.js, Express, and MongoDB.",
    tech: ["React", "Vite", "Node.js", "MongoDB", "Express"],
    features: [
      "JWT & Session-based Authentication",
      "RESTful API design patterns",
      "Persistent data storage with MongoDB",
      "Responsive React frontends"
    ],
    repoUrl: "https://github.com/nickborrello/webware-react-vite-app",
    highlight: "Fullstack Coursework",
    status: "Completed",
    date: "2023-10"
  },
  {
    id: "p7",
    title: "Hospital Kiosk App",
    description: "Frontend lead for a JavaFX hospital service request and navigation application.",
    tech: ["Java", "JavaFX", "PostgreSQL", "UI/UX"],
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
    status: "Completed",
    date: "2023-04"
  },
  {
    id: "p8",
    title: "Network Protocols",
    description: "Custom implementation of network protocols and routing logic simulations.",
    tech: ["Python", "Networking", "Socket.io"],
    features: [
      "Custom packet structure implementation",
      "Routing algorithm simulations",
      "Network traffic analysis",
      "Socket programming examples"
    ],
    repoUrl: "https://github.com/nickborrello/python-network-protocols",
    status: "Completed",
    date: "2023-03"
  },
  {
    id: "p9",
    title: "MSP430 Guitar Hero",
    description: "Embedded rhythm game for the MSP430 LaunchPad using hardware interrupts.",
    tech: ["C", "Embedded", "MSP430"],
    features: [
      "Real-time hardware interrupts",
      "Custom LCD graphics driver",
      "Audio output generation",
      "Button input debouncing"
    ],
    repoUrl: "https://github.com/nickborrello/msp430-embedded-projects",
    highlight: "Embedded C",
    status: "Completed",
    date: "2022-12"
  },
  {
    id: "p10",
    title: "Space Invaders DX",
    description: "A retro arcade shooter recreated with custom shaders and visual effects.",
    tech: ["C#", "Unity", "HLSL"],
    features: [
      "Custom shader effects (HLSL)",
      "Particle systems & visual FX",
      "Classic arcade gameplay loop",
      "High-score persistence"
    ],
    repoUrl: "https://github.com/nickborrello/SpaceInvaders",
    highlight: "Game Dev",
    status: "Completed",
    date: "2022-05"
  },
  {
    id: "p11",
    title: "Axolotl Auctions",
    description: "Cloud-native auction platform built with AWS CDK and modern web technologies for the CS509 design course.",
    tech: ["AWS CDK", "TypeScript", "React", "Node.js"],
    features: [
      "Infrastructure as Code (IaC) with AWS CDK",
      "Serverless architecture",
      "Real-time auction updates",
      "Secure user authentication"
    ],
    repoUrl: "https://github.com/robin-condition/AxolotlAuctions",
    highlight: "Cloud Native",
    status: "Completed",
    date: "2024-11"
  },
  {
    id: "p12",
    title: "7Factor Staffing Tool",
    description: "Comprehensive staffing management solution built as a Major Qualifying Project (MQP) for 7Factor Software.",
    tech: ["React", "Node.js", "Auth0"],
    features: [
      "Role-Based Access Control (RBAC)",
      "Automated infrastructure deployment",
      "Resource allocation dashboard",
      "Full-stack microservices architecture"
    ],
    repoUrl: "https://github.com/jackson-lundberg/7factorStaffingToolTeam2",
    highlight: "MQP Capstone",
    status: "Completed",
    date: "2023-11"
  }
];

export const CONTACTS: ContactMethod[] = [
  { platform: "GitHub", handle: "@nickborrello", link: "https://github.com/nickborrello", icon: Github, status: "Active" },
  { platform: "LinkedIn", handle: "nicholasborrello", link: "https://www.linkedin.com/in/nicholasborrello/", icon: Linkedin, status: "Professional" },
  { platform: "Trailhead", handle: "nborrello", link: "https://www.salesforce.com/trailblazer/nborrello", icon: Cloud, status: "Learning" },
  { platform: "Email", handle: "Direct Connect", link: "mailto:nvborrello@gmail.com", icon: Mail, status: "Direct" },
];