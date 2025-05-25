import { useModalStore } from "../../../stores/modal.store";
import { usePostDraftStore } from "../../../stores/postDraft.store";

export const useVideoStep = () => {
  const setPostModalStep = useModalStore((s) => s.setPostModalStep);
  const video = usePostDraftStore((s) => s.video);

  return { setPostModalStep, video };
};
