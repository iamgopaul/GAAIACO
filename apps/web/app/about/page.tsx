import type { Metadata } from "next";
import { Container } from "@gaaia/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";

export const metadata: Metadata = {
  title: "About",
  description:
    "GAAIA is a multi-division technology agency building autonomous intelligence systems.",
};

const principles = [
  {
    number: "01",
    title: "Autonomy first",
    body: "We build systems that operate on their own. Agents and automation that do real work, not demos.",
  },
  {
    number: "02",
    title: "Ecosystem, not silos",
    body: "Every division shares a common foundation, so products compound instead of fragmenting.",
  },
  {
    number: "03",
    title: "Production-grade",
    body: "Research is only useful when it ships. We design for reliability, scale, and real users.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="A technology agency built like a parent organization."
        description="GAAIA (the Global Autonomous Artificial Intelligence Agency) is structured as a set of divisions, each focused on one layer of the intelligent product stack."
      />

      {/* === 01 · Mission & Vision ========================================= */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="01" label="What we stand for" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-800/60 lg:grid-cols-2">
            <div className="bg-zinc-950/40 p-8 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Mission
              </p>
              <h2 className="mt-8 text-2xl font-semibold text-white sm:text-3xl">
                Make autonomous intelligence practical.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">
                Build the agents, applications, and infrastructure that let
                organizations operate faster and smarter than ever before.
              </p>
            </div>
            <div className="bg-zinc-950/40 p-8 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Vision
              </p>
              <h2 className="mt-8 text-2xl font-semibold text-white sm:text-3xl">
                A connected ecosystem, end to end.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">
                AI, software, and cloud infrastructure working as one, so any
                idea can move from concept to deployed product without
                friction.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* === 02 · Principles =============================================== */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="02" label="How we work" />
          <h2 className="mt-8 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            The principles behind every division.
          </h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-800/60 sm:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.number}
                className="bg-zinc-950/40 p-6 transition hover:bg-zinc-950/70 sm:p-8"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  {p.number}
                </span>
                <h3 className="mt-8 text-lg font-semibold text-white">
                  {p.title}
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
