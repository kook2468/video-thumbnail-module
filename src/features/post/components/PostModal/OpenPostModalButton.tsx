import { PostModal } from ".";
import { Button } from "../../../../shared/components/ui/Button";
import { usePostDraft } from "../../../../shared/hooks/usePostDraft";
import { usePostModal } from "../../../../shared/hooks/usePostModal";

export const OpenPostModalButton = () => {
  const { isOpen, open } = usePostModal();
  const reset = usePostDraft().reset;

  const handleClick = () => {
    reset();
    open();
  };

  return (
    <>
      <Button onClick={handleClick}>포스트 쓰기</Button>
      {isOpen && <PostModal />}
    </>
  );
};
