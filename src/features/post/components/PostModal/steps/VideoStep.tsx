import React from "react";
import { ModalContent } from "../../../../../shared/components/modal/ModalContent";
import { Button } from "../../../../../shared/components/ui/Button";
import { VideoUploader } from "../../../../video/components/VideoUploader";
import { POST_MODAL_STEP } from "../../../constants/step";
import { useVideoStep } from "../../../hooks/useVideoStep";

export const VideoStep = React.memo(() => {
  const { setStep, video } = useVideoStep();

  return (
    <ModalContent>
      <ModalContent.Body>
        <VideoUploader />
      </ModalContent.Body>
      <ModalContent.Footer>
        <div className="flex justify-end gap-2">
          <Button
            variant="secondary"
            onClick={() => setStep(POST_MODAL_STEP.FORM)}
          >
            이전
          </Button>
          <Button
            variant="primary"
            onClick={() => setStep(POST_MODAL_STEP.THUMBNAIL)}
            disabled={!video}
          >
            다음
          </Button>
        </div>
      </ModalContent.Footer>
    </ModalContent>
  );
});
