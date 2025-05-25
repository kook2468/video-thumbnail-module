type ToastProps = {
  id: string;
  message: string;
  type?: "default" | "success" | "warning" | "danger";
  onClose: (id: string) => void;
};

const typeStyles = {
  default: "bg-gray-800 text-white",
  success: "bg-brand text-white",
  warning: "bg-yellow-400 text-black",
  danger: "bg-red-500 text-white",
};

export const Toast = ({
  id,
  message,
  type = "default",
  onClose,
}: ToastProps) => {
  return (
    <div
      className={`rounded px-4 py-3 shadow-lg text-sm animate-slide-in transition-all ${typeStyles[type]} flex justify-between items-start gap-2`}
    >
      <span>{message}</span>
      <button
        onClick={() => onClose(id)}
        className="text-xs ml-2 opacity-60 hover:opacity-100"
        aria-label="닫기"
      >
        ✕
      </button>
    </div>
  );
};
