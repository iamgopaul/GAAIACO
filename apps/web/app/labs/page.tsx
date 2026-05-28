import type { Metadata } from "next";
import { Container } from "@gaaia/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";

export const metadata: Metadata = {
  title: "Labs",
  description:
    "GAAIA Labs: experiments, prototypes, and research in agents, vision, robotics, and forecasting.",
};

const experiments = [
  {
    number: "01",
    name: "Autonomous agents",
    body: "Long-running agents that plan, use tools, and complete multi-step workflows.",
  },
  {
    number: "02",
    name: "Computer vision",
    body: "Detection, recognition, and scene understanding for real-world inputs.",
  },
  {
    number: "03",
    name: "Forecasting engine",
    body: "Time-series and scenario modeling for prediction across domains.",
  },
  {
    number: "04",
    name: "Robotics",
    body: "Early explorations in embodied intelligence and physical automation.",
  },
];

export default function LabsPage() {
  return (
    <>
      <PageHeader
        label="Labs"
        title="Where we explore what comes next."
        description="Labs is our research and experimentation division: prototypes, demos, and future concepts that point toward where GAAIA is heading."
      />

      {/* === 01 · Active explorations ===================================== */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="01" label="Active explorations" />
          <h2 className="mt-8 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Research in progress.
          </h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-800/60 sm:grid-cols-2">
            {experiments.map((e) => (
              <div
                key={e.number}
                className="bg-zinc-950/40 p-6 transition hover:bg-zinc-950/70 sm:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                    {e.number}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                    Experimental
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-white">
                  {e.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {e.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
