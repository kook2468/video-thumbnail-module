import { render, screen } from "@testing-library/react";
import { describe, it, vi, beforeEach, expect } from "vitest";
import { PostModalContent } from "./PostModalContent";
import { POST_MODAL_STEP } from "../../constants/step";

/* usePostModal 모킹 */
const mockUsePostModal = vi.fn();

vi.mock("@/shared/hooks/usePostModal", () => ({
  usePostModal: () => mockUsePostModal(),
}));

/* 내부 경로 문제로 각 컴포넌트 테스트용 Mock 필요 */
vi.mock("./Steps/FormStep", () => ({
  FormStep: () => <div data-testid="form-step" />,
}));
vi.mock("./Steps/VideoStep", () => ({
  VideoStep: () => <div data-testid="video-step" />,
}));
vi.mock("./Steps/ThumbnailStep", () => ({
  ThumbnailStep: () => <div data-testid="thumbnail-step" />,
}));

describe("PostModalContent", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("step = form이면 FormStep이 렌더링됨", () => {
    mockUsePostModal.mockReturnValue({ step: POST_MODAL_STEP.FORM });
    render(<PostModalContent />);
    expect(screen.getByTestId("form-step")).toBeInTheDocument();
  });

  it("step = video이면 VideoStep이 렌더링됨", () => {
    mockUsePostModal.mockReturnValue({ step: POST_MODAL_STEP.VIDEO });
    render(<PostModalContent />);
    expect(screen.getByTestId("video-step")).toBeInTheDocument();
  });

  it("step = THUMBNAIL이면 ThumbnailStep이 렌더링됨", () => {
    mockUsePostModal.mockReturnValue({ step: POST_MODAL_STEP.THUMBNAIL });
    render(<PostModalContent />);
    expect(screen.getByTestId("thumbnail-step")).toBeInTheDocument();
  });

  it("step이 정의되지 않으면 null을 반환함", () => {
    mockUsePostModal.mockReturnValue({ step: "INVALID_STEP" });
    const { container } = render(<PostModalContent />);
    expect(container.firstChild).toBeNull();
  });
});
