/**
 * ModalStore : 모달 열림 여부 및 Step 상태 관리 스토어
 */
import { create } from "zustand";
import type { PostModalStep } from "../features/post/types";

interface ModalStore {
  /* PostModal */
  isPostModalOpen: boolean;
  postModalStep: PostModalStep;
  openPostModal: () => void;
  closePostModal: () => void;
  setPostModalStep: (step: PostModalStep) => void;

  /* PostDetail */
  isPostDetailModalOpen: boolean;
  openPostDetailModal: () => void;
  closePostDetailModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  /* PostModal */
  isPostModalOpen: false,
  postModalStep: "form",
  openPostModal: () => set({ isPostModalOpen: true, postModalStep: "form" }),
  closePostModal: () => set({ isPostModalOpen: false }),
  setPostModalStep: (step) => set({ postModalStep: step }),

  /* PostDetail */
  isPostDetailModalOpen: false,
  openPostDetailModal: () => set({ isPostDetailModalOpen: true }),
  closePostDetailModal: () => set({ isPostDetailModalOpen: false }),
}));
