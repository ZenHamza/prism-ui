import { type InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => (
    <div>
      {label && <label className="block text-sm text-gray-400 mb-1">{label}</label>}
      <input
        ref={ref}
        className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors ${
          error ? "border-red-500/50" : "border-white/10"
        } ${className}`}
        {...props}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  )
);
Input.displayName = "Input";
