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
import { ProjectItem, ContactMethod, ExperienceItem, SkillItem, UserInfo } from './types';

export const USER_INFO: UserInfo = {
  name: "Nicholas Borrello",
  title: "AI Engineer",
  yearsExp: "2+",
  location: "Open to Relocation",
  tagline: "Building AI-powered products, NLP search workflows, and automation tools grounded in real operational use cases.",
  bio: "Engineer focused on applied AI systems that turn messy workflows into usable products. Built agent-assisted resume generation with Resumancer, NLP-powered document search with spaCy in NEVI Plan Search, and automation and analytics tooling for Baystate Pet & Garden, backed by WPI graduate study in Software and AI Applications.",
  systemSpecs: [
    "Resumancer: agent-assisted resume generation with real-time content workflows",
    "NEVI Plan Search: PDF extraction, fuzzy matching, and spaCy preprocessing",
    "Baystate: automation scripts, inventory sync, and analytics dashboard delivery",
    "WPI M.S. focus: Software and AI Applications"
  ],
  missionObjective: "Targeting AI Engineer roles where I can build practical AI features, intelligent search and extraction workflows, and automation systems that deliver measurable business value."
};

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp0",
    role: "Data Engineering Intern",
    company: "Atlas Public Policy",
    period: "11-2023 - 11-2023",
    description: "Worked from Atlas Public Policy's Washington, D.C. office to build a Python-based document search workflow for stakeholders reviewing state NEVI plans, combining PDF extraction, fuzzy search, and NLP preprocessing into a usable analyst tool.",
    location: "Washington, D.C.",
    type: "Internship",
    skills: ["Python", "spaCy", "NLP", "PDF Extraction", "PyQt6", "PyMuPDF"],
    proofUrl: "https://github.com/nickborrello/NEVI-Search-Tool",
    proofLabel: "View NEVI search tool proof",
    achievements: [
      "Built a data extraction and search tool for NEVI plan analysis using Python, PyMuPDF, and PyQt6",
      "Supported Washington, D.C.-based stakeholder workflows with exact keyword search and fuzzy string matching across state plan documents",
      "Implemented PDF text extraction and highlighting to speed document review and evidence gathering",
      "Applied spaCy preprocessing to improve NLP-powered search quality across messy plan text"
    ]
  },
  {
    id: "exp1",
    role: "Software Engineer",
    company: "Baystate Pet & Garden",
    period: "07-2024 - Present",
    description: "Building internal tools to automate product registration and integrate with web inventory systems. Focusing on real-time inventory management and process automation.",
    location: "Taunton, MA",
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
    period: "06-2023 - 08-2023",
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
    role: "Master of Science in Computer Science",
    company: "Worcester Polytechnic Institute",
    period: "08-2020 - 08-2025",
    description: "Completed rigorous coursework in Computer Science, Software Engineering, and Embedded Systems. Led multiple team projects and research initiatives.",
    location: "Worcester, MA",
    type: "Education",
    skills: ["Java", "C/C++", "System Design", "Algorithms", "Leadership"],
    achievements: [
      "Completed mutiple team-based software engineering projects for real-world clients",
      "Dean's List for academic excellence (Multiple Semesters)",
      "Specialized in Software and AI Applications",
    ]
  }
];

export const SKILLS: SkillItem[] = [
  { id: "s26", name: "Vercel AI SDK", category: "AI/ML", level: "A-Tier", icon: Cpu },
  { id: "s27", name: "spaCy", category: "AI/ML", level: "A-Tier", icon: FileText },
  { id: "s18", name: "NLP", category: "AI/ML", level: "A-Tier", icon: Cpu },
  { id: "s1", name: "TypeScript", category: "Language", level: "S-Tier", icon: Code },
  { id: "s2", name: "Python", category: "Language", level: "A-Tier", icon: Terminal },
  { id: "s3", name: "React", category: "Framework", level: "S-Tier", icon: Layout },
  { id: "s4", name: "Next.js", category: "Framework", level: "A-Tier", icon: Globe },
  { id: "s5", name: "Java", category: "Language", level: "B-Tier", icon: Cpu },
  { id: "s6", name: "Git", category: "Tool", level: "S-Tier", icon: Github },
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
  { id: "s19", name: "C#", category: "Language", level: "B-Tier", icon: Code },
  { id: "s20", name: "Unity", category: "Framework", level: "B-Tier", icon: Layout },
  { id: "s21", name: "PyQt6", category: "Framework", level: "B-Tier", icon: Layout },
  { id: "s22", name: "Supabase", category: "Tool", level: "A-Tier", icon: Database },
  { id: "s23", name: "Vite", category: "Tool", level: "A-Tier", icon: Zap },
  { id: "s24", name: "Shadcn/UI", category: "Framework", level: "A-Tier", icon: Palette },
  { id: "s25", name: "Zustand", category: "Framework", level: "B-Tier", icon: Database },
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
   highlight: "Beta Deployment",
   status: "Beta",
   startDate: "09-2025",
    endDate: "Present",
    featured: true
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
    repoUrl: "https://github.com/nickborrello/final_project",
    highlight: "React App",
    status: "Live",
    startDate: "05-2024",
    endDate: "05-2024"
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
    repoUrl: "https://github.com/nickborrello/syllablast",
    highlight: "Deployed & Playable",
    status: "Live",
    startDate: "10-2024",
    endDate: "10-2024"
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
    startDate: "10-2023",
    endDate: "10-2023"
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
    repoUrl: "https://github.com/CS-3733-D23-Team-E",
    highlight: "Frontend Lead",
    status: "Completed",
    startDate: "04-2023",
    endDate: "04-2023"
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
    startDate: "03-2023",
    endDate: "03-2023"
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
    startDate: "12-2022",
    endDate: "12-2022"
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
    startDate: "05-2022",
    endDate: "05-2022"
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
    startDate: "11-2024",
    endDate: "11-2024"
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
    startDate: "08-2023",
    endDate: "05-2024"
  }
];

export const CONTACTS: ContactMethod[] = [
  { platform: "Email", handle: "Direct Connect", link: "mailto:nvborrello@gmail.com", icon: Mail, status: "Direct" },
  { platform: "GitHub", handle: "@nickborrello", link: "https://github.com/nickborrello", icon: Github, status: "Active" },
  { platform: "LinkedIn", handle: "nicholasborrello", link: "https://www.linkedin.com/in/nicholasborrello/", icon: Linkedin, status: "Professional" },
  { platform: "Trailhead", handle: "nborrello", link: "https://www.salesforce.com/trailblazer/nborrello", icon: Cloud, status: "Learning" },
];
