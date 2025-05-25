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

export const BaseModal = ({ children, onClose, size = "md" }: Props) => {
  console.log("BaseModal props:", { children, onClose, size });
  // const renderFooter = () => {
  //   if (footer) return footer;

  //   return (
  //     <div className="flex justify-end gap-2">
  //       <Button variant="secondary" onClick={onClose}>
  //         취소
  //       </Button>
  //       <Button onClick={onConfirm}>확인</Button>
  //     </div>
  //   );
  // };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        className={clsx(
          "bg-white rounded-3xl w-[90%] shadow-xl relative",
          sizeMap[size]
        )}
      >
        {children}
        {/* 본문 */}
        {/* <div className="mb-4 p-4">{children}</div> */}

        {/* 푸터 */}
        {/* <div className="mt-6 p-4 border-t border-gray-200">
          {renderFooter()}
        </div> */}
      </div>
    </div>
  );
};

BaseModal.Header = ({ children }: { children: ReactNode }) => (
  <div className="border-b p-4">{children}</div>
);

BaseModal.Content = ({ children }: { children: ReactNode }) => <>{children}</>;
