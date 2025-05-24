import type { PostModalStep } from "../types";

// ==========================
// Modal Step 상수
// ==========================
export const POST_MODAL_STEP = {
  FORM: "form",
  VIDEO: "video",
  THUMBNAIL: "thumbnail",
} as const;

// ==========================
// Modal 관련 상수
// ==========================
export const POST_MODAL_TITLE_MAP: Record<PostModalStep, string> = {
  [POST_MODAL_STEP.FORM]: "포스트 쓰기",
  [POST_MODAL_STEP.VIDEO]: "동영상 업로드",
  [POST_MODAL_STEP.THUMBNAIL]: "사진 올리기",
};

export const POST_MODAL_PLACEHOLDER_MAP: Record<PostModalStep, string> = {
  [POST_MODAL_STEP.FORM]: "여기에 포스트를 입력하세요",
  [POST_MODAL_STEP.VIDEO]: "동영상을 업로드하세요",
  [POST_MODAL_STEP.THUMBNAIL]: "썸네일을 선택하세요",
};
