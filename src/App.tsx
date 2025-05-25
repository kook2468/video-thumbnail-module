import { OpenPostModalButton } from "./features/post/components/PostModal/OpenPostModalButton";
import { ToastContainer } from "./shared/components/feedback/ToastContainer";
import { Card } from "./shared/components/ui/Card";

function App() {
  return (
    <>
      {/* MainLayout으로 변경 예정 */}
      <h1 className="p-6 text-3xl">동영상 썸네일 모듈</h1>
      <div>
        <Card title="폰트 관리">
          <p className="font-light">Light</p>
          <p className="">Regular (기본)</p>
          <p className="font-bold">Bold</p>
        </Card>

        <Card title="포스트 작성">
          <OpenPostModalButton />
        </Card>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
