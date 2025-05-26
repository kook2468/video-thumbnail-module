import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { FormStep } from "./FormStep";
import { POST_MODAL_STEP } from "@/features/post/constants/step";

/* usePostStep 모킹 */
const mockSetContent = vi.fn();
const mockHandleSubmit = vi.fn();
const mockSetStep = vi.fn();
const mockThumbnails = [{ time: 1.2, src: "thumb1.png" }];
let mockContent = "";

vi.mock("../../../hooks/usePostStep", () => ({
  usePostStep: () => ({
    content: mockContent,
    setContent: mockSetContent,
    handleSubmit: mockHandleSubmit,
    setStep: mockSetStep,
    thumbnails: mockThumbnails,
  }),
}));

describe("FormStep", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockContent = "";
  });

  it("텍스트 입력 시 setContent 호출", () => {
    render(<FormStep />);
    const textarea = screen.getByPlaceholderText("내용을 입력하세요");
    fireEvent.change(textarea, { target: { value: "새로운 글" } });
    expect(mockSetContent).toHaveBeenCalledWith("새로운 글");
  });

  it("content가 없으면 등록 버튼 비활성화", () => {
    render(<FormStep />);
    const submitButton = screen.getByRole("button", { name: "등록" });
    expect(submitButton).toBeDisabled();
  });

  it("content가 있으면 등록 버튼 활성화", () => {
    mockContent = "내용 있음";
    render(<FormStep />);
    const submitButton = screen.getByRole("button", { name: "등록" });
    expect(submitButton).toBeEnabled();
  });

  it("등록 버튼 클릭 시 handleSubmit 호출", () => {
    mockContent = "제출 테스트";
    render(<FormStep />);
    const submitButton = screen.getByRole("button", { name: "등록" });
    fireEvent.click(submitButton);
    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  it("비디오 버튼 클릭 시 setStep 호출", () => {
    render(<FormStep />);
    const videoButton = screen.getByRole("button", { name: /video icon/i });
    fireEvent.click(videoButton);
    expect(mockSetStep).toHaveBeenCalledWith(POST_MODAL_STEP.VIDEO);
  });

  it("썸네일 프리뷰가 렌더링됨", () => {
    render(<FormStep />);
    expect(screen.getByAltText("image icon")).toBeInTheDocument();
    expect(screen.getByAltText("video icon")).toBeInTheDocument();
  });
});
