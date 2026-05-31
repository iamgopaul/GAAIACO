import { Container } from "@gaaia/ui/container";
import { Button } from "@gaaia/ui/button";
import { SectionEyebrow } from "@gaaia/ui/section-eyebrow";
import { division } from "@/lib/divisions/ai";

export default function HomePage() {
  return (
    <>
      <section id="hero" className="relative min-h-svh">
        <Container className="relative pt-36 pb-24 sm:pt-48 sm:pb-32">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            <span className="text-silver">{division.hero.eyebrow}</span>
            <span className="h-px w-10 bg-zinc-800" />
            <span>A division of GAAIA</span>
          </div>

          <h1 className="mt-10 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
            {division.hero.title}{" "}
            <span className="text-silver">{division.hero.titleAccent}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {division.hero.sub}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Start a project</Button>
            <Button href="/features" variant="secondary">
              See what we build
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="01" label="What we do" />
          <h2 className="mt-8 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {division.brand}, end to end.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
            From research to production: the systems, models, and runtime that
            make autonomous intelligence real.
          </p>
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {division.capabilities.map((c) => (
              <div
                key={c.number}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-gradient-to-b from-zinc-900/50 to-zinc-950/10 p-8 transition duration-300 hover:border-silver/40 hover:from-zinc-900/80"
              >
                <span className="pointer-events-none absolute right-4 top-3 font-display text-6xl leading-none text-white/[0.06] transition-colors duration-300 group-hover:text-white/10">
                  {c.number}
                </span>
                <h3 className="relative mt-4 text-lg font-semibold text-white">
                  {c.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-zinc-400">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-950/50 p-10 sm:p-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(200,204,209,0.12),transparent_70%)]" />
            <div className="relative">
              <SectionEyebrow number="02" label="Get in touch" />
              <h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Ready to put agents to work?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
                Tell us what you want to automate. We&apos;ll scope a pilot and
                ship something that actually runs.
              </p>
              <div className="mt-10">
                <Button href="/contact">Start the conversation</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
