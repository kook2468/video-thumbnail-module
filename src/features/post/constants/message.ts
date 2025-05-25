import { POST_CONTENT_MAX_LENGTH, POST_CONTENT_MIN_LENGTH } from "./limit";

// ==========================
// 에러 메시지
// ==========================
export const ERROR_MESSAGES = {
  contentMin: `포스트는 최소 ${POST_CONTENT_MIN_LENGTH}자 이상이어야 합니다.`,
  contentMax: `포스트는 최대 ${POST_CONTENT_MAX_LENGTH}자까지 입력할 수 있습니다.`,
};

// ==========================
// 안내 메시지
// ==========================
export const NOTICE_MESSAGES = {
  noData: `포스트 쓰기 버튼을 눌러 포스트 작성을 시작해주세요.`,
};

// ==========================
// 성공 메시지
// ==========================
export const SUCCESS_MESSAGE = {
  postInsert: `포스트가 등록되었습니다.`,
};
