import { POST_THUMBNAIL_LIMIT } from "../../constants/limit";
import type { Thumbnail } from "../../types";
import { CaptureButton } from "../ThumbnailItem/CaptureButton";
import { ThumbnailItem } from "../ThumbnailItem/ThumbnailItem";

type Props = {
  thumbnails: Thumbnail[];
  onCapture: () => void;
  onRemove: (index: number) => void;
  onSeek: (time: number) => void;
};

export const ThumbnailSeekGrid = ({
  thumbnails,
  onCapture,
  onRemove,
  onSeek,
}: Props) => {
  const canAdd = thumbnails.length < POST_THUMBNAIL_LIMIT;

  return (
    <div
      data-testid="thumbnail-seek-grid"
      className="grid grid-cols-4 gap-2 w-full max-w-full"
    >
      {thumbnails.map((thumb) => (
        <ThumbnailItem
          key={thumb.time}
          variant="seek"
          src={thumb.src}
          time={thumb.time}
          onSeek={onSeek}
          onRemove={() => onRemove(thumb.time)}
        />
      ))}
      {canAdd && <CaptureButton onCapture={onCapture} />}
    </div>
  );
};
