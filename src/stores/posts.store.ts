/**
 * PostsStore : 포스트 목록 관리 스토어 (LocalStorage 기반)
 */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Post } from "../features/post/types";

interface PostsStore {
  posts: Post[];
  addPost: (post: Post) => void;
}

export const usePostsStore = create<PostsStore>()(
  persist(
    (set) => ({
      posts: [],
      addPost: (post) =>
        set((state) => ({
          posts: [...state.posts, post],
        })),
    }),
    {
      name: "post-storage",
      partialize: (state) => ({ posts: state.posts }),
    }
  )
);
