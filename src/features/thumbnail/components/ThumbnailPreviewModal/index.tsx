import { Button } from "@/shared/components/ui/Button";
import type { Thumbnail } from "../../types";

type Props = {
  thumb: Thumbnail;
  onClose: () => void;
};

export const PreviewModal = ({ thumb, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-preview">
      <div className="bg-white rounded-xl p-4 w-[90%] max-w-lg">
        <img
          src={thumb.src}
          alt="썸네일 미리보기"
          className="w-full rounded object-contain"
        />
        <div className="text-right">
          <Button
            className="mt-4 px-4 py-2 bg-black text-white rounded"
            onClick={onClose}
          >
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
};
