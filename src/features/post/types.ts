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

// ==========================
// Post 모달 컴포넌트 Props
// ==========================
export type PostModalHeaderProps = {
  step: PostModalStep;
};

export type PostModalContentProps = {
  step: PostModalStep;
  content: string;
  onContentChange: (content: string) => void;
};

export type PostModalFooterProps = {
  step: PostModalStep;
  onStepChange: (step: PostModalStep) => void;
  onSubmit: () => void;
};
