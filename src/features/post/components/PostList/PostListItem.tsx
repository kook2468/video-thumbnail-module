import React from "react";
import type { Post } from "../../types";
import { usePostDetailStore } from "../../../../stores/postDetail.store";
import { useModalStore } from "../../../../stores/modal.store";

type Props = {
  post: Post;
};

export const PostListItem = React.memo(({ post }: Props) => {
  const setSelectedPost = usePostDetailStore((s) => s.setSelectedPost);
  const openPostDetailModal = useModalStore((s) => s.openPostDetailModal);
  const firstThumbnail = post.thumbnails?.[0];

  const handleClick = () => {
    console.log("클릭!!");
    setSelectedPost(post);
    openPostDetailModal();
  };

  return (
    <div
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
        <p className="text-md text-gray-800 font-bold">포스트 #{post.id}</p>
        <p className="text-sm text-gray-800 line-clamp-3">{post.content}</p>
      </div>
    </div>
  );
});
