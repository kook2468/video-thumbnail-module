import { VideoStep } from "./steps/VideoStep";
import { ThumbnailStep } from "./steps/ThumbnailStep";
import { FormStep } from "./steps/FormStep";
import { POST_MODAL_STEP } from "../../constants/step";
import React from "react";
import { useModalStore } from "../../../../stores/modal.store";

export const PostModalContent = React.memo(() => {
  console.log("🔥 PostModalContent 렌더링");

  const postModalStep = useModalStore((s) => s.postModalStep);

  switch (postModalStep) {
    case POST_MODAL_STEP.FORM:
      return <FormStep />;
    case POST_MODAL_STEP.VIDEO:
      return <VideoStep />;
    case POST_MODAL_STEP.THUMBNAIL:
      return <ThumbnailStep />;
    default:
      return null;
  }
});
