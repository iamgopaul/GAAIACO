import type { Metadata } from "next";
import { Container } from "@gaaia/ui/container";
import { Button } from "@gaaia/ui/button";
import { PageHeader } from "@gaaia/ui/page-header";
import { SectionEyebrow } from "@gaaia/ui/section-eyebrow";
import { division } from "@/lib/divisions/apps";

export const metadata: Metadata = {
  title: "Features",
  description: `What ${division.brand} ships: the core capabilities of the platform.`,
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        label="Features"
        prefix={division.short}
        title="Everything you need to ship intelligent products."
        description={`${division.brand} is a full stack for autonomous intelligence: runtime, models, retrieval, evaluation, and orchestration in one place.`}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="01" label="Core capabilities" />
          <div className="mt-14 border-t border-zinc-800/70">
            {division.features.map((f) => (
              <div
                key={f.number}
                className="group flex flex-col gap-2 border-b border-zinc-800/70 py-7 transition-colors duration-300 hover:bg-zinc-950/40 sm:flex-row sm:items-baseline sm:gap-8 sm:px-2"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500 sm:w-12 sm:shrink-0">
                  {f.number}
                </span>
                <h3 className="flex items-center gap-2 text-xl font-semibold text-white sm:w-64 sm:shrink-0">
                  {f.title}
                  <span className="text-silver opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-10 sm:p-16">
            <SectionEyebrow number="02" label="Ready to build" />
            <h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              See it in your stack.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
              We&apos;ll walk through a real use case from your team and scope a
              pilot. No commitment required.
            </p>
            <div className="mt-10">
              <Button href="/contact">Book a walkthrough</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
