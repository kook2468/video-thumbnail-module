import { BaseModalContentLayout } from "../../../../../shared/components/layout/BaseModalContentLayout";
import { Button } from "../../../../../shared/components/ui/Button";
import { useModalStore } from "../../../../../stores/modal.store";
import { VideoPlayer } from "../../../../video/components/VideoPlayer";
import { POST_MODAL_STEP } from "../../../constants";

export const ThumbnailStep = () => {
  const { setPostModalStep } = useModalStore();
  const renderContent = () => {
    return (
      <div>
        <VideoPlayer />
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-video bg-gray-100 rounded-2xl"></div>
          <div className="aspect-video bg-gray-100 rounded-2xl"></div>
          <div className="aspect-video bg-gray-100 rounded-2xl"></div>
          <div className="aspect-video bg-gray-100 rounded-2xl"></div>
        </div>
      </div>
    );
  };

  const renderFooter = () => {
    return (
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
    );
  };

  return (
    <BaseModalContentLayout content={renderContent()} footer={renderFooter()} />
  );
};
