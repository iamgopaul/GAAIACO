type SectionEyebrowProps = {
  number: string;
  label: string;
  className?: string;
};

export function SectionEyebrow({
  number,
  label,
  className = "",
}: SectionEyebrowProps) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500 ${className}`}
    >
      <span className="text-silver">{number}</span>
      <span className="h-px w-10 bg-zinc-800" />
      <span>{label}</span>
    </div>
  );
}
