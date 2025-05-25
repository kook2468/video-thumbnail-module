import React from "react";
import { BaseModalContentLayout } from "../../../../../shared/components/layout/BaseModalContentLayout";
import { Button } from "../../../../../shared/components/ui/Button";
import { VideoUploader } from "../../../../video/components/VideoUploader";
import { POST_MODAL_STEP } from "../../../constants/step";
import { useVideoStep } from "../../../hooks/useVideoStep";

export const VideoStep = React.memo(() => {
  const { setPostModalStep, video } = useVideoStep();

  return (
    <BaseModalContentLayout>
      <BaseModalContentLayout.Body>
        <VideoUploader />
      </BaseModalContentLayout.Body>
      <BaseModalContentLayout.Footer>
        <div className="flex justify-end gap-2">
          <Button
            variant="secondary"
            onClick={() => setPostModalStep(POST_MODAL_STEP.FORM)}
          >
            이전
          </Button>
          <Button
            variant="primary"
            onClick={() => setPostModalStep(POST_MODAL_STEP.THUMBNAIL)}
            disabled={!video}
          >
            다음
          </Button>
        </div>
      </BaseModalContentLayout.Footer>
    </BaseModalContentLayout>
  );
});
