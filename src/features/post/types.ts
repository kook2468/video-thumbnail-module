// ==========================
// PostModal 내부 단계
// ==========================
export type PostModalStep = "form" | "video" | "thumbnail";

// ==========================
// Post 데이터
// ==========================
export type PostFormData = {
  content: string;
  thumbnails: string[];
  videoUrl?: string;
};
