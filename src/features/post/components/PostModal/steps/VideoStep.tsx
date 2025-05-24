import { BaseModalContentLayout } from "../../../../../shared/components/layout/BaseModalContentLayout";
import { Button } from "../../../../../shared/components/ui/Button";
import { useModalStore } from "../../../../../stores/modal.store";
import { useVideoStore } from "../../../../../stores/video.store";
import { VideoUploader } from "../../../../video/components/VideoUploader";
import { POST_MODAL_STEP } from "../../../constants/step";

export const VideoStep = () => {
  const { setPostModalStep } = useModalStore();
  const { file } = useVideoStore();

  const renderFooter = () => {
    return (
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
    );
  };
  return (
    <BaseModalContentLayout
      content={<VideoUploader />}
      footer={renderFooter()}
    />
  );
};
