import {
  Github,
  Linkedin,
  Mail,
  Cloud,
  Code,
  Terminal,
  Layout,
  Globe,
  Cpu,
  Database,
  Server,
  Palette,
  FileText,
  RefreshCw,
  Zap,
  Shield,
  FileCode,
  Settings,
  PenTool,
  Search
} from 'lucide-react';
import { ProjectItem, ContactMethod, ExperienceItem, SkillItem, UserInfo } from './types';

export const USER_INFO: UserInfo = {
  name: "Nicholas Borrello",
  title: "AI Engineer",
  yearsExp: "2+",
  location: "Open to Relocation",
  tagline: "Architecting applied AI systems, multi-provider LLM pipelines, and high-throughput automation workflows.",
  bio: "Engineer specialized in bridging the gap between raw LLM capabilities and production-grade software. I build agentic workflows, multi-provider AI pipelines, and high-scale automation tools, leveraging expertise in TypeScript, Python, and the Vercel AI SDK to transform complex operational bottlenecks into intelligent products.",
  systemSpecs: [
    "Resumancer: Agentic resume generation with real-time content workflows & visual diffs",
    "Baystate: Hybrid LLM pipeline (Gemini + OpenAI) for high-accuracy data extraction",
    "NEVI Search: NLP-powered document analysis with spaCy and fuzzy-string matching",
    "ShopSite-MCP: Model Context Protocol server for legacy e-commerce LLM querying"
  ],
  missionObjective: "Targeting AI Engineer roles where I can build practical AI features, intelligent search/extraction workflows, and autonomous agents that deliver measurable business value."
};

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp1",
    role: "AI & Software Engineer",
    company: "Baystate Pet & Garden",
    period: "07-2024 - Present",
    description: "Architecting a multi-stage AI data consolidation pipeline to automate product registration and inventory synchronization. Optimized for production cost and accuracy through a hybrid provider strategy.",
    location: "Taunton, MA",
    type: "Full-time",
    skills: ["Python", "TypeScript", "LLM Orchestration", "Next.js", "Docker", "Playwright", "Supabase", "PostgreSQL", "React"],
    proofUrl: "https://www.baystatepetandgarden.com",
    proofLabel: "View Company Storefront",
    achievements: [
      "Engineered a hybrid AI consolidation pipeline routing tasks between Gemini Flash and OpenAI GPT-4o-mini, achieving 100% extraction accuracy while reducing costs by 70%.",
      "Architected a distributed web scraping system using Playwright and Docker, orchestrated via GitHub Actions for asynchronous vendor data synchronization.",
      "Delivered a mission-critical inventory analytics dashboard with Next.js 16 and Supabase, centralizing real-time sales data for operational decision-making.",
      "Developed an automated product registration engine that reduced manual entry time by over 80%."
    ]
  },
  {
    id: "exp0",
    role: "NLP Data Engineer (Intern)",
    company: "Atlas Public Policy",
    period: "11-2023 - 11-2023",
    description: "Built a specialized NLP document search workflow for stakeholders reviewing federal infrastructure plans. Transformed unstructured data into queryable analyst tools.",
    location: "Washington, D.C.",
    type: "Internship",
    skills: ["Python", "spaCy", "NLP", "PyQt6"],
    proofUrl: "https://github.com/nickborrello/NEVI-Search-Tool",
    proofLabel: "View NEVI Search Proof",
    achievements: [
      "Developed a specialized NLP search engine to analyze thousands of pages of state NEVI plans, utilizing spaCy for semantic preprocessing.",
      "Built a custom extraction tool that transformed messy PDF text into structured data, enabling evidence-gathering in seconds rather than hours.",
      "Implemented fuzzy-string matching and keyword search workflows to support stakeholder policy reviews in the Washington, D.C. office."
    ]
  },
  {
    id: "exp2",
    role: "Process Engineering Intern",
    company: "Allegro Microsystems",
    period: "06-2023 - 08-2023",
    description: "Automated test driver deployments and optimized CI/CD workflows using Azure DevOps to improve software development efficiency.",
    location: "Manchester, NH",
    type: "Internship",
    skills: ["Azure DevOps", "CI/CD", "PowerShell"],
    proofUrl: "https://www.allegromicro.com",
    proofLabel: "View Company Site",
    achievements: [
      "Designed and deployed automated CI/CD pipelines for driver testing, reducing deployment validation time by 40%.",
      "Implemented Infrastructure-as-Code patterns to standardize test environments across the engineering team."
    ]
  },
  {
    id: "exp3",
    role: "Master of Science in Computer Science",
    company: "Worcester Polytechnic Institute",
    period: "08-2020 - 08-2025",
    description: "Rigorous graduate study focused on Software Engineering and AI Applications. Specialized in building scalable, real-world software systems.",
    location: "Worcester, MA",
    type: "Education",
    skills: ["Java", "C/C++", "System Design", "Algorithms"],
    achievements: [
      "Specialized in Software and AI Applications with coursework in Deep Learning and Distributed Systems.",
      "Led multiple team-based software engineering projects for corporate clients.",
      "Dean's List for academic excellence (Multiple Semesters)."
    ]
  }
];

