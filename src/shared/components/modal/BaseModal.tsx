import clsx from "clsx";

type BaseModalProps = {
  title?: React.ReactNode;
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

export const BaseModal = ({
  title,
  children,
  onClose,
  size = "md",
}: BaseModalProps) => {
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
        {/* 헤더 */}
        {title && (
          <div className="mb-4 border-b border-gray-200">
            <div className="flex justify-between items-center p-4">
              {typeof title === "string" ? (
                <h2 className="text-lg font-semibold">{title}</h2>
              ) : (
                title
              )}
              {onClose && (
                <button onClick={onClose} className="text-xl">
                  ✖
                </button>
              )}
            </div>
          </div>
        )}

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
