import { create } from "zustand";
import type { Thumbnail } from "../features/thumbnail/types";

interface ThumbnailStore {
  thumbnails: Thumbnail[];
  addThumbnail: (thumb: Thumbnail) => void;
  removeThumbnail: (time: number) => void;
  resetThumbnails: () => void;
}

export const useThumbnailStore = create<ThumbnailStore>((set) => ({
  thumbnails: [],
  addThumbnail: (thumb) =>
    set((state) => ({ thumbnails: [...state.thumbnails, thumb] })),
  removeThumbnail: (time) =>
    set((state) => ({
      thumbnails: state.thumbnails.filter((thumb) => thumb.time !== time),
    })),
  resetThumbnails: () => set({ thumbnails: [] }),
}));
