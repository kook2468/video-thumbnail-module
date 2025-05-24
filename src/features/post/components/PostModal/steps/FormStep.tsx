import React, { useState } from "react";
import { Button } from "../../../../../shared/components/ui/Button";
import { useModalStore } from "../../../../../stores/modal.store";
import { BaseModalContentLayout } from "../../../../../shared/components/layout/BaseModalContentLayout";
import { POST_MODAL_STEP } from "../../../constants/step";

export const FormStep = React.memo(() => {
  console.log("🔥 FormStep 렌더링");

  const setPostModalStep = useModalStore((s) => s.setPostModalStep);
  const closePostModal = useModalStore((s) => s.closePostModal);
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    // TODO: 실제 제출 로직 구현
    console.log("포스트 제출:", { content });
    closePostModal();
  };

  return (
    <BaseModalContentLayout>
      <BaseModalContentLayout.Body>
        <textarea
          className="w-full border p-4 rounded-2xl"
          rows={5}
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </BaseModalContentLayout.Body>
      <BaseModalContentLayout.Footer>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="secondary">Image</Button>
            <Button
              variant="secondary"
              onClick={() => setPostModalStep(POST_MODAL_STEP.VIDEO)}
            >
              Video
            </Button>
          </div>
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!content.trim()}
          >
            등록
          </Button>
        </div>
      </BaseModalContentLayout.Footer>
    </BaseModalContentLayout>
  );
});
