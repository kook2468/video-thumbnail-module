import { clsx } from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
};

type ButtonVariant = "primary" | "secondary" | "danger";

const base = "px-4 py-2 rounded-3xl text-sm transition";

const variantMap: Record<ButtonVariant, string> = {
  primary: "bg-gray-800 text-white hover:bg-brand",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

export const Button = ({
  children,
  onClick,
  className,
  variant = "primary",
  disabled = false,
}: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      base,
      variantMap[variant],
      disabled && "opacity-50 cursor-not-allowed pointer-events-none",
      className
    )}
  >
    {children}
  </button>
);
