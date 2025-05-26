import React from "react";
import { Button } from "@/shared/components/ui/Button";
import { ModalContent } from "@/shared/components/modal/ModalContent";
import { POST_MODAL_STEP } from "../../../constants/step";
import { ThumbnailPreviewGrid } from "@/features/thumbnail/components/ThumbnailGrid/Preview";
import { usePostStep } from "../../../hooks/usePostStep";

export const FormStep = React.memo(() => {
  const { content, setContent, handleSubmit, setStep, thumbnails } =
    usePostStep();

  return (
    <ModalContent>
      <ModalContent.Body>
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
      </ModalContent.Body>
      <ModalContent.Footer>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="secondary">
              <img
                src="/icons/image-icon.svg"
                alt="image icon"
                className="w-5 h-5"
              />
            </Button>
            <Button
              variant="secondary"
              onClick={() => setStep(POST_MODAL_STEP.VIDEO)}
            >
              <img
                src="/icons/video-icon.svg"
                alt="video icon"
                className="w-5 h-5"
              />
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
      </ModalContent.Footer>
    </ModalContent>
  );
});
