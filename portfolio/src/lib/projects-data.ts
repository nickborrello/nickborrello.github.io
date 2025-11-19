export const projects = [
  {
    id: 1,
    questTitle: "RPG Portfolio Website",
    description: "A personal portfolio styled as an RPG game, showcasing projects as quests.",
    status: "In Progress" as const,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { name: "GitHub", url: "https://github.com/nickborrello/nickborrello.github.io" },
      { name: "Live Demo", url: "https://nickborrello.github.io" }
    ]
  },
  {
    id: 2,
    questTitle: "AI Chatbot",
    description: "An AI-powered chatbot for customer support.",
    status: "Completed" as const,
    technologies: ["Python", "TensorFlow", "Flask"],
    links: [
      { name: "GitHub", url: "https://github.com/example/ai-chatbot" }
    ]
  },
  {
    id: 3,
    questTitle: "E-commerce Platform",
    description: "A full-stack e-commerce site with payment integration.",
    status: "Completed" as const,
    technologies: ["React", "Node.js", "MongoDB"],
    links: [
      { name: "GitHub", url: "https://github.com/example/ecommerce" },
      { name: "Live Demo", url: "https://example.com/demo" }
    ]
  }
];