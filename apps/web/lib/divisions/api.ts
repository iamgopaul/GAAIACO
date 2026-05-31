export const division = {
  short: "API",
  brand: "GAAIA API",
  domain: "api.gaaia.co",
  tagline: "The developer platform.",
  description:
    "GAAIA API is the developer platform: API keys, SDKs, integrations, and documented endpoints for every GAAIA capability.",
  hero: {
    eyebrow: "GAAIA API",
    title: "Build on top of",
    titleAccent: "the agency.",
    sub: "One API surface for agents, models, retrieval, and orchestration, with SDKs, docs, and a real status page behind it.",
  },
  capabilities: [
    {
      number: "01",
      title: "Unified API",
      body: "Every GAAIA capability behind one consistent interface: agents, models, retrieval, evals.",
    },
    {
      number: "02",
      title: "First-class SDKs",
      body: "Typed clients for TypeScript, Python, Go, and the runtimes you actually use.",
    },
    {
      number: "03",
      title: "Production tooling",
      body: "API keys, usage dashboards, logs, retries, and a status page that's actually current.",
    },
  ],
  features: [
    {
      number: "01",
      title: "Agents API",
      body: "Create, configure, and invoke agents with tool use, memory, and observability built in.",
    },
    {
      number: "02",
      title: "Models API",
      body: "A single endpoint over text, image, audio, and embeddings, with model routing.",
    },
    {
      number: "03",
      title: "Retrieval API",
      body: "Hybrid vector + keyword retrieval, document ingestion, and per-tenant knowledge bases.",
    },
    {
      number: "04",
      title: "Eval & traces",
      body: "Per-request traces and eval hooks for production debugging and regression detection.",
    },
    {
      number: "05",
      title: "Webhooks",
      body: "Push events back into your stack: completions, failures, evals, and usage.",
    },
    {
      number: "06",
      title: "Rate limits & quotas",
      body: "Granular control: per-key, per-tenant, per-model. Predictable behavior under load.",
    },
  ],
  useCases: [
    {
      number: "01",
      title: "Embedded AI",
      body: "Add GAAIA capabilities to your own product without rebuilding the stack.",
    },
    {
      number: "02",
      title: "Internal automation",
      body: "Wire agents into the tools your engineering team already operates.",
    },
    {
      number: "03",
      title: "Partner integrations",
      body: "Resell or extend GAAIA capability under your brand or platform.",
    },
    {
      number: "04",
      title: "Custom workflows",
      body: "Orchestrate multi-step AI pipelines with retries, caching, and tracing.",
    },
  ],
  pricing: [
    {
      name: "Developer",
      price: "Pay as you go",
      tagline: "Free to start. Pay only for what you use.",
      features: [
        "All API endpoints",
        "Public docs + SDKs",
        "Community support",
        "Usage-based billing",
      ],
    },
    {
      name: "Production",
      price: "From $499/mo",
      tagline: "For teams running on top of GAAIA.",
      features: [
        "Higher rate limits",
        "Private models option",
        "Email + chat support",
        "Usage analytics",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      tagline: "Self-hosted or dedicated capacity.",
      features: [
        "Dedicated infrastructure",
        "Custom SLAs",
        "Security review + DPA",
        "Dedicated engineer",
      ],
    },
  ],
  about: {
    mission: "Make every GAAIA capability available behind a clean API.",
    missionBody:
      "Internal tools are powerful, but real leverage comes from letting developers build on top. The API team exists to keep that surface stable, fast, and pleasant to use.",
    vision: "The default way to ship intelligent features.",
    visionBody:
      "We want GAAIA API to be the obvious choice when an engineer says 'add AI to this', because it just works.",
    principles: [
      {
        number: "01",
        title: "Stable, even at the edge",
        body: "Backward compatibility is a feature. Breaking changes are versioned and announced.",
      },
      {
        number: "02",
        title: "Docs are product",
        body: "If it's not in the docs, it doesn't exist. We treat them like any other release.",
      },
      {
        number: "03",
        title: "Status is honest",
        body: "We tell you when something is degraded, even when it's only us who noticed.",
      },
    ],
  },
};
