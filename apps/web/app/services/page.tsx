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
          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-800/60 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.number}
                className="bg-zinc-950/40 p-6 transition hover:bg-zinc-950/70 sm:p-8"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  {s.number}
                </span>
                <h3 className="mt-8 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
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
