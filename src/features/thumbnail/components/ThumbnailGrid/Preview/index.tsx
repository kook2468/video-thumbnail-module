import { ThumbnailItem } from "../../ThumbnailItem/ThumbnailItem";
import { PreviewModal } from "../../ThumbnailPreviewModal";
import type { Thumbnail } from "../../../types";
import { useThumbnailPreview } from "../../../hooks/useThumbnailPreview";

type Props = {
  thumbnails: Thumbnail[];
};

export const ThumbnailPreviewGrid = ({ thumbnails }: Props) => {
  const { previewTime, openPreview, closePreview, currentThumbnail } =
    useThumbnailPreview(thumbnails);

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
};
