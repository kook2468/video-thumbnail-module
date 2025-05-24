import { formatTime } from "../../utils/formatTime";

type Props = {
  src: string;
  time: number;
  onSeek: (time: number) => void;
  onRemove: () => void;
};

export function ThumbnailItem({ src, time, onSeek, onRemove }: Props) {
  return (
    <div className="relative group aspect-square basis-1/4 grow-0 min-w-0 rounded-xl overflow-hidden">
      <img
        src={src}
        className="object-cover w-full h-full"
        alt="썸네일"
        onClick={() => onSeek(time)}
      />
      <span className="absolute bottom-1 right-1 text-white text-xs bg-black/50 px-1 rounded">
        {formatTime(time)}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation(); // 썸네일 클릭 방지
          onRemove();
        }}
        className="absolute top-1 right-1 w-4 h-4 rounded-full bg-black text-white text-xs hidden group-hover:flex items-center justify-center"
        aria-label="썸네일 삭제"
      >
        ×
      </button>
    </div>
  );
}
