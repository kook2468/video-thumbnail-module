import React from "react";
import { BaseModalContentLayout } from "../../../../../shared/components/layout/BaseModalContentLayout";
import { Button } from "../../../../../shared/components/ui/Button";
import { useModalStore } from "../../../../../stores/modal.store";
import { useVideoStore } from "../../../../../stores/video.store";
import { VideoUploader } from "../../../../video/components/VideoUploader";
import { POST_MODAL_STEP } from "../../../constants/step";

export const VideoStep = React.memo(() => {
  const setPostModalStep = useModalStore((s) => s.setPostModalStep);
  const file = useVideoStore((s) => s.file);

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
            disabled={!file}
          >
            다음
          </Button>
        </div>
      </BaseModalContentLayout.Footer>
    </BaseModalContentLayout>
  );
});
