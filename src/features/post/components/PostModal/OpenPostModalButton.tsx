import { PostModal } from ".";
import { Button } from "../../../../shared/components/ui/Button";
import { useModalStore } from "../../../../stores/modal.store";

export const OpenPostModalButton = () => {
  const isPostModalOpen = useModalStore((s) => s.isPostModalOpen);
  const openPostModal = useModalStore((s) => s.openPostModal);
  return (
    <>
      <Button onClick={openPostModal}>포스트 쓰기</Button>
      {isPostModalOpen && <PostModal />}
    </>
  );
};
