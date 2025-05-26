import React from "react";
import { ModalContent } from "@/shared/components/modal/ModalContent";
import { Button } from "@/shared/components/ui/Button";
import { ThumbnailSeekGrid } from "@/features/thumbnail/components/ThumbnailGrid/ThumbnailSeekGrid";
import { NOTICE_MESSAGES } from "@/features/thumbnail/constants/message";
import { POST_MODAL_STEP } from "../../../constants/step";
import { useThumbnailStep } from "../../../hooks/useThumbnailStep";
import { VideoPlayer } from "@/features/video/components/VideoPlayer";

export const ThumbnailStep = React.memo(() => {
  const {
    thumbnails,
    videoRef,
    handleCapture,
    handleSeek,
    removeThumbnail,
    setStep,
  } = useThumbnailStep();

  return (
    <ModalContent data-testid="form-step">
      <ModalContent.Body>
        <div className="flex flex-col gap-4">
          <div>
            <h1>업로드 동영상</h1>
            <VideoPlayer ref={videoRef} />
          </div>
          <div className="mt-4">
            <h1>썸네일 캡쳐</h1>
            <p className="text-gray-600 mb-4">{NOTICE_MESSAGES.addThumbnail}</p>
            <ThumbnailSeekGrid
              thumbnails={thumbnails}
              onCapture={handleCapture}
              onRemove={removeThumbnail}
              onSeek={handleSeek}
            />
          </div>
        </div>
      </ModalContent.Body>
      <ModalContent.Footer>
        <div className="flex justify-end gap-2">
          <Button
            variant="secondary"
            onClick={() => setStep(POST_MODAL_STEP.VIDEO)}
          >
            이전
          </Button>
          <Button
            variant="primary"
            onClick={() => setStep(POST_MODAL_STEP.FORM)}
          >
            완료
          </Button>
        </div>
      </ModalContent.Footer>
    </ModalContent>
  );
});
