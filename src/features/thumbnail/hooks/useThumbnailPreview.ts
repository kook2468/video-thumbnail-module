import { useState } from "react";
import type { Thumbnail } from "../types";

export const useThumbnailPreview = (thumbnails: Thumbnail[]) => {
  const [previewTime, setPreviewTime] = useState<number | null>(null);

  const openPreview = (time: number) => {
    setPreviewTime(time);
  };

  const closePreview = () => {
    setPreviewTime(null);
  };

  const currentThumbnail = thumbnails.find((t) => t.time === previewTime);

  return { previewTime, openPreview, closePreview, currentThumbnail };
};
