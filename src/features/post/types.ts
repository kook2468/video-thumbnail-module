import type { Thumbnail } from "../thumbnail/types";
import type { Video } from "../video/types";

// ==========================
// PostModal 내부 단계
// ==========================
export type PostModalStep = "form" | "video" | "thumbnail";

// ==========================
// Post 데이터
// ==========================
export type Post = {
  id: string;
  content: string;
  video?: Video;
  thumbnails?: Thumbnail[];
};
