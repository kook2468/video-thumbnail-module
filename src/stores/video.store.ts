// import { create } from "zustand";

// interface VideoStore {
//   file: File | null;
//   url: string | null;
//   setVideo: (file: File) => void;
//   clearVideo: () => void;
// }

// export const useVideoStore = create<VideoStore>((set) => ({
//   file: null,
//   url: null,
//   setVideo: (file) =>
//     set({
//       file,
//       url: URL.createObjectURL(file),
//     }),
//   clearVideo: () =>
//     set({
//       file: null,
//       url: null,
//     }),
// }));
