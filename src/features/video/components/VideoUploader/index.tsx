import { useRef, useState } from "react";
import { useVideoStore } from "../../../../stores/video.store";
import { validateVideoFile } from "../../utils/validateVideo";
import { Button } from "../../../../shared/components/ui/Button";
import { formatBytes } from "../../utils/formatBytes";

export function VideoUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const { setVideo, file, clearVideo } = useVideoStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validationError = validateVideoFile(file);
    if (validationError) {
      setError(validationError);
      clearVideo();
      return;
    }

    setVideo(file);
    setError("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-2xl">
      <input
        type="file"
        accept="video/*"
        ref={inputRef}
        onChange={handleFileChange}
        hidden
      />
      <Button className="mb-2" onClick={() => inputRef.current?.click()}>
        {file ? "다시 선택하기" : "동영상 업로드"}
      </Button>
      <div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        {file && (
          <div className="text-sm text-gray-700">
            <p className="font-medium">업로드 완료!</p>
            <p className="mt-1 break-all">{file.name}</p>
            <p className="text-xs text-gray-500">{formatBytes(file.size)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
