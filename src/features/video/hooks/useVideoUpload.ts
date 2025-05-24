import { useVideoStore } from "../../../stores/video.store";
import { validateVideoFile } from "../utils/validateVideo";

export const useVideoUpload = () => {
  const setVideo = useVideoStore((s) => s.setVideo);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const error = validateVideoFile(file);
    if (error) {
      alert(error); // 실제 구현에선 상태나 toast로 처리 가능
      return;
    }

    setVideo(file);
  };

  return { handleFileChange };
};
