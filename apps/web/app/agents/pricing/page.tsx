import type { Metadata } from "next";
import { Container } from "@gaaia/ui/container";
import { Button } from "@gaaia/ui/button";
import { PageHeader } from "@gaaia/ui/page-header";
import { SectionEyebrow } from "@gaaia/ui/section-eyebrow";
import { division } from "@/lib/divisions/agents";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Pricing for ${division.brand}: simple plans that scale with usage.`,
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        label="Pricing"
        prefix={division.short}
        title="Plans that scale with you."
        description="Every engagement is bespoke. The tiers below are a starting point, we tailor scope, support, and infrastructure to fit."
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionEyebrow number="01" label="Tiers" />
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {division.pricing.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition duration-300 ${
                  tier.featured
                    ? "border-silver/40 bg-silver/[0.04]"
                    : "border-zinc-800/70 bg-zinc-950/40 hover:border-silver/30"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-silver px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-black">
                    Most chosen
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{tier.tagline}</p>
                <p className="mt-8 font-display text-4xl tracking-tight text-white">
                  {tier.price}
                </p>
                <ul className="mt-8 flex-1 space-y-3 text-sm text-zinc-300">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-silver" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button
                    href="/contact"
                    variant={tier.featured ? "primary" : "secondary"}
                  >
                    Talk to us
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-10 sm:p-16">
            <SectionEyebrow number="02" label="Custom" />
            <h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Need something different?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
              On-prem, regulated, or unusual scale? We&apos;ll build a plan
              around your constraints.
            </p>
            <div className="mt-10">
              <Button href="/contact">Get a custom quote</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
