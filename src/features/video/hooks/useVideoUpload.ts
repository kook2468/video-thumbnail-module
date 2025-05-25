import { validateVideoFile } from "../utils/validateVideo";
import { useToastStore } from "../../../stores/toast.store";
import { usePostDraftStore } from "../../../stores/postDraft.store";

export const useVideoUpload = () => {
  const { setVideo, clearVideo } = usePostDraftStore();
  const showToast = useToastStore((s) => s.showToast);

  const handleFile = (file: File) => {
    const error = validateVideoFile(file);
    if (error) {
      showToast(error, "danger");
      clearVideo();
      return;
    }

    setVideo(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    handleFile(file);
  };

  return { handleFile, handleFileChange };
};
