import { useState, useCallback, createContext, useContext, type ReactNode } from "react";

export type ToastType = "success" | "error" | "info";

export interface ToastProps {
  message: string;
  type?: ToastType;
}

interface ToastItem extends ToastProps {
  id: string;
}

type ToastFn = (message: string, type?: ToastType) => void;

const ToastCtx = createContext<ToastFn>(() => {});

const typeStyles: Record<ToastType, string> = {
  success: "border-green-500/30 text-green-400",
  error: "border-red-500/30 text-red-400",
  info: "border-cyan-500/30 text-cyan-400",
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const addToast = useCallback((message: string, type: ToastType = "info") => {
    const id = crypto.randomUUID();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  }, []);
  return (
    <ToastCtx.Provider value={addToast}>
      {children}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map(t => (
          <div key={t.id} className={`px-4 py-2 rounded-lg text-sm backdrop-blur-md border bg-black/60 ${typeStyles[t.type ?? "info"]}`}>
            {t.message}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

export function useToast(): ToastFn {
  return useContext(ToastCtx);
}

export const toast: ToastFn = () => {}; // Placeholder — use useToast in components
