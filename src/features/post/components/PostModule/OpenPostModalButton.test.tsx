import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { OpenPostModalButton } from "./OpenPostModalButton";

/* usePostMdodal, usePostDraft 모킹 */
const mockOpen = vi.fn();
const mockReset = vi.fn();
const mockUsePostModal = vi.fn();
const mockUsePostDraft = vi.fn();

/* 내부 경로 문제로 PostModal 테스트용 Mock 필요 */
vi.mock("@/features/post/components/PostModal", () => ({
  PostModal: () => <div data-testid="post-modal" />,
}));

vi.mock("@/shared/hooks/usePostModal", () => ({
  usePostModal: () => mockUsePostModal(),
}));

vi.mock("@/shared/hooks/usePostDraft", () => ({
  usePostDraft: () => mockUsePostDraft(),
}));

describe("OpenPostModalButton", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("버튼이 렌더링 됨", () => {
    mockUsePostModal.mockReturnValue({ isOpen: false, open: mockOpen });
    mockUsePostDraft.mockReturnValue({ reset: mockReset });

    render(<OpenPostModalButton />);
    expect(
      screen.getByRole("button", { name: "포스트 쓰기" })
    ).toBeInTheDocument();
  });

  it("버튼 클릭 시 reset과 open이 호츌됨", () => {
    mockUsePostModal.mockReturnValue({ isOpen: false, open: mockOpen });
    mockUsePostDraft.mockReturnValue({ reset: mockReset });

    render(<OpenPostModalButton />);
    fireEvent.click(screen.getByRole("button", { name: "포스트 쓰기" }));

    expect(mockReset).toHaveBeenCalled();
    expect(mockOpen).toHaveBeenCalled();
  });

  it("isOpen이 true면 PostModal이 렌더링됨", () => {
    mockUsePostModal.mockReturnValue({ isOpen: true, open: mockOpen });
    mockUsePostDraft.mockReturnValue({ reset: mockReset });

    render(<OpenPostModalButton />);
    screen.debug();
    expect(screen.getByTestId("post-modal")).toBeInTheDocument();
  });
});
