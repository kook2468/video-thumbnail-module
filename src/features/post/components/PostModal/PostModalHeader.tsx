import React from "react";
import { useModalStore } from "../../../../stores/modal.store";
import { POST_MODAL_TITLE_MAP } from "../../constants/step";

export const PostModalHeader = React.memo(() => {
  const postModalStep = useModalStore((s) => s.postModalStep);
  const closePostModal = useModalStore((s) => s.closePostModal);

  return (
    <div className="flex justify-between items-center px-2">
      <h2 className="text-lg font-semibold">
        {POST_MODAL_TITLE_MAP[postModalStep]}
      </h2>
      <button
        onClick={closePostModal}
        className="text-gray-500 hover:text-black text-3xl"
        aria-label="모달 닫기"
      >
        ×
      </button>
    </div>
  );
});
