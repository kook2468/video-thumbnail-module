import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, beforeEach } from "vitest";
import { PostDetailModal } from "./PostDetailModal";

const mockUsePostDetailModal = vi.fn();
const mockUsePostDetail = vi.fn();

vi.mock("@/shared/hooks/usePostDetailModal", () => ({
  usePostDetailModal: () => mockUsePostDetailModal(),
}));

vi.mock("@/shared/hooks/usePostDetail", () => ({
  usePostDetail: () => mockUsePostDetail(),
}));

describe("PostDetailModal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("post 또는 isOpen이 false면 렌더링되지 않아야 함", () => {
    mockUsePostDetailModal.mockReturnValue({ isOpen: false, close: vi.fn() });
    mockUsePostDetail.mockReturnValue({ post: null, postIndex: 0 });

    const { container } = render(<PostDetailModal />);
    expect(container.firstChild).toBeNull();
  });

  it("post와 isOpen이 true일 때 모달이 렌더링되어야 함", () => {
    mockUsePostDetailModal.mockReturnValue({ isOpen: true, close: vi.fn() });
    mockUsePostDetail.mockReturnValue({
      postIndex: 1,
      post: {
        content: "포스트 내용입니다.",
        thumbnails: [
          { time: 1.1, src: "thumb1.png" },
          { time: 2.2, src: "thumb2.png" },
        ],
      },
    });

    render(<PostDetailModal />);
    expect(screen.getByText("포스트 #2")).toBeInTheDocument();
    expect(screen.getByText("포스트 내용입니다.")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  it("닫기 버튼을 클릭하면 close 함수가 호출되어야 함", () => {
    const closeFn = vi.fn();
    mockUsePostDetailModal.mockReturnValue({ isOpen: true, close: closeFn });
    mockUsePostDetail.mockReturnValue({
      postIndex: 0,
      post: { content: "내용", thumbnails: [] },
    });

    render(<PostDetailModal />);
    const closeButton = screen.getByRole("button", { name: "모달 닫기" });
    fireEvent.click(closeButton);
    expect(closeFn).toHaveBeenCalled();
  });
});
