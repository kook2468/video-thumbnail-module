import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ThumbnailPreviewGrid } from "./ThumbnailPreviewGrid";
import { useThumbnailPreview } from "../../hooks/useThumbnailPreview";
import type { Thumbnail } from "../../types";

/* 썸네일 샘플 */
const createThumb = (time: number): Thumbnail => ({
  time,
  src: `thumb${time}.png`,
});

/* useThumbnailPreview 모킹 */
const mockOpenPreview = vi.fn();
const mockClosePreview = vi.fn();

vi.mock("../../hooks/useThumbnailPreview");

describe("ThumbnailPreviewGrid", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("썸네일이 렌더링됨", () => {
    const thumbnails = [createThumb(1), createThumb(2)];

    vi.mocked(useThumbnailPreview).mockReturnValue({
      previewTime: null,
      currentThumbnail: undefined,
      openPreview: mockOpenPreview,
      closePreview: mockClosePreview,
    });

    render(<ThumbnailPreviewGrid thumbnails={thumbnails} />);
    expect(screen.getAllByAltText("썸네일")).toHaveLength(thumbnails.length);
  });

  it("썸네일 클릭 시 openPreview가 호출됨", () => {
    const thumbnails = [createThumb(3)];

    vi.mocked(useThumbnailPreview).mockReturnValue({
      previewTime: null,
      currentThumbnail: undefined,
      openPreview: mockOpenPreview,
      closePreview: mockClosePreview,
    });

    render(<ThumbnailPreviewGrid thumbnails={thumbnails} />);
    fireEvent.click(screen.getByAltText("썸네일"));
    expect(mockOpenPreview).toHaveBeenCalledWith(3);
  });

  it("previewTime이 설정되면 PreviewModal이 렌더링됨", () => {
    const thumbnails = [createThumb(4)];

    vi.mocked(useThumbnailPreview).mockReturnValue({
      previewTime: 4,
      currentThumbnail: thumbnails[0],
      openPreview: mockOpenPreview,
      closePreview: mockClosePreview,
    });

    render(<ThumbnailPreviewGrid thumbnails={thumbnails} />);
    expect(screen.getByAltText("썸네일")).toBeInTheDocument();
  });
});
