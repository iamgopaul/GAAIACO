import type { Metadata } from "next";
import { Container } from "@gaaia/ui/container";
import { PageHeader } from "@gaaia/ui/page-header";
import { SectionEyebrow } from "@gaaia/ui/section-eyebrow";

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
          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {experiments.map((e) => (
              <div
                key={e.number}
                className="group rounded-xl border border-dashed border-zinc-700/80 bg-zinc-950/30 p-6 transition duration-300 hover:border-silver/50 hover:bg-zinc-950/60 sm:p-8"
              >
                <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  <span>Experiment {e.number}</span>
                  <span className="rounded border border-zinc-700 px-2 py-0.5 text-silver/70">
                    Experimental
                  </span>
                </div>
                <h3 className="mt-7 font-mono text-lg font-semibold text-white">
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
