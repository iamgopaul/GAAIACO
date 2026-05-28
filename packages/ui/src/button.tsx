import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const styles = {
  base: "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-silver focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  primary: "bg-silver text-black hover:bg-silver-bright",
  secondary:
    "border border-zinc-700 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900",
};

/** Pill-shaped call-to-action rendered as an anchor. */
export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a className={`${styles.base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
