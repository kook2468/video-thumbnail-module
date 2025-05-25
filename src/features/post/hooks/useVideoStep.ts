import { usePostDraft } from "../../../shared/hooks/usePostDraft";
import { usePostModal } from "../../../shared/hooks/usePostModal";

export const useVideoStep = () => {
  const setStep = usePostModal().setStep;
  const video = usePostDraft().video;

  return { setStep, video };
};
