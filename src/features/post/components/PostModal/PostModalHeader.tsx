import React from "react";
import { POST_MODAL_TITLE_MAP } from "../../constants/step";
import { usePostModal } from "@/shared/hooks/usePostModal";

export const PostModalHeader = React.memo(() => {
  const { step, close } = usePostModal();

  return (
    <div className="flex justify-between items-center px-2">
      <h2 className="text-lg font-semibold">{POST_MODAL_TITLE_MAP[step]}</h2>
      <button
        onClick={close}
        className="text-gray-500 hover:text-black text-3xl"
        aria-label="모달 닫기"
      >
        ×
      </button>
    </div>
  );
});
