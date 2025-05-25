import { BaseModalContentLayout } from "../../../../../shared/components/layout/BaseModalContentLayout";
import { Button } from "../../../../../shared/components/ui/Button";
import { useModalStore } from "../../../../../stores/modal.store";
import { useThumbnailStore } from "../../../../../stores/thumbnail.store";
import { useToastStore } from "../../../../../stores/toast.store";
import { ThumbnailGrid } from "../../../../thumbnail/components/ThumbnailGrid/Seek/ThumbnailSeekGrid";
import { POST_THUMBNAIL_LIMIT } from "../../../../thumbnail/constants/limit";
import {
  ERROR_MESSAGES,
  NOTICE_MESSAGES,
} from "../../../../thumbnail/constants/message";
import { VideoPlayer } from "../../../../video/components/VideoPlayer";
import { useVideoPlayer } from "../../../../video/hooks/useVideoPlayer";
import { POST_MODAL_STEP } from "../../../constants/step";

export const ThumbnailStep = () => {
  const setPostModalStep = useModalStore((s) => s.setPostModalStep);
  const { videoRef, pause, getCurrentFrame } = useVideoPlayer();
  const { thumbnails, addThumbnail, removeThumbnail } = useThumbnailStore();
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

  return (
    <BaseModalContentLayout>
      <BaseModalContentLayout.Body>
        <div className="flex flex-col gap-4">
          <div>
            <h1>업로드 동영상</h1>
            <VideoPlayer ref={videoRef} />
          </div>
          <div className="mt-4">
            <h1>썸네일 캡쳐</h1>
            <p className="text-gray-600 mb-4">{NOTICE_MESSAGES.addThumbnail}</p>
            <ThumbnailGrid
              thumbnails={thumbnails}
              onCapture={handleCapture}
              onRemove={removeThumbnail}
              onSeek={handleSeek}
            />
          </div>
        </div>
      </BaseModalContentLayout.Body>
      <BaseModalContentLayout.Footer>
        <div className="flex justify-end gap-2">
          <Button
            variant="secondary"
            onClick={() => setPostModalStep(POST_MODAL_STEP.VIDEO)}
          >
            이전
          </Button>
          <Button
            variant="primary"
            onClick={() => setPostModalStep(POST_MODAL_STEP.FORM)}
          >
            완료
          </Button>
        </div>
      </BaseModalContentLayout.Footer>
    </BaseModalContentLayout>
  );
};
