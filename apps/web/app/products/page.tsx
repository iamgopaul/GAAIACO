import type { Metadata } from "next";
import { Container } from "@gaaia/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";

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
          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-800/60 sm:grid-cols-2">
            {products.map((p) => (
              <div
                key={p.number}
                className="bg-zinc-950/40 p-6 transition hover:bg-zinc-950/70 sm:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                    {p.number}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                    Coming soon
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-white">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
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
