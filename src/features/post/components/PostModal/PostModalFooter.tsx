import { Button } from "../../../../shared/components/ui/Button";
import { POST_MODAL_STEP } from "../../constants";
import type { PostModalFooterProps } from "../../types";

export const PostModalFooter = ({
  step,
  onStepChange,
  onSubmit,
}: PostModalFooterProps) => {
  if (step === POST_MODAL_STEP.FORM) {
    return (
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button variant="secondary">Image</Button>
          <Button
            variant="secondary"
            onClick={() => onStepChange(POST_MODAL_STEP.VIDEO)}
          >
            Video
          </Button>
        </div>
        <Button variant="primary" onClick={onSubmit}>
          등록
        </Button>
      </div>
    );
  }

  if (step === POST_MODAL_STEP.VIDEO) {
    return (
      <div className="flex justify-end gap-2">
        <Button
          variant="secondary"
          onClick={() => onStepChange(POST_MODAL_STEP.FORM)}
        >
          이전
        </Button>
        <Button
          variant="primary"
          onClick={() => onStepChange(POST_MODAL_STEP.THUMBNAIL)}
        >
          다음
        </Button>
      </div>
    );
  }

  if (step === POST_MODAL_STEP.THUMBNAIL) {
    return (
      <div className="flex justify-end gap-2">
        <Button
          variant="secondary"
          onClick={() => onStepChange(POST_MODAL_STEP.VIDEO)}
        >
          이전
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          완료
        </Button>
      </div>
    );
  }

  return null;
};
