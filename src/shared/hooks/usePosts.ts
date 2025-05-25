import { usePostsStore } from "../../stores/posts.store";

export function usePosts() {
  const posts = usePostsStore((s) => s.posts);
  const addPost = usePostsStore((s) => s.addPost);
  const deletePost = usePostsStore((s) => s.deletePost);

  return {
    posts,
    addPost,
    deletePost,
  };
}
