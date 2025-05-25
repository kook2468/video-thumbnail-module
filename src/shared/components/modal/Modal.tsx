import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
  children: React.ReactNode;
  onClose?: () => void;
  size?: ModalSize;
};

type ModalSize = "sm" | "md" | "lg";

const sizeMap: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
};

export const Modal = ({ children, size = "md" }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-modal">
      <div
        className={clsx(
          "bg-white rounded-3xl w-[90%] shadow-xl relative",
          sizeMap[size]
        )}
      >
        {children}
      </div>
    </div>
  );
};

Modal.Header = ({ children }: { children: ReactNode }) => (
  <div className="border-b p-4">{children}</div>
);

Modal.Content = ({ children }: { children: ReactNode }) => <>{children}</>;
