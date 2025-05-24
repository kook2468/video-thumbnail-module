import { useState } from "react";
import { BaseModal } from "@/shared/components/modal/BaseModal";
import { useModalStore } from "@/stores/modal.store";
import { POST_MODAL_STEP } from "../constants";
import { PostModalHeader } from "./PostModalHeader";
import { PostModalContent } from "./PostModalContent";
import { PostModalFooter } from "./PostModalFooter";

export const PostModal = () => {
  const { postModalStep, setPostModalStep, closePostModal } = useModalStore();
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    // TODO: 실제 제출 로직 구현
    console.log("포스트 제출:", { content, step: postModalStep });
    closePostModal();
  };

  const handleConfirm = () => {
    if (postModalStep === POST_MODAL_STEP.FORM) {
      handleSubmit();
    }
  };

  return (
    <BaseModal
      title={<PostModalHeader step={postModalStep} />}
      onClose={closePostModal}
      onConfirm={handleConfirm}
      footer={
        <PostModalFooter
          step={postModalStep}
          onStepChange={setPostModalStep}
          onSubmit={handleSubmit}
        />
      }
      size="lg"
    >
      <div className="space-y-4">
        <PostModalContent
          step={postModalStep}
          content={content}
          onContentChange={setContent}
        />
      </div>
    </BaseModal>
  );
};
