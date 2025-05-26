import { usePostDraft } from "@/shared/hooks/usePostDraft";
import { usePostModal } from "@/shared/hooks/usePostModal";
import { useToast } from "@/shared/hooks/useToast";
import { POST_THUMBNAIL_LIMIT } from "../../thumbnail/constants/limit";
import { ERROR_MESSAGES } from "../../thumbnail/constants/message";
import { useVideoPlayer } from "../../video/hooks/useVideoPlayer";

export const useThumbnailStep = () => {
  const setStep = usePostModal().setStep;
  const { videoRef, pause, getCurrentFrame } = useVideoPlayer();
  const { thumbnails, addThumbnail, removeThumbnail } = usePostDraft();
  const showToast = useToast().showToast;

  const handleCapture = () => {
    if (thumbnails.length >= POST_THUMBNAIL_LIMIT) return;

    const frame = getCurrentFrame();
    if (!frame) return;

    /* 중복 time이면 추가하지 않음 */
    const roundedTime = Number(frame.time.toFixed(2)); //소수점 둘째자리 반올림으로 안정성 확보
    const isDuplicate = thumbnails.some(
      (t) => Number(t.time.toFixed(2)) === roundedTime
    );

    if (isDuplicate) {
      showToast.warning(ERROR_MESSAGES.duplicateTime);
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
    setStep,
  };
};
