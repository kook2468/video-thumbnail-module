import { useToastStore, type ToastType } from "../../stores/toast.store";

export function useToast() {
  const baseShowToast = useToastStore((s) => s.showToast);
  const remove = useToastStore((s) => s.removeToast);
  const toasts = useToastStore((s) => s.toasts);

  const showToast = ((message: string, type: ToastType = "default") => {
    baseShowToast(message, type);
  }) as {
    (message: string, type?: ToastType): void;
    success: (message: string) => void;
    warning: (message: string) => void;
    danger: (message: string) => void;
    default: (message: string) => void;
  };

  showToast.success = (msg) => baseShowToast(msg, "success");
  showToast.warning = (msg) => baseShowToast(msg, "warning");
  showToast.danger = (msg) => baseShowToast(msg, "danger");
  showToast.default = (msg) => baseShowToast(msg, "default");

  return {
    showToast,
    hideToast: remove,
    toasts,
  };
}
