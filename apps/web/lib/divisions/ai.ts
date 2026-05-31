export const division = {
  short: "AI",
  brand: "GAAIA AI",
  domain: "ai.gaaia.co",
  tagline: "Autonomous intelligence, at the core.",
  description:
    "GAAIA AI is the agency's intelligence layer: agents, language models, multimodal systems, and the automation that runs on top of them.",
  hero: {
    eyebrow: "GAAIA AI",
    title: "Autonomous agents,",
    titleAccent: "production grade.",
    sub: "GAAIA AI builds the agents, models, and multimodal systems that power every other division of the ecosystem.",
  },
  capabilities: [
    {
      number: "01",
      title: "Autonomous agents",
      body: "Long-running agents that plan, use tools, and complete real multi-step workflows.",
    },
    {
      number: "02",
      title: "Language models",
      body: "Tuned and orchestrated LLMs for chat, retrieval, reasoning, and generation.",
    },
    {
      number: "03",
      title: "Multimodal systems",
      body: "Vision, speech, and document understanding stitched into single intelligent pipelines.",
    },
  ],
  features: [
    {
      number: "01",
      title: "Agent runtime",
      body: "Production runtime for agents: tool use, memory, planning, retries, and observability built in.",
    },
    {
      number: "02",
      title: "Retrieval & memory",
      body: "Hybrid vector + keyword retrieval with per-tenant memory and knowledge graphs.",
    },
    {
      number: "03",
      title: "Tool & API orchestration",
      body: "Connect agents to your stack: APIs, databases, internal tools, and SaaS systems.",
    },
    {
      number: "04",
      title: "Multimodal models",
      body: "Image, audio, and document models orchestrated together with text-first reasoning.",
    },
    {
      number: "05",
      title: "Evaluation & guardrails",
      body: "Continuous evals, regression tracking, and safety guardrails for every agent.",
    },
    {
      number: "06",
      title: "Fine-tuning & RLHF",
      body: "Custom model tuning when off-the-shelf models aren't enough for your domain.",
    },
  ],
  useCases: [
    {
      number: "01",
      title: "Customer operations",
      body: "Agents that handle support, triage, and account workflows end to end.",
    },
    {
      number: "02",
      title: "Internal copilots",
      body: "Domain-aware copilots inside the tools your team already uses.",
    },
    {
      number: "03",
      title: "Knowledge automation",
      body: "Process documents, extract structure, and route work without humans in the loop.",
    },
    {
      number: "04",
      title: "Sales & research",
      body: "Agents that prospect, research, and prepare deal briefs autonomously.",
    },
  ],
  pricing: [
    {
      name: "Starter",
      price: "Custom",
      tagline: "Pilot a single agent in production.",
      features: [
        "One agent in production",
        "Up to 50k task runs / month",
        "Standard models",
        "Email support",
      ],
    },
    {
      name: "Scale",
      price: "Custom",
      tagline: "Production agents across your organization.",
      features: [
        "Multiple agents",
        "Unlimited task runs",
        "Custom models & fine-tuning",
        "Dedicated success engineer",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      tagline: "Bespoke deployments and on-prem.",
      features: [
        "Self-hosted or private cloud",
        "SLA + 24/7 support",
        "Custom integrations",
        "Security review & DPA",
      ],
    },
  ],
  about: {
    mission: "Make agents work reliably in the real world.",
    missionBody:
      "Most AI demos collapse the moment they meet real data, real users, and real edge cases. GAAIA AI exists to bridge that gap with infrastructure built for production.",
    vision: "Every team has an agent for the work they don't want to do.",
    visionBody:
      "We see a near future where agents handle the repetitive and the high-volume so people can focus on what only humans can do.",
    principles: [
      {
        number: "01",
        title: "Reliability over novelty",
        body: "We pick boring, observable architectures so agents survive contact with reality.",
      },
      {
        number: "02",
        title: "Tools, not magic",
        body: "Agents are systems. We design them like systems: with logs, metrics, retries, and tests.",
      },
      {
        number: "03",
        title: "Human in command",
        body: "Agents augment people. Critical decisions stay reviewable, escalatable, and undoable.",
      },
    ],
  },
};
