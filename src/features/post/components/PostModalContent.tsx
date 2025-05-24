import type { PostModalContentProps } from "../types";
import { POST_MODAL_PLACEHOLDER_MAP, POST_MODAL_STEP } from "../constants";

export const PostModalContent = ({
  step,
  content,
  onContentChange,
}: PostModalContentProps) => {
  if (step === POST_MODAL_STEP.FORM) {
    return (
      <textarea
        className="w-full border p-4 rounded-2xl"
        rows={5}
        placeholder={POST_MODAL_PLACEHOLDER_MAP[step]}
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
      />
    );
  }

  if (step === POST_MODAL_STEP.VIDEO) {
    return (
      <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-2xl">
        <p className="text-gray-500">{POST_MODAL_PLACEHOLDER_MAP[step]}</p>
      </div>
    );
  }

  if (step === POST_MODAL_STEP.THUMBNAIL) {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-video bg-gray-100 rounded-2xl"></div>
        <div className="aspect-video bg-gray-100 rounded-2xl"></div>
        <div className="aspect-video bg-gray-100 rounded-2xl"></div>
        <div className="aspect-video bg-gray-100 rounded-2xl"></div>
      </div>
    );
  }

  return null;
};
