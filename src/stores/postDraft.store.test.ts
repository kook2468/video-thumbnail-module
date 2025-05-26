import { describe, it, expect, beforeEach } from "vitest";
import { usePostDraftStore } from "./postDraft.store";

const createFile = (name = "test.mp4") =>
  new File(["dummy"], name, { type: "video/mp4" });

beforeAll(() => {
  global.URL.createObjectURL = vi.fn(() => "blob:mock-url");
});

describe("usePostDraftStore", () => {
  beforeEach(() => {
    // 상태 초기화
    usePostDraftStore.setState({
      content: "",
      thumbnails: [],
      video: null,
    });
  });

  it("초기 상태는 비어 있어야 한다", () => {
    const state = usePostDraftStore.getState();
    expect(state.content).toBe("");
    expect(state.thumbnails).toEqual([]);
    expect(state.video).toBeNull();
  });

  it("setContent로 content를 설정할 수 있다", () => {
    usePostDraftStore.getState().setContent("포스트 예시 컨텐츠입니다.");
    expect(usePostDraftStore.getState().content).toBe(
      "포스트 예시 컨텐츠입니다."
    );
  });

  it("addThumbnail로 썸네일을 추가할 수 있다", () => {
    const thumb = { src: "thumb.png", time: 1.2 };
    usePostDraftStore.getState().addThumbnail(thumb);
    expect(usePostDraftStore.getState().thumbnails).toContainEqual(thumb);
  });

  it("removeThumbnail로 특정 time의 썸네일을 제거할 수 있다", () => {
    const thumbs = [
      { src: "thumb1.png", time: 1.1 },
      { src: "thumb2.png", time: 2.2 },
    ];
    thumbs.forEach((t) => usePostDraftStore.getState().addThumbnail(t));

    usePostDraftStore.getState().removeThumbnail(1.1);
    expect(usePostDraftStore.getState().thumbnails).toEqual([
      { src: "thumb2.png", time: 2.2 },
    ]);
  });

  it("setVideo로 video 상태를 설정할 수 있다", () => {
    const file = createFile();
    usePostDraftStore.getState().setVideo(file);
    const state = usePostDraftStore.getState();
    expect(state.video?.file).toBe(file);
    expect(state.video?.url).toMatch(/^blob:/);
  });

  it("clearVideo로 video 상태를 초기화할 수 있다", () => {
    usePostDraftStore.getState().setVideo(createFile());
    usePostDraftStore.getState().clearVideo();
    expect(usePostDraftStore.getState().video).toBeNull();
  });

  it("reset으로 모든 상태를 초기화할 수 있다", () => {
    const file = createFile();
    usePostDraftStore.setState({
      content: "test",
      thumbnails: [{ src: "thumb.png", time: 1 }],
      video: { file, url: "blob:..." },
    });

    usePostDraftStore.getState().reset();

    const state = usePostDraftStore.getState();
    expect(state.content).toBe("");
    expect(state.thumbnails).toEqual([]);
    expect(state.video).toBeNull();
  });
});
