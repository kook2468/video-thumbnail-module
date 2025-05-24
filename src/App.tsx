import { PostModal } from "./features/post/components/PostModal";
import { Button } from "./shared/components/ui/Button";
import { Card } from "./shared/components/ui/Card";
import { useModalStore } from "./stores/modal.store";

function App() {
  const { isPostModalOpen, openPostModal } = useModalStore();

  return (
    <>
      <Card title="폰트 관리">
        <p className="font-light">Light</p>
        <p className="">Regular (기본)</p>
        <p className="font-bold">Bold</p>
      </Card>

      <Card title="테스트">
        <Button onClick={openPostModal}>포스트 쓰기</Button>
        {isPostModalOpen && <PostModal />}
      </Card>
    </>
  );
}

export default App;
