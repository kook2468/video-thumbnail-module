import { POST_THUMBNAIL_LIMIT } from "../../constants/limit";
import type { Thumbnail } from "../../types";
import { CaptureButton } from "./CaptureButton";
import { ThumbnailItem } from "./ThumbnailItem";

type Props = {
  thumbnails: Thumbnail[];
  onCapture: () => void;
  onRemove: (index: number) => void;
  onSeek: (time: number) => void;
};

export function ThumbnailGrid({
  thumbnails,
  onCapture,
  onRemove,
  onSeek,
}: Props) {
  const canAdd = thumbnails.length < POST_THUMBNAIL_LIMIT;

  return (
    <div className="grid grid-cols-4 gap-2 w-full max-w-full">
      {thumbnails.map((thumb, i) => (
        <ThumbnailItem
          key={thumb.time}
          src={thumb.src}
          time={thumb.time}
          onSeek={onSeek}
          onRemove={() => onRemove(i)}
        />
      ))}
      {canAdd && <CaptureButton onCapture={onCapture} />}
    </div>
  );
}
