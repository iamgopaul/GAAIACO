import type { Metadata } from "next";
import { Container } from "@gaaia/ui/container";
import { PageHeader } from "@gaaia/ui/page-header";
import { SectionEyebrow } from "@gaaia/ui/section-eyebrow";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The GAAIA product ecosystem: SaaS tools and AI applications, hosted under apps.gaaia.co.",
};

const products = [
  {
    number: "01",
    name: "Forecast AI",
    body: "Predictive analytics and forecasting powered by multimodal models.",
  },
  {
    number: "02",
    name: "GAAIA Chat",
    body: "A multimodal assistant for teams, connected to your tools and data.",
  },
  {
    number: "03",
    name: "Analytics Dashboard",
    body: "Real-time dashboards that turn raw signals into clear decisions.",
  },
  {
    number: "04",
    name: "Automation Suite",
    body: "Autonomous workflows that handle repetitive operations end to end.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        label="Products"
        title="A growing ecosystem of intelligent products."
        description="Every GAAIA product will live under apps.gaaia.co, a single launcher for our SaaS tools and AI applications. Here is what is on the way."
      />

      {/* === 01 · In development ========================================== */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="01" label="In development" />
          <h2 className="mt-8 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            The first wave of GAAIA products.
          </h2>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {products.map((p) => (
              <div
                key={p.number}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-8 transition duration-300 hover:border-silver/40 sm:p-10"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(200,204,209,0.1),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {p.name}
                  </h3>
                  <span className="mt-1 shrink-0 rounded-full border border-zinc-700 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                    Coming soon
                  </span>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-zinc-400">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
