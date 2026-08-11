import { CapabilityGroup, ContactLink, EducationItem, ExperienceItem, HeroMetric, ProjectItem, ProofEvidence, UserInfo } from './types';

export const USER_INFO: UserInfo = {
  name: "Nicholas Borrello",
  firstName: "Nick",
  title: "AI Engineer",
  location: "Taunton, MA",
  status: "Open to relocation",
  positioning: "I build production LLM systems, intelligent automation, and AI-native products.",
  summary: "Applied AI engineer specializing in multi-provider LLM pipelines, agentic workflows, and high-throughput automation — from scraper fleets to semantic search to AI product features that ship.",
  bio: "I'm an AI engineer who bridges raw LLM capability and production-grade software. At Baystate Pet & Garden I designed a hybrid Gemini + OpenAI consolidation pipeline that automated product registration end-to-end; at Resumancer I'm building an agentic resume engine where every AI edit traces back to verified evidence. My work centers on one question: how do you make LLMs reliably do real work — at scale, under cost constraints, with results you can prove?",
};

export const HERO_METRICS: HeroMetric[] = [
  {
    value: "70%",
    label: "lower LLM processing cost",
    detail: "Hybrid Gemini Flash + GPT-4o-mini routing on the Baystate consolidation pipeline",
  },
  {
    value: "80%",
    label: "less manual product entry",
    detail: "Automated product registration engine at Baystate Pet & Garden",
  },
  {
    value: "100%",
    label: "extraction accuracy",
    detail: "Validation-gated accuracy across the hybrid consolidation workflow",
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-baystate",
    role: "AI & Software Engineer",
    company: "Baystate Pet & Garden",
    period: "Jul 2024 — Present",
    location: "Taunton, MA",
    type: "Full-time",
    summary: "Designing and running the company's AI data infrastructure: a multi-stage consolidation pipeline that turns vendor sources into registered, in-stock products.",
    achievements: [
      "Engineered a hybrid AI pipeline routing extraction between Gemini Flash and GPT-4o-mini — 100% extraction accuracy at 70% lower LLM cost than single-provider.",
      "Architected a distributed web-scraping fleet (Playwright + Docker) orchestrated by GitHub Actions for asynchronous vendor synchronization.",
      "Delivered a mission-critical inventory analytics dashboard (Next.js + Supabase) centralizing real-time sales data for daily decisions.",
      "Built an automated product registration engine that cut manual entry by over 80%.",
    ],
    skills: ["Python", "TypeScript", "LLM Orchestration", "Next.js", "Docker", "Playwright", "Supabase", "PostgreSQL", "React"],
  },
  {
    id: "exp-atlas",
    role: "NLP Data Engineer Intern",
    company: "Atlas Public Policy",
    period: "Nov 2023",
    location: "Washington, D.C.",
    type: "Internship",
    summary: "Built a specialized NLP document search workflow so stakeholders could query thousands of pages of federal infrastructure plans in seconds instead of hours.",
    achievements: [
      "Developed a spaCy-powered NLP search engine analyzing state NEVI plan documents for evidence-based policy review.",
      "Built a PDF-to-structured-data extraction tool that cut evidence-gathering from hours to seconds.",
      "Implemented fuzzy-string matching and keyword search used by the D.C. policy team for stakeholder reviews.",
    ],
    skills: ["Python", "spaCy", "NLP", "PyQt6"],
    proofUrl: "https://github.com/nickborrello/NEVI-Search-Tool",
    proofLabel: "View NEVI Search Tool",
  },
  {
    id: "exp-allegro",
    role: "Process Engineering Intern",
    company: "Allegro Microsystems",
    period: "Jun 2023 — Aug 2023",
    location: "Manchester, NH",
    type: "Internship",
    summary: "Automated test-driver deployment and standardized environments across the engineering team's CI/CD.",
    achievements: [
      "Designed and deployed automated CI/CD pipelines for driver testing, cutting deployment validation time by 40%.",
      "Introduced Infrastructure-as-Code patterns that standardized test environments across the team.",
    ],
    skills: ["Azure DevOps", "CI/CD", "PowerShell"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-wpi",
    degree: "M.S. Computer Science",
    school: "Worcester Polytechnic Institute",
    period: "2020 — 2025",
    location: "Worcester, MA",
    highlights: [
      "Specialized in Software Engineering and AI applications — deep learning, distributed systems, and client-facing team projects.",
      "Dean's List, multiple semesters.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p-resumancer",
    title: "Resumancer",
    summary: "AI-native SaaS that tailors resumes to job posts — without inventing a single achievement.",
    problem: "Resumes get rewritten from scratch for every application, and AI rewrites routinely invent experience. Nothing traces a claim back to verified history.",
    built: [
      "Resume Copilot: an agentic rewrite loop on the Vercel AI SDK that maps job requirements to a verified Master CV.",
      "Reviewable diffs: every proposed edit is staged line-by-line and accepted or rejected before it touches the document.",
      "Semantic search over career history with pgvector, plus a real-time PDF engine with layout version control.",
    ],
    impact: [
      "Live product in beta at resumancer.dev — requirement-to-evidence matching with receipts on every edit.",
      "One-page budget guarantee: layout metrics computed live so the finished resume fits a single clean page.",
    ],
    role: "Creator — product, architecture, and engineering, end to end.",
    tech: ["Next.js", "Vercel AI SDK", "Supabase", "PostgreSQL", "pgvector", "TypeScript", "React"],
    link: "https://resumancer.dev",
    image: "/work/resumancer-landing.png",
    imageAlt: "Resumancer product UI: a target job requirement matched against verified career evidence with reviewable diffs",
    featured: true,
    startDate: "09-2025",
    endDate: "Present",
  },
  {
    id: "p-baystate",
    title: "Baystate AI Data Pipeline",
    summary: "Hybrid-provider AI consolidation pipeline that registers products and syncs inventory from dozens of vendor sources automatically.",
    problem: "Product registration and inventory sync were manual: staff re-keyed vendor data into the storefront, entry errors propagated, and sales decisions ran on stale numbers.",
    built: [
      "Hybrid provider routing between Gemini Flash and GPT-4o-mini with validation gating — cheap tasks stay cheap, hard cases escalate.",
      "Distributed scraping fleet: Playwright scrapers containerized with Docker, orchestrated asynchronously by GitHub Actions.",
      "Automated product registration engine writing into Supabase/PostgreSQL, feeding a Next.js analytics dashboard.",
    ],
    impact: [
      "100% extraction accuracy across the consolidation workflow.",
      "70% lower LLM processing cost than single-provider routing.",
      "80% reduction in manual product entry; real-time sales data for daily decisions.",
    ],
    role: "AI & Software Engineer — sole engineer on the platform.",
    tech: ["Python", "TypeScript", "Gemini", "OpenAI", "Playwright", "Docker", "GitHub Actions", "Next.js", "Supabase", "PostgreSQL"],
    featured: true,
    startDate: "07-2024",
    endDate: "Present",
  },
  {
    id: "p-shopsite",
    title: "ShopSite-MCP",
    summary: "Model Context Protocol server that gives LLM agents a typed, safe interface to a legacy ShopSite e-commerce database.",
    problem: "Legacy ShopSite data lives in proprietary schemas no modern tooling can query — and letting an LLM loose on a raw production database is a liability.",
    built: [
      "An MCP server exposing typed tools over the legacy PostgreSQL/ShopSite schema — no raw SQL access for agents.",
      "Type-safe schema mapping that translates legacy relational structures into queryable tool contracts.",
      "Secure, scoped tool surface designed for autonomous AI agent use.",
    ],
    impact: [
      "Natural-language querying of legacy e-commerce data by any MCP-compatible LLM client.",
      "Demonstrates the pattern of making legacy systems AI-addressable without exposing them.",
    ],
    role: "Built end-to-end.",
    tech: ["TypeScript", "Node.js", "PostgreSQL", "MCP", "LLM Orchestration"],
    featured: true,
    startDate: "01-2026",
    endDate: "01-2026",
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
    context: "Resumancer",
    detail: "Agentic rewrite loop on the Vercel AI SDK — job requirements traced to verified Master CV evidence, edits staged as reviewable diffs.",
  },
  "p-baystate": {
    context: "Baystate AI Data Pipeline",
    detail: "Autonomous extraction pipeline: tasks routed between Gemini Flash and GPT-4o-mini with cost-gated escalation, validation gates with reject-and-retry, feeding an automated product registration engine — 100% accuracy at 70% lower cost.",
  },
  "p-shopsite": {
    context: "ShopSite-MCP",
    detail: "MCP server exposing typed tools over a legacy ShopSite PostgreSQL schema for safe LLM querying.",
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
  "exp-baystate": {
    context: "Baystate Pet & Garden",
    detail: "Production pipeline and dashboards in TypeScript/Python: scrapers, registration engine, analytics.",
  },
  "exp-atlas": {
    context: "Atlas Public Policy",
    detail: "spaCy semantic preprocessing and fuzzy matching over thousands of pages of state NEVI plans.",
  },
  "exp-allegro": {
    context: "Allegro Microsystems",
    detail: "Azure DevOps CI/CD pipelines for test-driver deployment and environment standardization.",
  },
  "edu-wpi": {
    context: "WPI M.S. CS",
    detail: "Deep learning, distributed systems, and client-facing software engineering projects.",
  },
};

export const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    id: "applied-ai",
    label: "Applied AI",
    description: "Shipping LLM systems that do real work under production constraints.",
    skills: [
      { name: "LLM Orchestration", proofIds: ["p-baystate", "p-resumancer"] },
      { name: "Agentic", proofIds: ["p-baystate", "p-resumancer"] },
      { name: "RAG / Semantic Search", proofIds: ["p-resumancer", "p-pdf"] },
      { name: "NLP / spaCy", proofIds: ["exp-atlas", "p-pdf"] },
      { name: "MCP", proofIds: ["p-shopsite"] },
    ],
  },
  {
    id: "app-engineering",
    label: "Application Engineering",
    description: "Product surfaces and services in the languages they ship in.",
    skills: [
      { name: "TypeScript", proofIds: ["p-resumancer", "p-shopsite", "exp-baystate", "p-axolotl"] },
      { name: "Python", proofIds: ["exp-baystate", "exp-atlas", "p-pdf"] },
      { name: "React", proofIds: ["p-resumancer", "exp-baystate", "p-7factor"] },
      { name: "Next.js", proofIds: ["p-resumancer", "exp-baystate"] },
      { name: "Node.js", proofIds: ["p-shopsite", "p-axolotl"] },
    ],
  },
  {
    id: "data-infra",
    label: "Data & Infrastructure",
    description: "The storage, orchestration, and automation underneath the AI.",
    skills: [
      { name: "PostgreSQL", proofIds: ["p-shopsite", "p-resumancer", "p-kiosk"] },
      { name: "Supabase", proofIds: ["p-resumancer", "exp-baystate"] },
      { name: "Docker", proofIds: ["exp-baystate"] },
      { name: "Playwright", proofIds: ["exp-baystate"] },
      { name: "AWS CDK", proofIds: ["p-axolotl"] },
      { name: "Azure DevOps", proofIds: ["exp-allegro", "p-7factor"] },
    ],
  },
];

export const CONTACTS: ContactLink[] = [
  { platform: "Email", handle: "nvborrello@gmail.com", link: "mailto:nvborrello@gmail.com" },
  { platform: "GitHub", handle: "@nickborrello", link: "https://github.com/nickborrello" },
  { platform: "LinkedIn", handle: "nicholasborrello", link: "https://www.linkedin.com/in/nicholasborrello/" },
];

export const RESUME_URL = "/resume.pdf";
