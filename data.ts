import { CapabilityGroup, ContactLink, EducationItem, ExperienceItem, HeroProof, ProjectItem, ProofEvidence, UserInfo } from './types';

export const USER_INFO: UserInfo = {
  name: "Nicholas Borrello",
  firstName: "Nick",
  title: "AI & Software Engineer",
  location: "Durham, NC",
  status: "Open to opportunities",
  positioning: "Agentic Systems & LLM Applications",
  summary: "AI & software engineer specializing in agentic workflows, bounded research tools, and high-throughput automation — from product intelligence systems to autonomous MCP tools.",
  bio: "I'm an AI & software engineer who bridges raw LLM capability and production-grade software. At Bay State Pet & Garden I engineered a Product Intelligence system with 25 bounded research tools and strict execution limits; at Resumancer I built an agentic resume workspace where every AI edit traces back to verified evidence. My work centers on one question: how do you make LLMs reliably do real work — at scale, under cost constraints, with results you can prove?",
};

export const HERO_PROOFS: HeroProof[] = [
  {
    value: "25 Bounded Tools",
    label: "Agent execution layer",
    detail: "Enforces privacy, cost, deadline, and tool-use limits so research runs remain controlled and auditable.",
  },
  {
    value: "Agentic Copilot",
    label: "evidence-backed diffs",
    detail: "Resumancer compares job requirements with a Master CV and proposes staged, reviewable changes.",
  },
  {
    value: "Product Intel",
    label: "verified catalog identity",
    detail: "Researches external product data, verifies variant identity, and produces evidence-backed changes.",
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-baystate",
    role: "AI & Software Engineer",
    company: "Bay State Pet & Garden",
    period: "Jul 2024 — Present",
    location: "Taunton, MA",
    type: "Full-time",
    summary: "Developing a Product Intelligence system that researches product information from external sources, verifies exact product and variant identity, and produces evidence-backed catalog changes for human review.",
    achievements: [
      "Develop a Product Intelligence system that researches product information from external sources, verifies exact product and variant identity, and produces evidence-backed catalog changes for human review.",
      "Engineer the agent execution layer behind the research workflow, giving models 25 bounded research tools while enforcing privacy, cost, deadline, and tool-use limits so each run remains controlled and auditable.",
      "Maintain the retail CMS that carries product data through onboarding, review, synchronization, and publishing, and evaluate new AI behavior against verified datasets before it reaches live workflows.",
    ],
    skills: ["TypeScript", "Python", "LLM Orchestration", "Agentic Systems", "Docker", "Playwright", "PostgreSQL", "AI Evaluation"],
  },
  {
    id: "exp-allegro",
    role: "Process Engineering Intern",
    company: "Allegro MicroSystems",
    period: "Jun 2023 — Aug 2023",
    location: "Manchester, NH",
    type: "Internship",
    summary: "Built an Azure DevOps CI/CD pipeline that automated driver deployment to engineering testing equipment, replacing a manual deployment process.",
    achievements: [
      "Built an Azure DevOps CI/CD pipeline that automated driver deployment to engineering testing equipment, replacing a manual deployment process.",
      "Developed the supporting deployment workflow used to deliver driver updates consistently to test systems and simplify repeated testing.",
    ],
    skills: ["Azure DevOps", "CI/CD", "PowerShell", "Automation"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-wpi-ms",
    degree: "M.S. Computer Science",
    school: "Worcester Polytechnic Institute",
    period: "Aug 2025",
    location: "Worcester, MA",
    highlights: [
      "Specialized in Software Engineering and AI applications — deep learning, computer vision, and distributed systems.",
    ],
  },
  {
    id: "edu-wpi-bs",
    degree: "B.S. Computer Science",
    school: "Worcester Polytechnic Institute",
    period: "May 2024",
    location: "Worcester, MA",
    highlights: [
      "Dean's List, multiple semesters.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p-resumancer",
    title: "Resumancer AI",
    summary: "Agentic Resume & Career Workspace that compares job requirements with a reusable Master CV and proposes evidence-backed changes.",
    problem: "Resumes get rewritten from scratch for every application, and AI rewrites routinely invent experience. Nothing traces a claim back to verified history.",
    built: [
      "Built a career workspace comparing job requirements with a Master CV, proposing evidence-backed changes with reviewable diffs instead of unconstrained rewrites.",
      "Added ATS compatibility checks, model fallback, and PDF export so verified career data moves from job analysis to an application-ready resume.",
      "Semantic search over career history with pgvector, plus a real-time PDF engine with layout version control.",
    ],
    impact: [
      "Live product in beta at resumancer.dev — requirement-to-evidence matching with receipts on every edit.",
      "One-page budget guarantee: layout metrics computed live so the finished resume fits a single clean page.",
    ],
    role: "Creator — product, architecture, and engineering, end to end.",
    tech: ["Next.js", "TypeScript", "Vercel AI SDK", "Supabase", "PostgreSQL", "pgvector", "React"],
    link: "https://resumancer.dev",
    image: "/work/resumancer-landing.png",
    imageAlt: "Resumancer product UI: a target job requirement matched against verified career evidence with reviewable diffs",
    featured: true,
    startDate: "10-2025",
    endDate: "Present",
  },
  {
    id: "p-baystate",
    title: "Bay State Product Intelligence",
    summary: "Agent execution layer with 25 bounded research tools and automated product intelligence pipeline for retail catalog management.",
    problem: "Product research from external vendor sources was slow, prone to mismatching variant identities, and unconstrained LLM calls risked hallucinations and runaway tool budgets.",
    built: [
      "Researches product information from external sources and verifies exact product and variant identity.",
      "Agent execution layer with 25 bounded research tools enforcing privacy, cost, deadline, and tool-use limits.",
      "Retail CMS carrying product data through onboarding, review, synchronization, and publishing, evaluated against verified datasets.",
    ],
    impact: [
      "Controlled and auditable agent execution with strict privacy, cost, deadline, and tool bounds.",
      "Evidence-backed catalog changes produced for human review before publishing.",
    ],
    role: "AI & Software Engineer — agent layer, CMS, and evaluation.",
    tech: ["TypeScript", "Python", "Docker", "Playwright", "PostgreSQL", "LLM Orchestration", "AI Evaluation"],
    featured: true,
    startDate: "07-2024",
    endDate: "Present",
  },
  {
    id: "p-shopsite",
    title: "ShopSite MCP Server",
    summary: "Model Context Protocol server that lets AI agents retrieve orders, search products, and manage inventory in ShopSite safely.",
    problem: "Interacting directly with legacy e-commerce back-office APIs poses security risks and schema compatibility hurdles for LLM agents.",
    built: [
      "Built an MCP server that lets AI agents retrieve orders, search products, and manage inventory in ShopSite without interacting directly with legacy APIs.",
      "Wrapped XML/CGI requests, HMAC-SHA1 authentication, and legacy response formats behind typed, validated tools designed for safe LLM use.",
      "Type-safe tool schema validation with Zod ensuring structured input and output boundaries.",
    ],
    impact: [
      "Natural-language querying and safe automation for legacy e-commerce systems by any MCP-compatible LLM client.",
      "Demonstrates the pattern of making legacy systems AI-addressable without exposing raw endpoints.",
    ],
    role: "Built end-to-end.",
    tech: ["TypeScript", "Model Context Protocol", "Zod", "Node.js", "PostgreSQL"],
    featured: true,
    startDate: "01-2026",
    endDate: "01-2026",
  },
  {
    id: "p-medusa",
    title: "Medusa Storefront Agent",
    summary: "Autonomous store operations agent on Medusa.js that monitors inventory levels, drafts automated reorders, and applies pricing rules via typed, bounded tool calls.",
    built: [
      "Built an autonomous store operations agent on Medusa.js that monitors inventory levels, drafts automated reorders, and applies pricing rules via typed MCP tool calls.",
      "Implemented schema validation with Zod and PostgreSQL event listeners to ensure reliable multi-step agent actions without human intervention.",
    ],
    tech: ["TypeScript", "Medusa.js", "PostgreSQL", "Model Context Protocol", "Node.js"],
    startDate: "07-2026",
    endDate: "07-2026",
  },
  {
    id: "p-asl",
    title: "ASL Gesture Recognition",
    summary: "CNN/Transformer models recognizing 100+ American Sign Language gestures using ResNet34 and MediaPipe.",
    built: [
      "Trained CNN/Transformer models to recognize 100+ ASL gestures using ResNet34 and MediaPipe-derived features, and parallelized preprocessing for faster experimentation.",
      "Engineered real-time landmark extraction and temporal sequence processing pipelines, achieving robust classification across varying angles and lighting.",
    ],
    tech: ["Python", "PyTorch", "ResNet34", "MediaPipe", "Computer Vision"],
    startDate: "01-2025",
    endDate: "05-2025",
  },
  {
    id: "p-nevi",
    title: "NEVI Search Tool",
    summary: "Document search and NLP tool helping analysts find policy evidence inside lengthy state EV infrastructure plans.",
    built: [
      "Built a document-search tool helping analysts find policy evidence in state EV infrastructure plans using keyword search, fuzzy matching, and NLP preprocessing.",
      "Extracted structured tabular data and funding metrics from multi-hundred-page policy PDFs with PyMuPDF, reducing manual analyst review time.",
    ],
    tech: ["Python", "spaCy", "PyMuPDF", "NLP", "PyQt6"],
    repoUrl: "https://github.com/nickborrello/NEVI-Search-Tool",
    startDate: "08-2022",
    endDate: "12-2022",
  },
  {
    id: "p-pdf",
    title: "AI PDF Search",
    summary: "RAG application for real-time semantic search over complex PDFs, returning structured answers from multi-page documents.",
    built: [
      "Retrieval-augmented generation over localized document stores with LangChain.",
      "Real-time semantic search and context extraction across multi-page PDFs.",
    ],
    tech: ["Python", "LangChain", "Vector Databases", "NLP"],
    startDate: "10-2023",
    endDate: "10-2023",
  },
  {
    id: "p-axolotl",
    title: "Axolotl Auctions",
    summary: "Serverless auction platform defined entirely as infrastructure-as-code with AWS CDK.",
    built: [
      "AWS CDK IaC for automated, reproducible cloud deployments.",
      "Event-driven serverless architecture for high-concurrency bidding.",
    ],
    tech: ["AWS CDK", "TypeScript", "React", "Node.js"],
    startDate: "11-2024",
    endDate: "11-2024",
  },
  {
    id: "p-kiosk",
    title: "Hospital Kiosk",
    summary: "Frontend lead on a hospital navigation system with custom A* pathfinding and a graph-based map editor.",
    built: [
      "A* pathfinding across multi-floor hospital navigation graphs.",
      "Interactive map editor with node-link topology management.",
    ],
    tech: ["Java", "PostgreSQL", "Algorithms"],
    startDate: "04-2023",
    endDate: "04-2023",
  },
  {
    id: "p-7factor",
    title: "7Factor Staffing Tool",
    summary: "Enterprise staffing platform with role-based access control and automated resource allocation (MQP capstone).",
    built: [
      "RBAC with Auth0 across the staffing workflow.",
      "Automated deployment and a real-time resource allocation dashboard.",
    ],
    tech: ["React", "Node.js", "TypeScript", "Azure DevOps"],
    startDate: "08-2023",
    endDate: "05-2024",
  },
];

export const PROOF_EVIDENCE: Record<string, ProofEvidence> = {
  "p-resumancer": {
    context: "Resumancer AI",
    detail: "Agentic rewrite loop on Vercel AI SDK — job requirements matched to Master CV with reviewable diffs, ATS checks, model fallback, and PDF export.",
  },
  "p-baystate": {
    context: "Bay State Pet & Garden",
    detail: "Product Intelligence system with 25 bounded research tools enforcing privacy, cost, deadline, and tool-use limits, feeding a verified retail CMS.",
  },
  "p-shopsite": {
    context: "ShopSite MCP Server",
    detail: "MCP server with typed Zod tools wrapping XML/CGI requests and HMAC-SHA1 auth for safe LLM agent querying.",
  },
  "p-medusa": {
    context: "Medusa Storefront Agent",
    detail: "Autonomous store operations agent on Medusa.js monitoring inventory, drafting reorders, and applying pricing rules via typed MCP tools.",
  },
  "p-asl": {
    context: "ASL Gesture Recognition",
    detail: "Trained CNN/Transformer models recognizing 100+ ASL gestures using ResNet34 and MediaPipe-derived features with parallel preprocessing.",
  },
  "p-nevi": {
    context: "NEVI Search Tool — Atlas Public Policy",
    detail: "Built a document-search tool using keyword search, fuzzy matching, and spaCy/PyMuPDF preprocessing over state EV infrastructure plans.",
  },
  "p-pdf": {
    context: "AI PDF Search",
    detail: "LangChain RAG over multi-page PDFs with real-time semantic retrieval and structured answers.",
  },
  "p-axolotl": {
    context: "Axolotl Auctions",
    detail: "Serverless auction platform declared entirely as AWS CDK infrastructure-as-code.",
  },
  "p-kiosk": {
    context: "Hospital Kiosk",
    detail: "A* pathfinding and a graph-based map editor for multi-floor hospital navigation.",
  },
  "p-7factor": {
    context: "7Factor Staffing Tool",
    detail: "RBAC (Auth0) and automated resource allocation in an enterprise staffing platform.",
  },
  "exp-allegro": {
    context: "Allegro MicroSystems",
    detail: "Azure DevOps CI/CD pipeline automating driver deployment and standardizing test systems.",
  },
  "edu-wpi-ms": {
    context: "WPI M.S. CS",
    detail: "Deep learning, computer vision, distributed systems, and client-facing software engineering projects.",
  },
  "edu-wpi-bs": {
    context: "WPI B.S. CS",
    detail: "Software engineering, systems, algorithms, and client-facing team projects.",
  },
};

export const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    id: "languages",
    label: "Languages",
    description: "Core programming and database query languages used across production systems.",
    skills: [
      { name: "TypeScript", proofIds: ["p-resumancer", "p-shopsite", "p-baystate", "p-medusa", "p-axolotl"] },
      { name: "Python", proofIds: ["p-baystate", "p-nevi", "p-asl", "p-pdf"] },
      { name: "JavaScript", proofIds: ["p-resumancer", "p-shopsite"] },
      { name: "SQL", proofIds: ["p-shopsite", "p-resumancer", "p-baystate", "p-medusa"] },
      { name: "Java", proofIds: ["p-kiosk", "edu-wpi-bs"] },
    ],
  },
  {
    id: "ai-agents",
    label: "AI & Agents",
    description: "Autonomous agent execution layers, protocol tools, and production LLM orchestration.",
    skills: [
      { name: "LLM Agents", proofIds: ["p-baystate", "p-resumancer", "p-medusa"] },
      { name: "Model Context Protocol", proofIds: ["p-shopsite", "p-medusa"] },
      { name: "Tool Calling & Bounds", proofIds: ["p-baystate", "p-shopsite", "p-medusa"] },
      { name: "Structured Generation", proofIds: ["p-baystate", "p-shopsite"] },
      { name: "Routing & Fallbacks", proofIds: ["p-baystate", "p-resumancer"] },
      { name: "RAG & Embeddings", proofIds: ["p-resumancer", "p-pdf"] },
      { name: "AI Evaluation", proofIds: ["p-baystate", "p-resumancer"] },
      { name: "VLM / OCR", proofIds: ["p-baystate", "p-nevi"] },
    ],
  },
  {
    id: "ml-nlp",
    label: "ML & NLP",
    description: "Deep learning architectures, computer vision, document intelligence, and linguistic extraction.",
    skills: [
      { name: "PyTorch", proofIds: ["p-asl"] },
      { name: "CNNs & Transformers", proofIds: ["p-asl"] },
      { name: "spaCy", proofIds: ["p-nevi"] },
      { name: "MediaPipe", proofIds: ["p-asl"] },
      { name: "Computer Vision", proofIds: ["p-asl"] },
      { name: "Document Intelligence", proofIds: ["p-nevi", "p-pdf"] },
      { name: "Fuzzy Matching", proofIds: ["p-nevi"] },
    ],
  },
  {
    id: "app-data",
    label: "Application & Data",
    description: "Fullstack web surfaces, type-safe API contracts, and relational data layers.",
    skills: [
      { name: "React", proofIds: ["p-resumancer", "p-baystate", "p-7factor"] },
      { name: "Next.js", proofIds: ["p-resumancer", "p-baystate"] },
      { name: "Node.js / Bun", proofIds: ["p-shopsite", "p-axolotl", "p-resumancer", "p-medusa"] },
      { name: "Hono & REST APIs", proofIds: ["p-shopsite", "p-resumancer"] },
      { name: "Zod", proofIds: ["p-shopsite"] },
      { name: "PostgreSQL & SQLite", proofIds: ["p-shopsite", "p-resumancer", "p-baystate", "p-medusa"] },
      { name: "Supabase", proofIds: ["p-resumancer", "p-baystate"] },
      { name: "WebSockets", proofIds: ["p-axolotl"] },
    ],
  },
  {
    id: "automation-infra",
    label: "Automation & Infrastructure",
    description: "Scraper fleets, CI/CD pipelines, containerization, and cloud infrastructure.",
    skills: [
      { name: "Docker", proofIds: ["p-baystate"] },
      { name: "Playwright & Crawlee", proofIds: ["p-baystate"] },
      { name: "GitHub Actions", proofIds: ["p-baystate"] },
      { name: "CI/CD & DevOps", proofIds: ["exp-allegro", "p-baystate", "p-7factor"] },
      { name: "Azure DevOps", proofIds: ["exp-allegro", "p-7factor"] },
      { name: "AWS CDK", proofIds: ["p-axolotl"] },
      { name: "Git & Linux", proofIds: ["p-baystate", "exp-allegro"] },
    ],
  },
];

export const CONTACTS: ContactLink[] = [
  { platform: "Email", handle: "nvborrello@gmail.com", link: "mailto:nvborrello@gmail.com" },
  { platform: "Phone", handle: "(508) 617-1586", link: "tel:5086171586" },
  { platform: "GitHub", handle: "github.com/nickborrello", link: "https://github.com/nickborrello" },
  { platform: "LinkedIn", handle: "nicholasborrello", link: "https://www.linkedin.com/in/nicholasborrello" },
];

export const RESUME_URL = "/resume.pdf";
