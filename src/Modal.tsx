import { useEffect, type ReactNode } from "react";
import { GlassPanel } from "./GlassPanel";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function Modal({ open, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <GlassPanel variant="premium" className="w-full max-w-md p-6">
        {title && <h2 className="text-lg font-semibold text-gray-100 mb-4">{title}</h2>}
        {children}
      </GlassPanel>
    </div>
  );
}
