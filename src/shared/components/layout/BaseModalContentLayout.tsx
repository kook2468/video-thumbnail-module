import React from "react";

export const BaseModalContentLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="flex flex-col gap-4">{children}</div>;

BaseModalContentLayout.Body = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4">{children}</div>
);

BaseModalContentLayout.Footer = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="p-4 border-t border-gray-200">{children}</div>;
