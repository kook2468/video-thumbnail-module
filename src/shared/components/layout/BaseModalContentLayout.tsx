type ModalContentProps = {
  content: React.ReactNode;
  footer: React.ReactNode;
};

export const BaseModalContentLayout = ({
  content,
  footer,
}: ModalContentProps) => {
  return (
    <>
      <div className="p-4">{content}</div>
      <div className="p-4 border-t border-gray-200">{footer}</div>
    </>
  );
};
