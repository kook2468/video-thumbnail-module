/**
 * PostDetailStore : 포스트 조회용 스토어
 */
import { create } from "zustand";
import type { Post } from "../features/post/types";

interface PostDetailStore {
  selectedPost: Post | null;
  setSelectedPost: (post: Post) => void;
}

export const usePostDetailStore = create<PostDetailStore>((set) => ({
  selectedPost: null,
  setSelectedPost: (post) => set({ selectedPost: post }),
}));