export const SKILLS: SkillItem[] = [
  { id: "s26", name: "Vercel AI SDK", category: "AI/ML", level: "S-Tier", icon: Cpu },
  { id: "s29", name: "LLM Orchestration", category: "AI/ML", level: "S-Tier", icon: Zap },
  { id: "s30", name: "Vector Databases", category: "AI/ML", level: "A-Tier", icon: Database },
  { id: "s31", name: "LangChain", category: "AI/ML", level: "A-Tier", icon: RefreshCw },
  { id: "s27", name: "spaCy", category: "AI/ML", level: "A-Tier", icon: FileText },
  { id: "s18", name: "NLP", category: "AI/ML", level: "A-Tier", icon: Search },
  { id: "s1", name: "TypeScript", category: "Language", level: "S-Tier", icon: Code },
  { id: "s2", name: "Python", category: "Language", level: "S-Tier", icon: Terminal },
  { id: "s3", name: "React", category: "Framework", level: "S-Tier", icon: Layout },
  { id: "s4", name: "Next.js", category: "Framework", level: "S-Tier", icon: Globe },
  { id: "s22", name: "Supabase", category: "Tool", level: "S-Tier", icon: Database },
  { id: "s9", name: "PostgreSQL", category: "Tool", level: "A-Tier", icon: Database },
  { id: "s32", name: "Docker", category: "Tool", level: "A-Tier", icon: Server },
  { id: "s33", name: "Playwright", category: "Tool", level: "A-Tier", icon: Zap },
  { id: "s28", name: "AWS CDK", category: "Tool", level: "A-Tier", icon: Cloud },
  { id: "s14", name: "Azure DevOps", category: "Tool", level: "A-Tier", icon: RefreshCw },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Resumancer",
    description: "AI-native SaaS platform designed as a master career database. Features a Resume Copilot with agentic content rewriting and real-time visual diffs.",
    tech: ["Next.js", "Vercel AI SDK", "Supabase", "TypeScript", "React", "Vector Databases"],
    features: [
      "Resume Copilot: Context-aware AI assistant for agentic content optimization using Vercel AI SDK.",
      "AI Review Overlay: Visual diffing and staging workflow for LLM-generated changes.",
      "Semantic Search: Vector-based career history curation using Vector Databases (pgvector).",
      "Real-time PDF engine with dynamic layout version control."
    ],
    link: "https://resumancer.dev",
    highlight: "Agentic SaaS Application",
    status: "Beta",
    startDate: "09-2025",
    endDate: "Present",
    featured: true
  },
  {
    id: "p13",
    title: "ShopSite-MCP",
    description: "Model Context Protocol (MCP) server providing an LLM-accessible interface to legacy ShopSite database schemas.",
    tech: ["TypeScript", "Node.js", "PostgreSQL", "LLM Orchestration"],
    features: [
      "Natural language querying of legacy e-commerce databases via MCP.",
      "Secure database tool exposure for autonomous AI agents.",
      "Type-safe schema mapping for legacy relational structures."
    ],
    repoUrl: "https://github.com/nickborrello/ShopSite-MCP",
    highlight: "MCP Infrastructure",
    status: "Completed",
    startDate: "01-2026",
    endDate: "01-2026",
    featured: true
  },
  {
    id: "p14",
    title: "AI PDF Search",
    description: "Interactive RAG application for real-time document analysis, using semantic search to extract structured answers from complex PDFs.",
    tech: ["Python", "LangChain", "Vector Databases", "NLP"],
    features: [
      "Retrieval-Augmented Generation (RAG) for localized document querying.",
      "Real-time semantic search and context extraction from multi-page PDFs.",
      "Prompt-driven information gathering using LangChain and Vector Databases."
    ],
    repoUrl: "https://github.com/nickborrello/ai-pdf-search",
    highlight: "RAG Application",
    status: "Completed",
    startDate: "10-2023",
    endDate: "10-2023"
  },
  {
    id: "p11",
    title: "Axolotl Auctions",
    description: "Cloud-native auction platform built with Infrastructure-as-Code (IaC) principles for high-availability serverless workloads.",
    tech: ["AWS CDK", "TypeScript", "React", "Node.js"],
    features: [
      "Infrastructure as Code (IaC) with AWS CDK for automated cloud deployments.",
      "Serverless architecture scaling with real-time auction triggers.",
      "Secure, event-driven microservices for high-concurrency bidding."
    ],
    repoUrl: "https://github.com/robin-condition/AxolotlAuctions",
    highlight: "Cloud Native",
    status: "Completed",
    startDate: "11-2024",
    endDate: "11-2024"
  },
  {
    id: "p7",
    title: "Hospital Kiosk App",
    description: "Frontend lead for a complex hospital navigation system featuring custom pathfinding and graph algorithms.",
    tech: ["Java", "PostgreSQL", "Algorithms"],
    features: [
      "A* Pathfinding implementation for multi-floor hospital navigation.",
      "Graph-based service request management system.",
      "Interactive map editor with node-link topology management."
    ],
    repoUrl: "https://github.com/CS-3733-D23-Team-E",
    highlight: "Algorithmic UI",
    status: "Completed",
    startDate: "04-2023",
    endDate: "04-2023"
  },
  {
    id: "p12",
    title: "7Factor Staffing Tool",
    description: "Enterprise staffing solution built for 7Factor Software, focusing on Role-Based Access Control and automated resource allocation.",
    tech: ["React", "Node.js", "TypeScript", "Azure DevOps"],
    features: [
      "Role-Based Access Control (RBAC) with Auth0 integration.",
      "Automated cloud infrastructure deployment and monitoring.",
      "Real-time resource allocation and staffing dashboard."
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