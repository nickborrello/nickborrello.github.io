import { CapabilityGroup, ContactLink, EducationItem, ExperienceItem, ProjectItem, UserInfo } from './types';

export const USER_INFO: UserInfo = {
  name: "Nicholas Borrello",
  firstName: "Nick",
  title: "AI & Software Engineer",
  location: "Durham, NC",
  status: "Open to opportunities",
  positioning: "Agentic Systems & LLM Applications",
  summary: "I build software that connects AI models to real systems — agent workflows, product intelligence, developer tools, and the infrastructure that keeps them reliable.",
  bio: "I'm an AI & software engineer focused on building reliable systems with modern LLMs. My work spans bounded agent runtimes, data extraction pipelines, and developer tooling — bridging model capabilities with production software engineering.",
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
      "Built automated evaluation test harnesses to benchmark extraction accuracy and model latency against verified datasets before catalog publishing.",
      "Engineered retail CMS integrations (Bun/Hono, SQLite) to synchronize external supplier data directly into inventory and publishing workflows.",
      "Maintained high-throughput extraction pipelines using Docker, Playwright, and Crawlee.",
    ],
    skills: ["TypeScript", "Python", "Bun / Hono", "SQLite", "Docker", "Playwright", "AI Evaluation"],
  },
  {
    id: "exp-allegro",
    role: "Process Engineering Intern",
    company: "Allegro MicroSystems",
    period: "Jun 2023 — Aug 2023",
    location: "Manchester, NH",
    type: "Internship",
    summary: "Built automated test and deployment tooling for semiconductor test infrastructure.",
    achievements: [
      "Developed automated test and deployment services using Python, Java, and Docker to standardize driver updates across engineering equipment.",
      "Maintained Azure DevOps CI/CD pipelines and Node.js automation utilities, replacing manual deployment processes.",
    ],
    skills: ["Python", "Java", "Docker", "Azure DevOps", "CI/CD", "Node.js"],
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
      "Coursework: Machine Learning, Deep Learning, Algorithms, Database Management Systems, Operating Systems, Design of Software Systems, Human-Computer Interaction.",
    ],
  },
  {
    id: "edu-wpi-bs",
    degree: "B.S. Computer Science, With Distinction",
    school: "Worcester Polytechnic Institute",
    period: "May 2024",
    location: "Worcester, MA",
    highlights: [
      "Graduated With Distinction. Dean's List (Fall 2022).",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p-baystate",
    title: "Bay State Product Intelligence",
    summary: "Production AI pipeline that resolves product identities from external vendor data and generates verified catalog updates under strict runtime constraints.",
    highlights: [
      "Multi-source product research pipeline resolving variant identity and barcode mismatches across distributor catalogs.",
      "Agent execution layer equipped with 25 bounded research tools enforcing privacy controls, deadlines, and token budgets.",
      "Model routing and fallback logic with fail-closed schema validation to prevent runaway execution and unverified catalog edits.",
    ],
    tech: ["TypeScript", "Python", "Bun / Hono", "SQLite", "Docker", "Playwright", "LLM Tooling"],
    repoUrl: "https://github.com/Bay-State-Pet-and-Garden-Supply/baystate-cms",
    featured: true,
    startDate: "07-2024",
    endDate: "Present",
  },
  {
    id: "p-resumancer",
    title: "Resumancer AI",
    summary: "Agentic career workspace that matches job requirements against a master CV, proposing reviewable diffs with real-time verification and ATS validation.",
    highlights: [
      "Structured requirement-to-evidence matching engine aligning job requirements against a verified master CV and evidence catalog.",
      "Reviewable diff generator proposing verified, auditable career updates instead of unconstrained hallucinations.",
      "Real-time PDF rendering engine with automated single-page layout budget guarantees.",
    ],
    tech: ["Next.js", "TypeScript", "Vercel AI SDK", "Supabase", "PostgreSQL", "React"],
    link: "https://resumancer.dev",
    image: "/work/resumancer-landing.png",
    imageAlt: "Resumancer product UI: job requirement matching against verified career evidence with reviewable diffs",
    featured: true,
    startDate: "10-2025",
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
    tech: ["TypeScript", "Model Context Protocol", "Zod", "Node.js", "ShopSite XML/CGI"],
    featured: true,
    startDate: "01-2026",
    endDate: "01-2026",
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
    summary: "NLP-assisted document search for locating policy evidence across lengthy state NEVI plans using spaCy and keyword/fuzzy matching.",
    tech: ["Python", "spaCy", "PyMuPDF", "NLP", "PyQt6"],
    repoUrl: "https://github.com/nickborrello/NEVI-Search-Tool",
    startDate: "08-2022",
    endDate: "12-2022",
  },
];

export const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    id: "ai-applied",
    label: "AI & Applied ML",
    skills: [
      "LLM Agents",
      "Model Context Protocol (MCP)",
      "Tool Calling & Bounds",
      "Structured Outputs",
      "Routing & Fallbacks",
      "RAG & Embeddings",
      "LLM Evaluation",
      "PyTorch",
    ],
  },
  {
    id: "languages-frameworks",
    label: "Languages & Frameworks",
    skills: [
      "TypeScript",
      "Python",
      "Java",
      "SQL",
      "React",
      "Next.js",
      "Node.js / Bun",
      "Hono",
      "Zod",
    ],
  },
  {
    id: "data-infra",
    label: "Data & Infrastructure",
    skills: [
      "PostgreSQL",
      "SQLite",
      "Supabase",
      "Docker",
      "Playwright",
      "Azure DevOps",
      "GitHub Actions",
      "Linux",
    ],
  },
];

export const CONTACTS: ContactLink[] = [
  { platform: "Email", handle: "nvborrello@gmail.com", link: "mailto:nvborrello@gmail.com" },
  { platform: "GitHub", handle: "github.com/nickborrello", link: "https://github.com/nickborrello" },
  { platform: "LinkedIn", handle: "linkedin.com/in/nicholasborrello", link: "https://www.linkedin.com/in/nicholasborrello" },
];

export const RESUME_URL = "/resume.pdf";
