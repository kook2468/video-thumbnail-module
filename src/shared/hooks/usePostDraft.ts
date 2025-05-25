import {
  POST_CONTENT_MAX_LENGTH,
  POST_CONTENT_MIN_LENGTH,
} from "../../features/post/constants/limit";
import { usePostDraftStore } from "../../stores/postDraft.store";

export function usePostDraft() {
  const content = usePostDraftStore((s) => s.content);
  const thumbnails = usePostDraftStore((s) => s.thumbnails);
  const video = usePostDraftStore((s) => s.video);

  const setContent = usePostDraftStore((s) => s.setContent);
  const addThumbnail = usePostDraftStore((s) => s.addThumbnail);
  const removeThumbnail = usePostDraftStore((s) => s.removeThumbnail);
  const setVideo = usePostDraftStore((s) => s.setVideo);
  const clearVideo = usePostDraftStore((s) => s.clearVideo);
  const reset = usePostDraftStore((s) => s.reset);

  const contentLength = content.trim().length;
  const isContentValid = contentLength >= POST_CONTENT_MIN_LENGTH;
  const isContentTooLong = contentLength > POST_CONTENT_MAX_LENGTH;
  const hasThumbnails = thumbnails.length > 0;
  const hasVideo = video !== null;
  const isContentAcceptable = isContentValid && !isContentTooLong;

  return {
    /* 상태 */
    content,
    thumbnails,
    video,

    /* setter */
    setContent,
    addThumbnail,
    removeThumbnail,
    setVideo,
    clearVideo,
    reset,

    /* 상태 Util */
    contentLength,
    isContentValid,
    isContentTooLong,
    isContentAcceptable,
    hasThumbnails,
    hasVideo,
  };
}
