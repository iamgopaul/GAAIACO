import { Container } from "@gaaia/ui/container";
import { Button } from "@gaaia/ui/button";
import { DivisionCard } from "@gaaia/ui/division-card";
import { SectionEyebrow } from "@gaaia/ui/section-eyebrow";
import { divisions } from "@gaaia/ui/divisions";

const capabilities = [
  {
    number: "01",
    title: "Intelligent products",
    body: "AI agents, assistants, and automation built to run autonomously and at scale.",
  },
  {
    number: "02",
    title: "Software engineering",
    body: "Websites, mobile apps, and enterprise systems designed and shipped end to end.",
  },
  {
    number: "03",
    title: "Infrastructure",
    body: "Model hosting, APIs, and deployment pipelines that power everything we build.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* === Hero =========================================================== */}
      <section id="hero" className="relative min-h-svh">
        <Container className="relative pt-36 pb-24 sm:pt-48 sm:pb-32">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            <span className="text-silver">GAAIA</span>
            <span className="h-px w-10 bg-zinc-800" />
            <span>Established 2026</span>
          </div>

          <h1 className="mt-10 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
            Autonomous intelligence{" "}
            <span className="text-silver">systems.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            GAAIA designs, builds, and deploys AI agents, software, and
            infrastructure for the next generation of intelligent products.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/services">Start a project</Button>
            <Button href="/products" variant="secondary">
              Explore the ecosystem
            </Button>
          </div>
        </Container>
      </section>

      {/* === 01 · What we do =============================================== */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="01" label="What we do" />
          <h2 className="mt-8 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            One agency, end to end.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
            From research to production, GAAIA covers every layer of an
            intelligent product.
          </p>
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {capabilities.map((c) => (
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

      {/* === 02 · Ecosystem ================================================= */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="02" label="The ecosystem" />
          <h2 className="mt-8 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            One agency. Eight divisions.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
            GAAIA is organized like a parent organization. Each division
            operates as its own platform under the gaaia.co umbrella.
          </p>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division, i) => (
              <DivisionCard key={division.domain} index={i} {...division} />
            ))}
          </div>
        </Container>
      </section>

      {/* === 03 · CTA ======================================================= */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-950/50 p-10 sm:p-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(200,204,209,0.12),transparent_70%)]" />
            <div className="relative">
              <SectionEyebrow number="03" label="Get in touch" />
            <h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
              Whether you need an AI agent, a custom application, or a full
              product built from scratch, GAAIA can take it from idea to
              deployment.
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
