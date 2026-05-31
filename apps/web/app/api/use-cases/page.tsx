import type { Metadata } from "next";
import { Container } from "@gaaia/ui/container";
import { Button } from "@gaaia/ui/button";
import { PageHeader } from "@gaaia/ui/page-header";
import { SectionEyebrow } from "@gaaia/ui/section-eyebrow";
import { division } from "@/lib/divisions/api";

export const metadata: Metadata = {
  title: "Use cases",
  description: `Where teams are using ${division.brand} in production.`,
};

export default function UseCasesPage() {
  return (
    <>
      <PageHeader
        label="Use cases"
        prefix={division.short}
        title="What people build with us."
        description={`A snapshot of where ${division.brand} is making the biggest difference today.`}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="01" label="In production" />
          <h2 className="mt-8 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Real teams, real workflows.
          </h2>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {division.useCases.map((u) => (
              <div
                key={u.number}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-8 transition duration-300 hover:border-silver/40 sm:p-10"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(200,204,209,0.1),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {u.title}
                  </h3>
                  <span className="mt-1 shrink-0 rounded-full border border-zinc-700 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                    Live
                  </span>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-zinc-400">
                  {u.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-10 sm:p-16">
            <SectionEyebrow number="02" label="Your use case" />
            <h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Don&apos;t see yours?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
              Tell us what you&apos;re trying to automate. If it&apos;s the
              right fit, we&apos;ll scope it and ship a pilot.
            </p>
            <div className="mt-10">
              <Button href="/contact">Start a conversation</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
