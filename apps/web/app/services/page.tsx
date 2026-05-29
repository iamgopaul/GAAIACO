import type { Metadata } from "next";
import { Container } from "@gaaia/ui/container";
import { Button } from "@gaaia/ui/button";
import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";

export const metadata: Metadata = {
  title: "Services",
  description:
    "GAAIA Web Studio builds websites, mobile apps, AI integrations, and custom enterprise software.",
};

const services = [
  {
    number: "01",
    title: "Web development",
    body: "Fast, modern marketing sites and web apps built with Next.js, TypeScript, and a scalable architecture.",
  },
  {
    number: "02",
    title: "Mobile apps",
    body: "Cross-platform mobile applications designed for performance and a polished user experience.",
  },
  {
    number: "03",
    title: "AI integration",
    body: "Bring agents, chat, and automation into existing products, from LLM APIs to custom pipelines.",
  },
  {
    number: "04",
    title: "Enterprise software",
    body: "Internal tools, dashboards, and custom systems that fit how your business actually operates.",
  },
  {
    number: "05",
    title: "UI/UX systems",
    body: "Design systems and interfaces that stay consistent as your product and team grow.",
  },
  {
    number: "06",
    title: "Technical consulting",
    body: "Architecture, stack decisions, and AI strategy guidance for teams shipping intelligent products.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Engineering for businesses that want to move fast."
        description="The Web Studio division designs and ships software for clients, from a single website to a full enterprise platform with AI built in."
      />

      {/* === 01 · Services grid ============================================ */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="01" label="What we offer" />
          <h2 className="mt-8 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Services across the full product lifecycle.
          </h2>
          <div className="mt-14 border-t border-zinc-800/70">
            {services.map((s) => (
              <div
                key={s.number}
                className="group flex flex-col gap-2 border-b border-zinc-800/70 py-7 transition-colors duration-300 hover:bg-zinc-950/40 sm:flex-row sm:items-baseline sm:gap-8 sm:px-2"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500 sm:w-12 sm:shrink-0">
                  {s.number}
                </span>
                <h3 className="flex items-center gap-2 text-xl font-semibold text-white sm:w-64 sm:shrink-0">
                  {s.title}
                  <span className="text-silver opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* === 02 · CTA ====================================================== */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-10 sm:p-16">
            <SectionEyebrow number="02" label="Ready to build" />
            <h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Tell us what you&apos;re working on.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
              We&apos;ll scope it with you. No commitment required.
            </p>
            <div className="mt-10">
              <Button href="/contact">Start a project</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
