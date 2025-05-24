import type { PostModalHeaderProps } from "../types";
import { POST_MODAL_TITLE_MAP } from "../constants";

export const PostModalHeader = ({ step }: PostModalHeaderProps) => {
  return (
    <h2 className="text-lg font-semibold">{POST_MODAL_TITLE_MAP[step]}</h2>
  );
};
