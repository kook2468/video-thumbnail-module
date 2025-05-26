import { ThumbnailItem } from "../ThumbnailItem/ThumbnailItem";
import type { Thumbnail } from "../../types";
import { useThumbnailPreview } from "../../hooks/useThumbnailPreview";
import { ThumbnailPreviewModal } from "../ThumbnailPreviewModal";

type Props = {
  thumbnails: Thumbnail[];
};

export const ThumbnailPreviewGrid = ({ thumbnails }: Props) => {
  const { previewTime, openPreview, closePreview, currentThumbnail } =
    useThumbnailPreview(thumbnails);

  return (
    <div
      data-testid="thumbnail-preview-grid"
      className="grid grid-cols-4 gap-2"
    >
      {thumbnails.map((thumb) => (
        <ThumbnailItem
          variant="preview"
          src={thumb.src}
          time={thumb.time}
          onPreview={() => openPreview(thumb.time)}
        />
      ))}

      {previewTime !== null && currentThumbnail && (
        <ThumbnailPreviewModal
          thumb={currentThumbnail}
          onClose={closePreview}
        />
      )}
    </div>
  );
};
