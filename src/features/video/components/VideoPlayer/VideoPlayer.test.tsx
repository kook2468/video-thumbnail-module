import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { VideoPlayer } from "./VideoPlayer";
import { usePostDraftStore } from "@/stores/postDraft.store";

const createFile = () => new File(["test"], "video.mp4", { type: "video/mp4" });

beforeAll(() => {
  global.URL.createObjectURL = vi.fn(() => "blob:mock-url");
});

describe("VideoPlayer", () => {
  beforeEach(() => {
    usePostDraftStore.setState({ content: "", thumbnails: [], video: null });
  });

  it("video가 없으면 렌더링되지 않음", () => {
    render(<VideoPlayer />);
    expect(screen.queryByTestId("video-tag")).toBeNull();
  });

  it("video가 있으면 video 태그가 렌더링됨", () => {
    const file = createFile();
    usePostDraftStore.setState({
      content: "",
      thumbnails: [],
      video: { file, url: "blob:mock-url" },
    });

    render(<VideoPlayer />);
    expect(screen.getByTestId("video-tag")).toBeInTheDocument();
  });
});
