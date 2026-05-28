import type { Metadata } from "next";
import { Container } from "@gaaia/ui/container";
import { Button } from "@gaaia/ui/button";
import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GAAIA for project enquiries, partnerships, and investor information.",
};

const channels = [
  {
    number: "01",
    title: "General & projects",
    body: "Questions, project enquiries, or anything else.",
    email: "hello@gaaia.co",
  },
  {
    number: "02",
    title: "Partnerships",
    body: "Collaborations, integrations, and joint ventures.",
    email: "partners@gaaia.co",
  },
  {
    number: "03",
    title: "Investors",
    body: "Investor relations, decks, and company information.",
    email: "investors@gaaia.co",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's build something intelligent."
        description="Tell us about your project, a partnership idea, or request investor information. We read every message."
      />

      {/* === 01 · Channels ================================================ */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="01" label="Channels" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-800/60 sm:grid-cols-3">
            {channels.map((c) => (
              <div
                key={c.email}
                className="flex flex-col bg-zinc-950/40 p-6 transition hover:bg-zinc-950/70 sm:p-8"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  {c.number}
                </span>
                <h3 className="mt-8 text-lg font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {c.body}
                </p>
                <a
                  href={`mailto:${c.email}`}
                  className="mt-6 font-mono text-sm text-silver hover:text-silver-bright"
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* === 02 · Direct =================================================== */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-10 sm:p-16">
            <SectionEyebrow number="02" label="Start the conversation" />
            <h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Send us a note.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
              A short description of what you have in mind, your timeline, and
              how to reach you. We&apos;ll get back to you within two business
              days.
            </p>
            <div className="mt-10">
              <Button href="mailto:hello@gaaia.co?subject=Project%20enquiry">
                Email GAAIA
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
