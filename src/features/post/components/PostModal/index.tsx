import { BaseModal } from "../../../../shared/components/modal/BaseModal";
import { PostModalHeader } from "./PostModalHeader";
import { PostModalContent } from "./PostModalContent";

export const PostModal = () => {
  //컴파운드 컴포넌트 패턴!
  return (
    <BaseModal size="lg">
      <BaseModal.Header>
        <PostModalHeader />
      </BaseModal.Header>

      <BaseModal.Content>
        <PostModalContent />
      </BaseModal.Content>
    </BaseModal>
  );
};
