import React from "react";
import { PostListItem } from "./PostListItem";
import { NOTICE_MESSAGES } from "../../constants/message";
import { usePosts } from "../../../../shared/hooks/usePosts";

export const PostList = React.memo(() => {
  const posts = usePosts().posts;

  if (posts.length === 0) {
    return <p className="text-gray-500 text-sm">{NOTICE_MESSAGES.noData}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {posts.map((post, index) => (
        <PostListItem key={post.id} post={post} displayIndex={index + 1} />
      ))}
    </div>
  );
});
