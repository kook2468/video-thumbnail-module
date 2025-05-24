import { BaseModal } from "../../../../shared/components/modal/BaseModal";
import { useModalStore } from "../../../../stores/modal.store";
import { PostModalHeader } from "./PostModalHeader";
import { PostModalContent } from "./PostModalContent";

export const PostModal = () => {
  const { postModalStep } = useModalStore();

  return (
    <BaseModal title={<PostModalHeader step={postModalStep} />} size="lg">
      <div className="space-y-4">
        <PostModalContent step={postModalStep} />
      </div>
    </BaseModal>
  );
};
