import { useVideoStore } from "../../../stores/video.store";

export const VideoPlayer = () => {
  const { url } = useVideoStore();

  return (
    <>
      {url && (
        <video controls width="100%" className="mt-4 rounded shadow">
          <source src={url} type="video/mp4" />
          지원되지 않는 형식입니다.
        </video>
      )}{" "}
    </>
  );
};
