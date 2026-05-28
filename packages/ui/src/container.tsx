import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Centered, max-width page gutter used across every GAAIA surface. */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>
      {children}
    </div>
  );
}
