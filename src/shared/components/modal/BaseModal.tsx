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

export const BaseModal = ({ children, size = "md" }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
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

BaseModal.Header = ({ children }: { children: ReactNode }) => (
  <div className="border-b p-4">{children}</div>
);

BaseModal.Content = ({ children }: { children: ReactNode }) => <>{children}</>;
