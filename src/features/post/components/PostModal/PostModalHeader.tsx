import React from "react";
import { useModalStore } from "../../../../stores/modal.store";
import { POST_MODAL_TITLE_MAP } from "../../constants/step";

export const PostModalHeader = React.memo(() => {
  const postModalStep = useModalStore((s) => s.postModalStep);

  return (
    <h2 className="text-lg font-semibold">
      {POST_MODAL_TITLE_MAP[postModalStep]}
    </h2>
  );
});
