import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ThumbnailSeekGrid } from "./ThumbnailSeekGrid";
import { POST_THUMBNAIL_LIMIT } from "../../constants/limit";

const mockOnCapture = vi.fn();
const mockOnRemove = vi.fn();
const mockOnSeek = vi.fn();

const createThumb = (time: number) => ({
  time,
  src: `thumb-${time}.png`,
});

describe("ThumbnailSeekGrid", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("썸네일이 있을 경우 ThumbnailItem들이 렌더링됨", () => {
    const thumbnails = [createThumb(1), createThumb(2), createThumb(3)];

    render(
      <ThumbnailSeekGrid
        thumbnails={thumbnails}
        onCapture={mockOnCapture}
        onRemove={mockOnRemove}
        onSeek={mockOnSeek}
      />
    );

    const items = screen.getAllByTestId("thumbnail-item");
    expect(items).toHaveLength(thumbnails.length);
  });

  it("썸네일 개수가 제한보다 작을 경우 CaptureButton이 렌더링됨", () => {
    const thumbnails = Array.from(
      { length: POST_THUMBNAIL_LIMIT - 1 },
      (_, i) => createThumb(i)
    );

    render(
      <ThumbnailSeekGrid
        thumbnails={thumbnails}
        onCapture={mockOnCapture}
        onRemove={mockOnRemove}
        onSeek={mockOnSeek}
      />
    );

    expect(
      screen.getByRole("button", { name: "썸네일 추가" })
    ).toBeInTheDocument();
  });

  it("썸네일 개수가 제한에 도달하면 CaptureButton이 렌더링되지 않음", () => {
    const thumbnails = Array.from({ length: POST_THUMBNAIL_LIMIT }, (_, i) =>
      createThumb(i)
    );

    render(
      <ThumbnailSeekGrid
        thumbnails={thumbnails}
        onCapture={mockOnCapture}
        onRemove={mockOnRemove}
        onSeek={mockOnSeek}
      />
    );

    expect(screen.queryByRole("button", { name: "썸네일 추가" })).toBeNull();
  });
});
