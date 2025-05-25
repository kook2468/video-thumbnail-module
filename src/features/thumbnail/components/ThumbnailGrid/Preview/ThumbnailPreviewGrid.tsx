import React, { useState } from "react";
import { ThumbnailItem } from "../../ThumbnailItem/ThumbnailItem";
import { PreviewModal } from "../../ThumbnailModal/ThumbnailPreviewModal";
import type { Thumbnail } from "../../../types";

type Props = {
  thumbnails: Thumbnail[];
};

export function ThumbnailPreviewGrid({ thumbnails }: Props) {
  const [previewTime, setPreviewTime] = useState<number | null>(null);

  const openPreview = (time: number) => {
    setPreviewTime(time);
  };

  const closePreview = () => {
    setPreviewTime(null);
  };

  const currentThumbnail = thumbnails.find((t) => t.time === previewTime);

  return (
    <div className="grid grid-cols-4 gap-2">
      {thumbnails.map((thumb) => (
        <ThumbnailItem
          variant="preview"
          src={thumb.src}
          time={thumb.time}
          onPreview={() => openPreview(thumb.time)}
        />
      ))}

      {previewTime !== null && currentThumbnail && (
        <PreviewModal thumb={currentThumbnail} onClose={closePreview} />
      )}
    </div>
  );
}
