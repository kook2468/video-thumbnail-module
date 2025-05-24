import { OpenPostModalButton } from "./features/post/components/PostModal/OpenPostModalButton";
import { ToastContainer } from "./shared/components/feedback/ToastContainer";
import { Card } from "./shared/components/ui/Card";

function App() {
  return (
    <>
      {/* MainLayout으로 변경 예정 */}
      <div>
        <Card title="폰트 관리">
          <p className="font-light">Light</p>
          <p className="">Regular (기본)</p>
          <p className="font-bold">Bold</p>
        </Card>

        <Card title="테스트">
          <OpenPostModalButton />
        </Card>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
