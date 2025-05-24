import { POST_MODAL_TITLE_MAP } from "../../constants/step";
import type { PostModalStep } from "../../types";

type Props = {
  step: PostModalStep;
};

export const PostModalHeader = ({ step }: Props) => {
  return (
    <h2 className="text-lg font-semibold">{POST_MODAL_TITLE_MAP[step]}</h2>
  );
};
