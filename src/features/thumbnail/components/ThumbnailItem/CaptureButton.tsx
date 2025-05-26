type Props = {
  onCapture: () => void;
};

export const CaptureButton = ({ onCapture }: Props) => {
  return (
    <div className="aspect-square basis-1/4 grow-0 min-w-0 min-h-10">
      <button
        onClick={onCapture}
        className="w-full h-full border-2 border-dashed rounded-xl flex items-center justify-center text-2xl text-gray-400 hover:bg-gray-50"
        aria-label="썸네일 추가"
      >
        +
      </button>
    </div>
  );
};
