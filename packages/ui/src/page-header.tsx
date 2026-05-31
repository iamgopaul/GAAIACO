import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";

type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
  prefix?: string;
};

export function PageHeader({
  label,
  title,
  description,
  prefix = "GAAIA",
}: PageHeaderProps) {
  return (
    <section id="hero" className="relative">
      <Container className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <SectionEyebrow number={prefix} label={label} />
        <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl sm:leading-[1.05]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
