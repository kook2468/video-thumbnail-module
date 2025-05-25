import { PostDetailModal } from "./PostDetailModal";
import { PostList } from "./PostList";
import { OpenPostModalButton } from "./PostModal/OpenPostModalButton";

export const PostModule = () => {
  return (
    <div className="flex flex-col p-4 gap-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">포스트 목록</h1>
        <OpenPostModalButton />
      </div>
      <PostList />
      <PostDetailModal />
    </div>
  );
};
