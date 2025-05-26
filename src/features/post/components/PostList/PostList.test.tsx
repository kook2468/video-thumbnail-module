import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { PostList } from "./PostList";
import { NOTICE_MESSAGES } from "../../constants/message";

/* usePost 모킹 */
const mockUsePosts = vi.fn();

vi.mock("@/shared/hooks/usePosts", () => ({
  usePosts: () => mockUsePosts(),
}));

describe("PostList", () => {
  it("포스트가 없으면 안내 문구가 표시됨", () => {
    mockUsePosts.mockReturnValue({ posts: [] });
    render(<PostList />);
    expect(screen.getByText(NOTICE_MESSAGES.noData)).toBeInTheDocument();
  });

  it("포스트가 있으면 PostListItem들이 렌더링됨", () => {
    const mockPosts = [
      { id: "1", content: "첫 번째 포스트", thumbnails: [] },
      { id: "2", content: "두 번째 포스트", thumbnails: [] },
    ];

    mockUsePosts.mockReturnValue({ posts: mockPosts });

    render(<PostList />);
    const items = screen.getAllByTestId("post-item");
    expect(items).toHaveLength(2);
  });
});
