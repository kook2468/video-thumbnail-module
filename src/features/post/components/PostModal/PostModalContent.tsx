import type { PostModalStep } from "../../types";
import { VideoStep } from "./steps/VideoStep";
import { ThumbnailStep } from "./steps/ThumbnailStep";
import { FormStep } from "./steps/FormStep";
import { POST_MODAL_STEP } from "../../constants/step";

type Props = {
  step: PostModalStep;
};
export const PostModalContent = ({ step }: Props) => {
  switch (step) {
    case POST_MODAL_STEP.FORM:
      return <FormStep />;
    case POST_MODAL_STEP.VIDEO:
      return <VideoStep />;
    case POST_MODAL_STEP.THUMBNAIL:
      return <ThumbnailStep />;
    default:
      return null;
  }
};
