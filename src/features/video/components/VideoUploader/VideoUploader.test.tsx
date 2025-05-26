import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { VideoUploader } from "./VideoUploader";
import { useVideoUpload } from "../../hooks/useVideoUpload";

/* useVideoUpload 모킹 */
vi.mock("../../hooks/useVideoUpload");

const mockHandleDrop = vi.fn();
const mockHandleDragOver = vi.fn();
const mockHandleDragLeave = vi.fn();
const mockHandleFileChange = vi.fn();
const mockClick = vi.fn();

/* 테스트용 input 생성 */
const inputElement = document.createElement("input");
inputElement.click = mockClick;

/* 파일 dummy 생성 */
const blob = new Blob(["a".repeat(5 * 1024 * 1024)], { type: "video/mp4" });
const mockFile = new File([blob], "test-video.mp4", { type: "video/mp4" });
const badFile = new File(["dummy"], "test.txt", { type: "text/plain" });

const baseMockReturn: ReturnType<typeof useVideoUpload> = {
  video: null,
  inputRef: { current: inputElement },
  isDragging: false,
  handleFile: vi.fn(),
  handleDrop: mockHandleDrop,
  handleDragOver: mockHandleDragOver,
  handleDragLeave: mockHandleDragLeave,
  handleFileChange: mockHandleFileChange,
};

describe("VideoUploader", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("video가 없을 때 안내 문구와 파일 선택 버튼이 표시됨", () => {
    vi.mocked(useVideoUpload).mockReturnValue(baseMockReturn);

    render(<VideoUploader />);
    expect(screen.getByText("파일 선택")).toBeInTheDocument();
    expect(
      screen.getByText(/동영상 파일을 드래그 앤 드롭/)
    ).toBeInTheDocument();
  });

  it("video가 있을 때 업로드 완료 메시지가 표시됨", () => {
    vi.mocked(useVideoUpload).mockReturnValue({
      ...baseMockReturn,
      video: {
        file: mockFile,
        url: "blob:mock-url",
      },
    });

    render(<VideoUploader />);
    expect(screen.getByText("업로드 완료!")).toBeInTheDocument();
    expect(screen.getByText("test-video.mp4")).toBeInTheDocument();
    expect(screen.getByText(/MB$/)).toBeInTheDocument(); // 끝이 MB인 문자열
    expect(screen.getByText("다시 선택하기")).toBeInTheDocument();
  });

  it("드래그 중일 때 스타일 클래스가 적용됨", () => {
    vi.mocked(useVideoUpload).mockReturnValue({
      ...baseMockReturn,
      isDragging: true,
    });

    render(<VideoUploader />);
    const container = screen.getByTestId("video-uploader");
    expect(container.className).toContain("border-brand");
    expect(container.className).toContain("bg-cyan-50");
  });

  it("잘못된 파일 업로드 시 완료 UI가 표시되지 않음", () => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && file.type !== "video/mp4") {
        return;
      }
    };

    vi.mocked(useVideoUpload).mockReturnValue({
      ...baseMockReturn,
      video: null,
      handleFileChange,
    });

    render(<VideoUploader />);
    const input = screen.getByTestId("video-input");

    fireEvent.change(input, {
      target: { files: [badFile] },
    });

    expect(screen.queryByText("업로드 완료!")).not.toBeInTheDocument();
  });
});
