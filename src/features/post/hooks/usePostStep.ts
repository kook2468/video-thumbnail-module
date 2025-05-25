import { useModalStore } from "../../../stores/modal.store";
import { useToastStore } from "../../../stores/toast.store";
import { usePostsStore } from "../../../stores/posts.store";
import type { Post } from "../types";
import { usePostDraftStore } from "../../../stores/postDraft.store";

export const usePostStep = () => {
  const { setPostModalStep, closePostModal } = useModalStore();
  const showToast = useToastStore((s) => s.showToast);
  const { content, setContent, thumbnails, video, reset } = usePostDraftStore();
  const addPost = usePostsStore((s) => s.addPost);

  const handleSubmit = () => {
    if (content.trim().length < 10) {
      showToast("포스트는 최소 10자 이상이어야 합니다.", "default");
      return;
    }

    const newPost: Post = {
      id: Date.now().toString(),
      content: content.trim(),
      ...(video && { video }),
      ...(thumbnails.length > 0 && { thumbnails }),
    };

    console.log("포스트 제출:", newPost);
    addPost(newPost);
    reset();
    closePostModal();
  };

  return { content, setContent, handleSubmit, setPostModalStep, thumbnails };
};
