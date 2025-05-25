import React from "react";
import { Button } from "../../../../../shared/components/ui/Button";
import { BaseModalContentLayout } from "../../../../../shared/components/layout/BaseModalContentLayout";
import { POST_MODAL_STEP } from "../../../constants/step";
import { ThumbnailPreviewGrid } from "../../../../thumbnail/components/ThumbnailGrid/Preview/ThumbnailPreviewGrid";
import { usePostStep } from "../../../hooks/usePostStep";
import ImageIcon from "@/assets/icon/image-icon.svg";
import VideoIcon from "@/assets/icon/video-icon.svg";

export const FormStep = React.memo(() => {
  const { content, setContent, handleSubmit, setPostModalStep, thumbnails } =
    usePostStep();

  return (
    <BaseModalContentLayout>
      <BaseModalContentLayout.Body>
        <div className="flex flex-col gap-4">
          <textarea
            className="w-full border p-4 rounded-2xl"
            rows={8}
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {/* 썸네일 Preview 그리드 */}
          <ThumbnailPreviewGrid thumbnails={thumbnails} />
        </div>
      </BaseModalContentLayout.Body>
      <BaseModalContentLayout.Footer>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="secondary">
              <img src={ImageIcon} alt="image icon" className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              onClick={() => setPostModalStep(POST_MODAL_STEP.VIDEO)}
            >
              <img src={VideoIcon} alt="image icon" className="w-5 h-5" />
            </Button>
          </div>
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!content.trim()}
          >
            등록
          </Button>
        </div>
      </BaseModalContentLayout.Footer>
    </BaseModalContentLayout>
  );
});
