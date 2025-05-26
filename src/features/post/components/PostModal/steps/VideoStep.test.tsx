import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { VideoStep } from "./VideoStep";
import { POST_MODAL_STEP } from "@/features/post/constants/step";

/* useVideoStep 모킹 */
const mockSetStep = vi.fn();
let mockVideo: File | null = null;

vi.mock("../../../hooks/useVideoStep", () => ({
  useVideoStep: () => ({
    setStep: mockSetStep,
    video: mockVideo,
  }),
}));

describe("VideoStep", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockVideo = null;
  });

  it("VideoUploader가 렌더링되어야 함", () => {
    render(<VideoStep />);
    expect(screen.getByTestId("video-uploader")).toBeInTheDocument();
  });

  it("이전 버튼 클릭 시 setStep(form) 호출", () => {
    render(<VideoStep />);
    const prevButton = screen.getByRole("button", { name: "이전" });
    fireEvent.click(prevButton);
    expect(mockSetStep).toHaveBeenCalledWith(POST_MODAL_STEP.FORM);
  });

  it("video가 있을 때 다음 버튼 클릭 시 setStep(thumbnail) 호출", () => {
    mockVideo = new File(["(video)"], "video.mp4", { type: "video/mp4" });
    render(<VideoStep />);
    const nextButton = screen.getByRole("button", { name: "다음" });
    fireEvent.click(nextButton);
    expect(mockSetStep).toHaveBeenCalledWith(POST_MODAL_STEP.THUMBNAIL);
  });

  it("video가 없으면 다음 버튼은 비활성화 상태여야 함", () => {
    render(<VideoStep />);
    const nextButton = screen.getByRole("button", { name: "다음" });
    expect(nextButton).toBeDisabled();
  });
});
