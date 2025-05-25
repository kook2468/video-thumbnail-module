/**
 * PostDraftStore : 포스트 작성 관리 스토어
 */
import { create } from "zustand";
import type { Thumbnail } from "../features/thumbnail/types";
import type { Video } from "../features/video/types";

interface PostDraftStore {
  content: string;
  thumbnails: Thumbnail[];
  video: Video | null;
  setContent: (content: string) => void;
  addThumbnail: (thumb: Thumbnail) => void;
  removeThumbnail: (time: number) => void;
  setVideo: (file: File) => void;
  clearVideo: () => void;
  reset: () => void;
}

export const usePostDraftStore = create<PostDraftStore>((set) => ({
  content: "",
  thumbnails: [],
  video: null,
  setContent: (content) => set({ content }),
  addThumbnail: (thumb) =>
    set((state) => ({ thumbnails: [...state.thumbnails, thumb] })),
  removeThumbnail: (time) =>
    set((state) => ({
      thumbnails: state.thumbnails.filter((thumb) => thumb.time !== time),
    })),
  setVideo: (file) =>
    set({
      video: {
        file,
        url: URL.createObjectURL(file),
      },
    }),
  clearVideo: () =>
    set({
      video: null,
    }),
  reset: () => set({ thumbnails: [], video: null, content: "" }),
}));
