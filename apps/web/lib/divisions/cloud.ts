export const division = {
  short: "Cloud",
  brand: "GAAIA Cloud",
  domain: "cloud.gaaia.co",
  tagline: "Infrastructure for autonomous intelligence.",
  description:
    "GAAIA Cloud is the infrastructure layer: model hosting, inference, vector stores, and deployment for the agents and applications that run on top.",
  hero: {
    eyebrow: "GAAIA Cloud",
    title: "The infrastructure",
    titleAccent: "behind everything.",
    sub: "Model hosting, inference, retrieval, and deployment, purpose-built for AI workloads instead of retrofitted onto general-purpose cloud.",
  },
  capabilities: [
    {
      number: "01",
      title: "Model hosting",
      body: "Run open, fine-tuned, and custom models with sane defaults and predictable cost.",
    },
    {
      number: "02",
      title: "Inference at scale",
      body: "GPU and CPU inference with autoscaling, batching, and global edge routing.",
    },
    {
      number: "03",
      title: "Deployment platform",
      body: "Ship AI workloads with the same ergonomics as deploying a web app.",
    },
  ],
  features: [
    {
      number: "01",
      title: "Managed model hosting",
      body: "Bring a model or pick one off the shelf. Versioned, autoscaled, and observable by default.",
    },
    {
      number: "02",
      title: "Inference endpoints",
      body: "One HTTP endpoint per model, with batching, caching, and structured outputs built in.",
    },
    {
      number: "03",
      title: "Vector + retrieval",
      body: "Managed vector stores with hybrid search and per-tenant isolation.",
    },
    {
      number: "04",
      title: "GPU orchestration",
      body: "Run training and large jobs on burstable GPU capacity without managing nodes.",
    },
    {
      number: "05",
      title: "Edge deployments",
      body: "Push inference close to your users for sub-100ms latency where it matters.",
    },
    {
      number: "06",
      title: "Observability",
      body: "Latency, cost, and accuracy per request, exportable to your existing stack.",
    },
  ],
  useCases: [
    {
      number: "01",
      title: "Hosted private models",
      body: "Run fine-tuned models privately without standing up your own GPU fleet.",
    },
    {
      number: "02",
      title: "AI feature backends",
      body: "Power AI features in production apps with predictable cost and latency.",
    },
    {
      number: "03",
      title: "Training jobs",
      body: "Burst into GPU capacity for fine-tunes without long-term commitments.",
    },
    {
      number: "04",
      title: "Regulated workloads",
      body: "Run inference in regions and configurations your compliance team can sign off on.",
    },
  ],
  pricing: [
    {
      name: "Usage",
      price: "Pay per token",
      tagline: "Standard models, billed per use.",
      features: [
        "Open-source models",
        "Pay per token / second",
        "Shared GPU pool",
        "Community support",
      ],
    },
    {
      name: "Dedicated",
      price: "From $1.2k/mo",
      tagline: "Your own reserved capacity.",
      features: [
        "Reserved GPUs",
        "Private models",
        "Priority autoscaling",
        "Email + chat support",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      tagline: "Compliance, residency, and SLAs.",
      features: [
        "Data residency control",
        "Dedicated networking",
        "SLAs + 24/7 support",
        "Security review + DPA",
      ],
    },
  ],
  about: {
    mission: "Make AI infrastructure feel as boring as a web host.",
    missionBody:
      "Running AI in production is full of footguns: GPU scheduling, cold starts, eval drift, cost explosions. Cloud exists to absorb that complexity so product teams don't have to.",
    vision: "Every team can run AI workloads at production quality.",
    visionBody:
      "We want a two-person team to be able to run reliable, scaled inference with the same ease they deploy a frontend today.",
    principles: [
      {
        number: "01",
        title: "Cost should be predictable",
        body: "No surprise bills. Quotas, alerts, and forecasts are first-class.",
      },
      {
        number: "02",
        title: "Boring is good",
        body: "We pick infrastructure that operators trust, even when it's less exciting.",
      },
      {
        number: "03",
        title: "Migration in, migration out",
        body: "Bring your weights and code. Take them with you if it ever stops working for you.",
      },
    ],
  },
};
