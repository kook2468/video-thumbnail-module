import { create } from "zustand";
import type { PostModalStep } from "../features/post/types";

type ModalStore = {
  /* PostModal 상태 */
  isPostModalOpen: boolean;
  postModalStep: PostModalStep;
  openPostModal: () => void;
  closePostModal: () => void;
  setPostModalStep: (step: PostModalStep) => void;

  /* 다른 모달 사용시 여기 확장 예정 */
};

export const useModalStore = create<ModalStore>((set) => ({
  /* PostModal */
  isPostModalOpen: false,
  postModalStep: "form",
  openPostModal: () => set({ isPostModalOpen: true, postModalStep: "form" }),
  closePostModal: () => set({ isPostModalOpen: false }),
  setPostModalStep: (step) => set({ postModalStep: step }),

  /* 다른 모달 사용시 여기 확장 예정 */
}));
