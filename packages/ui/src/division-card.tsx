type DivisionCardProps = {
  index: number;
  name: string;
  domain: string;
  description: string;
  status?: "live" | "soon";
};

export function DivisionCard({
  index,
  name,
  domain,
  description,
  status = "soon",
}: DivisionCardProps) {
  return (
    <a
      href={`https://${domain}`}
      className="group relative block overflow-hidden rounded-xl border border-zinc-800/70 bg-zinc-950/40 p-6 transition duration-300 hover:border-silver/40 hover:bg-silver/[0.03] sm:p-7"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          /{String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              status === "live"
                ? "bg-silver shadow-[0_0_8px_rgba(200,204,209,0.7)]"
                : "bg-zinc-600"
            }`}
          />
          {status === "live" ? "Live" : "Soon"}
        </span>
      </div>

      <h3 className="mt-7 flex items-center gap-2 text-lg font-semibold text-white">
        {name}
        <span className="translate-x-[-4px] text-silver opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          →
        </span>
      </h3>
      <p className="mt-1 font-mono text-xs text-silver/80">{domain}</p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>
    </a>
  );
}
