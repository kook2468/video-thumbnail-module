import React from "react";
import type { Post } from "../../types";
import { usePostDetailModal } from "@/shared/hooks/usePostDetailModal";
import { usePostDetail } from "@/shared/hooks/usePostDetail";

type Props = {
  post: Post;
  displayIndex: number;
};

export const PostListItem = React.memo(({ post, displayIndex }: Props) => {
  const { setPost } = usePostDetail();
  const { open } = usePostDetailModal();
  const firstThumbnail = post.thumbnails?.[0];

  const handleClick = () => {
    setPost(post);
    open();
  };

  return (
    <div
      data-testid="post-item"
      className="flex items-start border rounded-xl p-4 shadow-sm bg-white gap-x-4 cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-24 h-24 bg-gray-200 rounded-lg">
        {firstThumbnail && (
          <img
            src={firstThumbnail.src}
            alt="썸네일"
            className="w-24 h-24 object-cover rounded-lg"
          />
        )}
      </div>
      <div className="flex-1">
        <p className="text-md text-gray-800 font-bold">
          포스트 #{displayIndex}
        </p>
        <p className="text-sm text-gray-800 line-clamp-3">{post.content}</p>
      </div>
    </div>
  );
});
