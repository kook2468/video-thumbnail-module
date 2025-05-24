import { useState } from "react";
import {
  POST_MODAL_PLACEHOLDER_MAP,
  POST_MODAL_STEP,
} from "../../../constants";
import { Button } from "../../../../../shared/components/ui/Button";
import { useModalStore } from "../../../../../stores/modal.store";
import { BaseModalContentLayout } from "../../../../../shared/components/layout/BaseModalContentLayout";

export function FormStep() {
  const { setPostModalStep, closePostModal } = useModalStore();
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    // TODO: 실제 제출 로직 구현
    console.log("포스트 제출:", { content });
    closePostModal();
  };

  const renderContent = () => {
    return (
      <textarea
        className="w-full border p-4 rounded-2xl"
        rows={5}
        placeholder={POST_MODAL_PLACEHOLDER_MAP[POST_MODAL_STEP.FORM]}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    );
  };

  const renderFooter = () => {
    return (
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
        <Button variant="primary" onClick={handleSubmit}>
          등록
        </Button>
      </div>
    );
  };

  return (
    <BaseModalContentLayout content={renderContent()} footer={renderFooter()} />
  );
}
