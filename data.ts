import { CapabilityGroup, ContactLink, EducationItem, ExperienceItem, ProjectItem, UserInfo } from './types';

export const USER_INFO: UserInfo = {
  name: "Nicholas Borrello",
  firstName: "Nick",
  title: "AI & Software Engineer",
  location: "Durham, NC",
  status: "Open to opportunities",
  positioning: "Agentic Systems & LLM Applications",
  summary: "I build production-grade AI systems, agentic workflows, and developer tools — with bounded execution, real-time evaluation, and verifiable outputs.",
  bio: "I'm an AI & software engineer focused on building reliable, production-ready LLM systems. My work spans agentic architectures with strict execution bounds, developer tooling, and automated evaluation pipelines — turning model capabilities into dependable, scalable software.",
};

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-baystate",
    role: "AI & Software Engineer",
    company: "Bay State Pet & Garden",
    period: "Jul 2024 — Present",
    location: "Taunton, MA (Remote)",
    type: "Full-time",
    summary: "Engineering AI extraction pipelines, retail CMS data workflows, and automated evaluation harnesses.",
    achievements: [
      "Built automated evaluation test harnesses to benchmark model latency and extraction accuracy against golden datasets before catalog deployment.",
      "Engineered retail CMS integrations to synchronize external supplier data directly into inventory and publishing workflows.",
      "Maintained high-throughput data collection infrastructure using Docker, Playwright, and PostgreSQL.",
    ],
    skills: ["TypeScript", "Python", "Docker", "Playwright", "PostgreSQL", "AI Evaluation", "CI/CD"],
  },
  {
    id: "exp-allegro",
    role: "Process Engineering Intern",
    company: "Allegro MicroSystems",
    period: "Jun 2023 — Aug 2023",
    location: "Manchester, NH",
    type: "Internship",
    summary: "Engineered CI/CD automation pipelines for semiconductor testing infrastructure.",
    achievements: [
      "Built an Azure DevOps CI/CD pipeline that automated driver deployment to engineering test equipment, replacing a manual multi-step deployment process.",
      "Developed automated testing workflows to standardize driver updates and ensure repeatable verification runs across lab systems.",
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
    degree: "B.S. Computer Science, With Distinction",
    school: "Worcester Polytechnic Institute",
    period: "May 2024",
    location: "Worcester, MA",
    highlights: [
      "Graduated With Distinction. Dean's List, multiple semesters.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p-resumancer",
    title: "Resumancer AI",
    summary: "Agentic career workspace that matches job requirements against a master CV, proposing reviewable diffs with real-time verification and ATS validation.",
    highlights: [
      "Requirement-to-evidence matching engine built with Vercel AI SDK and pgvector semantic retrieval.",
      "Reviewable diff generator proposing verified, auditable career updates instead of unconstrained hallucinations.",
      "Real-time PDF rendering engine with automated single-page layout budget guarantees.",
    ],
    tech: ["Next.js", "TypeScript", "Vercel AI SDK", "Supabase", "PostgreSQL", "pgvector", "React"],
    link: "https://resumancer.dev",
    image: "/work/resumancer-landing.png",
    imageAlt: "Resumancer product UI: job requirement matching against verified career evidence with reviewable diffs",
    featured: true,
    startDate: "10-2025",
    endDate: "Present",
  },
  {
    id: "p-baystate",
    title: "Bay State Product Intelligence",
    summary: "Production AI pipeline that resolves product identities from external vendor data and generates verified catalog updates under strict runtime constraints.",
    highlights: [
      "Agent execution layer equipped with 25 bounded research tools enforcing privacy controls, deadlines, and cost budgets.",
      "Automated model routing and fallback logic preventing runaway execution and tool failure cascades.",
      "Multi-source product research pipeline resolving variant identity and barcode mismatches across distributor catalogs.",
    ],
    tech: ["TypeScript", "Python", "LLM Orchestration", "Agentic Systems", "Docker", "Playwright", "PostgreSQL"],
    featured: true,
    startDate: "07-2024",
    endDate: "Present",
  },
  {
    id: "p-shopsite",
    title: "ShopSite MCP Server",
    summary: "Model Context Protocol server allowing AI agents to securely query orders, search products, and manage inventory over legacy e-commerce backends.",
    highlights: [
      "Typed tool layer wrapping XML/CGI requests and HMAC-SHA1 authentication into structured LLM tool interfaces.",
      "Type-safe schema validation via Zod ensuring strict input/output bounds on all agent operations.",
      "Enables natural language querying and automated workflows without exposing direct API credentials.",
    ],
    tech: ["TypeScript", "Model Context Protocol", "Zod", "Node.js", "PostgreSQL"],
    featured: true,
    startDate: "01-2026",
    endDate: "01-2026",
  },
  {
    id: "p-medusa",
    title: "Medusa Storefront Agent",
    summary: "Autonomous store operations agent monitoring inventory levels, drafting reorders, and applying pricing rules via typed MCP tool calls.",
    tech: ["TypeScript", "Medusa.js", "PostgreSQL", "Model Context Protocol", "Node.js"],
    startDate: "07-2026",
    endDate: "07-2026",
  },
  {
    id: "p-asl",
    title: "ASL Gesture Recognition",
    summary: "CNN & Transformer models recognizing 100+ American Sign Language gestures using ResNet34 and MediaPipe landmark sequences.",
    tech: ["Python", "PyTorch", "ResNet34", "MediaPipe", "Computer Vision"],
    startDate: "01-2025",
    endDate: "05-2025",
  },
  {
    id: "p-nevi",
    title: "NEVI Search Tool",
    summary: "NLP and document search tool for extracting policy evidence and tabular funding metrics from multi-hundred-page state EV infrastructure plans.",
    tech: ["Python", "spaCy", "PyMuPDF", "NLP", "PyQt6"],
    repoUrl: "https://github.com/nickborrello/NEVI-Search-Tool",
    startDate: "08-2022",
    endDate: "12-2022",
  },
  {
    id: "p-pdf",
    title: "AI PDF Search",
    summary: "Retrieval-augmented generation (RAG) system for real-time semantic search and question-answering over complex PDF document sets.",
    tech: ["Python", "LangChain", "Vector Databases", "NLP"],
    startDate: "10-2023",
    endDate: "10-2023",
  },
];

export const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    id: "ai-agents",
    label: "AI & Agent Systems",
    description: "Autonomous agent execution layers, protocol tools, and production LLM orchestration.",
    skills: [
      "LLM Agents",
      "Model Context Protocol (MCP)",
      "Tool Calling & Bounds",
      "Structured Outputs",
      "Routing & Fallbacks",
      "RAG & Embeddings",
      "LLM Evaluation",
      "VLM / OCR",
    ],
  },
  {
    id: "ml-nlp",
    label: "Machine Learning & NLP",
    description: "Deep learning architectures, computer vision, document intelligence, and linguistic extraction.",
    skills: [
      "PyTorch",
      "CNNs & Transformers",
      "Computer Vision",
      "MediaPipe",
      "spaCy",
      "Document Intelligence",
      "Fuzzy Matching",
    ],
  },
  {
    id: "fullstack",
    label: "Full Stack & Backend",
    description: "Web applications, type-safe API contracts, and relational data layers.",
    skills: [
      "TypeScript",
      "Python",
      "SQL",
      "React",
      "Next.js",
      "Node.js / Bun",
      "PostgreSQL",
      "SQLite",
      "Supabase",
      "REST APIs",
      "Zod",
    ],
  },
  {
    id: "infra",
    label: "Infrastructure & Tooling",
    description: "Automation, CI/CD pipelines, containerization, and cloud infrastructure.",
    skills: [
      "Docker",
      "Playwright",
      "GitHub Actions",
      "CI/CD & DevOps",
      "Azure DevOps",
      "Git & Linux",
      "AWS CDK",
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
