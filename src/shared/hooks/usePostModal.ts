import { useModalStore } from "../../stores/modal.store";

export function usePostModal() {
  return {
    isOpen: useModalStore((s) => s.isPostModalOpen),
    step: useModalStore((s) => s.postModalStep),
    open: useModalStore((s) => s.openPostModal),
    close: useModalStore((s) => s.closePostModal),
    setStep: useModalStore((s) => s.setPostModalStep),
  };
}
