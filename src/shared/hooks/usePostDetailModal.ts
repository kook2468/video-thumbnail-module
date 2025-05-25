import { useModalStore } from "../../stores/modal.store";

export function usePostDetailModal() {
  return {
    isOpen: useModalStore((s) => s.isPostDetailModalOpen),
    open: useModalStore((s) => s.openPostDetailModal),
    close: useModalStore((s) => s.closePostDetailModal),
  };
}
