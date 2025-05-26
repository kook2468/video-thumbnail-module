import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ThumbnailStep } from "./ThumbnailStep";
import { POST_MODAL_STEP } from "@/features/post/constants/step";

/* useThumbnailStep 모킹 */
const mockSetStep = vi.fn();
const mockHandleCapture = vi.fn();
const mockHandleSeek = vi.fn();
const mockRemoveThumbnail = vi.fn();
const mockVideoRef = { current: null };

vi.mock("../../../hooks/useThumbnailStep", () => ({
  useThumbnailStep: () => ({
    thumbnails: [{ time: 1.2, url: "thumb1.png" }],
    videoRef: mockVideoRef,
    handleCapture: mockHandleCapture,
    handleSeek: mockHandleSeek,
    removeThumbnail: mockRemoveThumbnail,
    setStep: mockSetStep,
  }),
}));

describe("ThumbnailStep", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("VideoPlayer가 렌더링되어야 함", () => {
    render(<ThumbnailStep />);
    expect(screen.getByTestId("video-player")).toBeInTheDocument();
  });

  it("ThumbnailGrid가 렌더링되어야 함", () => {
    render(<ThumbnailStep />);
    expect(screen.getByTestId("thumbnail-seek-grid")).toBeInTheDocument();
  });

  it("이전 버튼 클릭 시 setStep(video) 호출", () => {
    render(<ThumbnailStep />);
    const prevBtn = screen.getByRole("button", { name: "이전" });
    fireEvent.click(prevBtn);
    expect(mockSetStep).toHaveBeenCalledWith(POST_MODAL_STEP.VIDEO);
  });

  it("완료 버튼 클릭 시 setStep(form) 호출", () => {
    render(<ThumbnailStep />);
    const doneBtn = screen.getByRole("button", { name: "완료" });
    fireEvent.click(doneBtn);
    expect(mockSetStep).toHaveBeenCalledWith(POST_MODAL_STEP.FORM);
  });
});
