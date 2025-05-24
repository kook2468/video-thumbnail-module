import { useRef, useState, type DragEvent } from "react";
import { useVideoStore } from "../../../../stores/video.store";
import { validateVideoFile } from "../../utils/validateVideo";
import { Button } from "../../../../shared/components/ui/Button";
import { formatBytes } from "../../utils/formatBytes";
import example from "@/assets/icon/file-upload.svg";
import clsx from "clsx";
import { useToastStore } from "../../../../stores/toast.store";
import { NOTICE_MESSAGES } from "../../constants/message";

export const VideoUploader = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { setVideo, file, clearVideo } = useVideoStore();
  const showToast = useToastStore((s) => s.showToast);

  const handleFile = (file: File) => {
    const validationError = validateVideoFile(file);
    if (validationError) {
      showToast(validationError, "danger");
      clearVideo();
      return;
    }

    setVideo(file);
    //setError("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validationError = validateVideoFile(file);
    if (validationError) {
      showToast(validationError, "danger");
      clearVideo();
      return;
    }

    setVideo(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-2xl transition-colors",
        isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
      )}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <input
        type="file"
        accept="video/*"
        ref={inputRef}
        onChange={handleFileChange}
        hidden
      />

      <div className="bg-gray-100 p-4 rounded-full mb-4">
        <img src={example} width={30} />
      </div>

      <div>
        {/* {error && <p className="text-sm text-red-500">{error}</p>} */}
        {file ? (
          <div className="text-sm text-gray-700">
            <p className="font-bold text-center text-brand">업로드 완료!</p>
            <p className="mt-1 break-all">{file.name}</p>
            <p className="text-xs text-gray-500">{formatBytes(file.size)}</p>
          </div>
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
        {file ? "다시 선택하기" : "파일 선택"}
      </Button>
    </div>
  );
};
