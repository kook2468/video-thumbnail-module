import { validateVideoFile } from "../utils/validateVideo";
import { useToast } from "@/shared/hooks/useToast";
import { useRef, useState, type DragEvent } from "react";
import { usePostDraft } from "@/shared/hooks/usePostDraft";

export const useVideoUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { video, setVideo, clearVideo } = usePostDraft();
  const showToast = useToast().showToast;

  const handleFile = (file: File) => {
    const error = validateVideoFile(file);
    if (error) {
      showToast.danger(error);
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

  /* Drag, DragOver, DragLeave 이벤트 */
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

  return {
    video,
    inputRef,
    isDragging,
    handleFile,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
  };
};
