import React from "react";

export const ModalContent = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-4">{children}</div>
);

ModalContent.Body = ({ children }: { children: React.ReactNode }) => (
  <div className="px-6 py-4">{children}</div>
);

ModalContent.Footer = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 border-t border-gray-200">{children}</div>
);
