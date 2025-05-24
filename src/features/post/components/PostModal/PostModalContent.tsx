import type { PostModalContentProps } from "../../types";
import { POST_MODAL_STEP } from "../../constants";
import { VideoStep } from "./steps/VideoStep";
import { ThumbnailStep } from "./steps/ThumbnailStep";
import { FormStep } from "./steps/FormStep";

export const PostModalContent = ({ step }: PostModalContentProps) => {
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
