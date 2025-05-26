import { usePostDetailStore } from "@/stores/postDetail.store";
import { usePosts } from "./usePosts";

export function usePostDetail() {
  const post = usePostDetailStore((s) => s.selectedPost);
  const set = usePostDetailStore((s) => s.setSelectedPost);
  const posts = usePosts().posts;

  const index = post ? posts.findIndex((p) => p.id === post.id) : -1;

  return {
    post,
    setPost: set,
    isPostSelected: post !== null,
    postIndex: index,
  };
}
