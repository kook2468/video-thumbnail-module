import { useToast } from "../../hooks/useToast";
import { Toast } from "./Toast";

export const ToastContainer = () => {
  const { toasts, hideToast } = useToast();

  return (
    <div className="fixed top-4 right-4 z-toast space-y-2 max-w-sm w-full">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      ))}
    </div>
  );
};
