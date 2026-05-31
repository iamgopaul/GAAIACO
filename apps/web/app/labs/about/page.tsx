import type { Metadata } from "next";
import { Container } from "@gaaia/ui/container";
import { PageHeader } from "@gaaia/ui/page-header";
import { SectionEyebrow } from "@gaaia/ui/section-eyebrow";
import { division } from "@/lib/divisions/labs";

export const metadata: Metadata = {
  title: "About",
  description: `About ${division.brand}: mission, vision, and the principles behind the work.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        prefix={division.short}
        title={`Why ${division.brand} exists.`}
        description={division.description}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="01" label="What we stand for" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border-l-2 border-silver/50 bg-zinc-950/40 py-8 pl-8 pr-6 sm:py-10 sm:pl-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-silver">
                Mission
              </p>
              <h2 className="mt-8 text-2xl font-semibold text-white sm:text-3xl">
                {division.about.mission}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">
                {division.about.missionBody}
              </p>
            </div>
            <div className="rounded-2xl border-l-2 border-zinc-700 bg-zinc-950/40 py-8 pl-8 pr-6 sm:py-10 sm:pl-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-silver">
                Vision
              </p>
              <h2 className="mt-8 text-2xl font-semibold text-white sm:text-3xl">
                {division.about.vision}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">
                {division.about.visionBody}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="02" label="How we work" />
          <h2 className="mt-8 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            The principles behind every project.
          </h2>
          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-3">
            {division.about.principles.map((p) => (
              <div key={p.number}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 font-mono text-sm text-silver">
                  {p.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
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
