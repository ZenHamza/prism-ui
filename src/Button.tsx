import { type ReactNode, type ButtonHTMLAttributes } from "react";

export type ButtonVariant = "cyan" | "amber" | "purple" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  loading?: boolean;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/30 hover:bg-purple-500/20",
  ghost: "bg-transparent text-gray-400 border-transparent hover:text-gray-200 hover:bg-white/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-8 py-3.5 text-base gap-2.5",
};

export function Button({
  variant = "cyan", size = "md", children, loading = false,
  disabled = false, className = "", href, ...props
}: ButtonProps) {
  const cls = [
    "relative inline-flex items-center justify-center font-medium rounded-xl border transition-all duration-200 backdrop-blur-sm",
    "disabled:opacity-40 disabled:cursor-not-allowed",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400",
    variantStyles[variant], sizeStyles[size], className,
  ].filter(Boolean).join(" ");
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <button className={cls} disabled={disabled || loading} {...props}>{loading && <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />}{children}</button>;
}
