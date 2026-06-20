import { type ReactNode } from "react";

export type GlassVariant = "premium" | "neon" | "subtle";

export interface GlassPanelProps {
  children: ReactNode;
  variant?: GlassVariant;
  className?: string;
}

const styles: Record<GlassVariant, string> = {
  premium: "bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl",
  neon: "bg-black/40 backdrop-blur-lg border border-cyan-500/20 shadow-lg shadow-cyan-500/5",
  subtle: "bg-white/5 backdrop-blur-md border border-white/5",
};

export function GlassPanel({ children, variant = "premium", className = "" }: GlassPanelProps) {
  return (
    <div className={`rounded-2xl ${styles[variant]} ${className}`}>
      {children}
    </div>
  );
}
