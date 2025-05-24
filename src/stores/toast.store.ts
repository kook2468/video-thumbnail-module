import { create } from "zustand";

export type ToastType = "default" | "success" | "warning" | "danger";

interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastStore {
  toasts: ToastItem[];
  showToast: (message: string, type?: ToastType) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  showToast: (message, type = "default") => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => {
      const next = [...state.toasts, { id, message, type }];
      return {
        toasts: next.slice(-5), // 최대 5개 유지
      };
    });
    // 3초 후 제거
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, 3000);
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));
