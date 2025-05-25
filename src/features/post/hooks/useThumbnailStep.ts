import { useModalStore } from "../../../stores/modal.store";
import { usePostDraftStore } from "../../../stores/postDraft.store";
import { useToastStore } from "../../../stores/toast.store";
import { POST_THUMBNAIL_LIMIT } from "../../thumbnail/constants/limit";
import { ERROR_MESSAGES } from "../../thumbnail/constants/message";
import { useVideoPlayer } from "../../video/hooks/useVideoPlayer";

export const useThumbnailStep = () => {
  const setPostModalStep = useModalStore((s) => s.setPostModalStep);
  const { videoRef, pause, getCurrentFrame } = useVideoPlayer();
  const { thumbnails, addThumbnail, removeThumbnail } = usePostDraftStore();
  const showToast = useToastStore((s) => s.showToast);

  const handleCapture = () => {
    if (thumbnails.length >= POST_THUMBNAIL_LIMIT) return;

    const frame = getCurrentFrame();
    if (!frame) return;

    console.log("frame?", frame);

    /* 중복 time이면 추가하지 않음 */
    const roundedTime = Number(frame.time.toFixed(2)); //소수점 둘째자리 반올림으로 안정성 확보
    const isDuplicate = thumbnails.some(
      (t) => Number(t.time.toFixed(2)) === roundedTime
    );

    if (isDuplicate) {
      showToast(ERROR_MESSAGES.duplicateTime);
      return;
    }

    pause();
    addThumbnail(frame);
  };

  const handleSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  return {
    thumbnails,
    videoRef,
    handleCapture,
    handleSeek,
    removeThumbnail,
    setPostModalStep,
  };
};
