import { PostModule } from "./features/post/components/PostModule/PostModule";
import { Header } from "./shared/components/layout/Header";
import { ToastContainer } from "./shared/components/toast/ToastContainer";

function App() {
  return (
    <>
      <Header />
      <PostModule />
      <ToastContainer />
    </>
  );
}

export default App;
