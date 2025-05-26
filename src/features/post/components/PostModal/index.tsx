import { Modal } from "@/shared/components/modal/Modal";
import { PostModalHeader } from "./PostModalHeader";
import { PostModalContent } from "./PostModalContent";

export const PostModal = () => {
  //컴파운드 컴포넌트 패턴!
  return (
    <Modal size="lg">
      <Modal.Header>
        <PostModalHeader />
      </Modal.Header>

      <Modal.Content>
        <PostModalContent />
      </Modal.Content>
    </Modal>
  );
};
