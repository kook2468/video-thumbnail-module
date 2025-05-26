import type { Post } from "../types";
import { usePostModal } from "@/shared/hooks/usePostModal";
import { useToast } from "@/shared/hooks/useToast";
import { ERROR_MESSAGES, SUCCESS_MESSAGE } from "../constants/message";
import { usePostDraft } from "@/shared/hooks/usePostDraft";
import { usePosts } from "@/shared/hooks/usePosts";

export const usePostStep = () => {
  const { setStep, close } = usePostModal();
  const showToast = useToast().showToast;
  const {
    isContentValid,
    isContentTooLong,
    setContent,
    content,
    thumbnails,
    video,
    reset,
  } = usePostDraft();
  const addPost = usePosts().addPost;

  const handleSubmit = () => {
    /* 글자 수 체크 */
    if (!isContentValid) {
      showToast.warning(ERROR_MESSAGES.contentMin);
      return;
    } else if (isContentTooLong) {
      showToast.warning(ERROR_MESSAGES.contentMax);
      return;
    }

    const newPost: Post = {
      id: Date.now().toString(),
      content: content.trim(),
      ...(video && { video }),
      ...(thumbnails.length > 0 && { thumbnails }),
    };

    addPost(newPost);
    showToast.success(SUCCESS_MESSAGE.postInsert);
    reset();
    close();
  };

  return { content, setContent, handleSubmit, setStep, thumbnails };
};
