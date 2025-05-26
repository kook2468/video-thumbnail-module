import { Button } from "@/shared/components/ui/Button";
import { formatBytes } from "../../utils/formatBytes";
import clsx from "clsx";
import { NOTICE_MESSAGES } from "../../constants/message";
import { useVideoUpload } from "../../hooks/useVideoUpload";

export const VideoUploader = () => {
  const {
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileChange,
    inputRef,
    isDragging,
    video,
  } = useVideoUpload();

  return (
    <div
      data-testid="video-uploader"
      className={clsx(
        "flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-2xl transition-colors",
        isDragging ? "border-brand bg-cyan-50" : "border-gray-300"
      )}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <input
        data-testid="video-input"
        type="file"
        accept="video/*"
        ref={inputRef}
        onChange={handleFileChange}
        hidden
      />

      <div className="bg-gray-100 p-4 rounded-full mb-4">
        <img src="/icons/file-upload-icon.svg" width={30} />
      </div>

      <div>
        {video ? (
          (() => {
            const { file } = video;
            return (
              <div className="text-sm text-gray-700">
                <p className="font-bold text-center text-brand">업로드 완료!</p>
                <p className="mt-1 break-all">{file!.name}</p>
                <p className="text-xs text-gray-500">
                  {formatBytes(file!.size)}
                </p>
              </div>
            );
          })()
        ) : (
          <div className="text-center">
            <p className="text-sm">{NOTICE_MESSAGES.fileGuide}</p>
            <p className="text-xs text-gray-800">
              {NOTICE_MESSAGES.fileSubGuide}
            </p>
          </div>
        )}
      </div>

      <Button className="mt-4" onClick={() => inputRef.current?.click()}>
        {video ? "다시 선택하기" : "파일 선택"}
      </Button>
    </div>
  );
};
