/** The GAAIA subdomain ecosystem: one entry per division. */
export type Division = {
  name: string;
  domain: string;
  description: string;
  status: "live" | "soon";
};

export const divisions: Division[] = [
  {
    name: "AI",
    domain: "ai.gaaia.co",
    description:
      "GAAIA Core: autonomous agents, multimodal systems, LLMs, and automation.",
    status: "soon",
  },
  {
    name: "Apps",
    domain: "apps.gaaia.co",
    description:
      "The product launcher: hosted SaaS tools, dashboards, and client applications.",
    status: "soon",
  },
  {
    name: "Web Studio",
    domain: "web.gaaia.co",
    description:
      "Engineering division for websites, mobile apps, and custom enterprise software.",
    status: "soon",
  },
  {
    name: "Agents",
    domain: "agents.gaaia.co",
    description:
      "A dedicated platform for personal and enterprise AI agents and autonomous workflows.",
    status: "soon",
  },
  {
    name: "Labs",
    domain: "labs.gaaia.co",
    description:
      "Experiments and research in robotics, computer vision, and forecasting.",
    status: "soon",
  },
  {
    name: "API",
    domain: "api.gaaia.co",
    description:
      "Developer platform: API keys, SDKs, integrations, and documented endpoints.",
    status: "soon",
  },
  {
    name: "Cloud",
    domain: "cloud.gaaia.co",
    description:
      "Infrastructure for autonomous intelligence: model hosting, inference, and deployment.",
    status: "soon",
  },
];
