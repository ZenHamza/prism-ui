import { type ReactNode } from "react";

export type BadgeVariant = "cyan" | "amber" | "purple" | "gray";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const styles: Record<BadgeVariant, string> = {
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  gray: "bg-white/5 text-gray-400 border-white/10",
};

export function Badge({ children, variant = "gray", className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex px-2 py-0.5 text-xs rounded-full border font-mono ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}
