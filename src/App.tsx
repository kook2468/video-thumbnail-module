import { PostDetailModal } from "./features/post/components/PostDetailModal";
import { PostList } from "./features/post/components/PostList";
import { OpenPostModalButton } from "./features/post/components/PostModal/OpenPostModalButton";
import { ToastContainer } from "./shared/components/feedback/ToastContainer";

function App() {
  return (
    <>
      {/* MainLayout으로 변경 예정 */}
      <div className="flex gap-2 items-center px-4 py-2 bg-brand text-white mb-2">
        <h1 className="text-mg">동영상 썸네일 모듈</h1>
        <p className="text-sm">created by 최다경</p>
      </div>
      <div className="flex flex-col p-4 gap-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">포스트 목록</h1>
          <OpenPostModalButton />
        </div>
        <PostList />
        <PostDetailModal />
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
