import type { Metadata } from "next";
import { Container } from "@gaaia/ui/container";
import { Button } from "@gaaia/ui/button";
import { PageHeader } from "@gaaia/ui/page-header";
import { SectionEyebrow } from "@gaaia/ui/section-eyebrow";
import { division } from "@/lib/divisions/api";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${division.brand} for projects, partnerships, and questions.`,
};

const EMAIL = "gaaia.team@gmail.com";
const PHONE_DISPLAY = "+1 (754) 281-9617";
const PHONE_TEL = "+17542819617";

const channels = [
  {
    number: "01",
    title: "Email",
    body: "Scope a pilot, talk through a use case, or get a quote.",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    number: "02",
    title: "Phone",
    body: "Reach the team directly during business hours.",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        prefix={division.short}
        title="Let's build something intelligent."
        description={`Tell us what you have in mind. ${division.brand} reads every message and gets back within two business days.`}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="01" label="Channels" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.value}
                href={c.href}
                className="group flex flex-col rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-7 transition duration-300 hover:border-silver/40 hover:bg-zinc-950/70 sm:p-8"
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
                <span className="mt-8 flex items-center justify-between gap-2 border-t border-zinc-800/70 pt-4 font-mono text-sm text-silver transition-colors group-hover:text-silver-bright">
                  {c.value}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-10 sm:p-16">
            <SectionEyebrow number="02" label="Start the conversation" />
            <h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Send us a note.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
              A short description of what you have in mind and how to reach
              you. We&apos;ll get back within two business days.
            </p>
            <div className="mt-10">
              <Button
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  division.brand + " enquiry",
                )}`}
              >
                Email {division.brand}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
