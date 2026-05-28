type DivisionCardProps = {
  index: number;
  name: string;
  domain: string;
  description: string;
  status?: "live" | "soon";
};

/** Card representing one division of the GAAIA subdomain ecosystem. */
export function DivisionCard({
  index,
  name,
  domain,
  description,
  status = "soon",
}: DivisionCardProps) {
  return (
    <div className="group relative bg-zinc-950/40 p-6 transition hover:bg-zinc-950/70 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              status === "live" ? "bg-silver" : "bg-zinc-600"
            }`}
          />
          {status === "live" ? "Live" : "Coming soon"}
        </span>
      </div>
      <h3 className="mt-8 text-lg font-semibold text-white">{name}</h3>
      <p className="mt-1 font-mono text-xs text-silver/80">{domain}</p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>
    </div>
  );
}
