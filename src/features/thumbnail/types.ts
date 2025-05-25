export type Thumbnail = {
  src: string;
  time: number;
};

export type PreviewThumbnailItemProps = Thumbnail & {
  variant: "preview";
  onPreview: (time: number) => void;
  onSeek?: never;
  onRemove?: never;
};

export type SeekThumbnailItemProps = Thumbnail & {
  variant: "seek";
  onSeek: (time: number) => void;
  onRemove: () => void;
  onPreview?: never;
};

export type ThumbnailItemProps =
  | PreviewThumbnailItemProps
  | SeekThumbnailItemProps;
