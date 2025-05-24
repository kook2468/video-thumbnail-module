import { forwardRef, type JSX } from "react";
import { useVideoStore } from "../../../../stores/video.store";

//JSX.IntrinsicElements["video"]를 쓰면 video 태그의 props 자동 완성도 잘 됨
export const VideoPlayer = forwardRef<
  HTMLVideoElement,
  JSX.IntrinsicElements["video"]
>((props, ref) => {
  const { url } = useVideoStore();

  return (
    <div>
      {url && (
        <video
          ref={ref}
          controls
          width="100%"
          className="mt-4 rounded-2xl shadow"
          {...props}
        >
          <source src={url} type="video/mp4" />
          지원되지 않는 형식입니다.
        </video>
      )}{" "}
    </div>
  );
});
