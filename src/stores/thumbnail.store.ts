import { create } from "zustand";

export type Thumbnail = {
  src: string;
  time: number;
};

interface ThumbnailState {
  thumbnails: Thumbnail[];
  addThumbnail: (thumb: Thumbnail) => void;
  removeThumbnail: (index: number) => void;
  resetThumbnails: () => void;
}

export const useThumbnailStore = create<ThumbnailState>((set) => ({
  thumbnails: [],
  addThumbnail: (thumb) =>
    set((state) => ({ thumbnails: [...state.thumbnails, thumb] })),
  removeThumbnail: (index) =>
    set((state) => ({
      thumbnails: state.thumbnails.filter((_, i) => i !== index),
    })),
  resetThumbnails: () => set({ thumbnails: [] }),
}));
