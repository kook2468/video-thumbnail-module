import { forwardRef, type JSX } from "react";
import { usePostDraft } from "@/shared/hooks/usePostDraft";

export const VideoPlayer = forwardRef<
  HTMLVideoElement,
  JSX.IntrinsicElements["video"] // 이거 쓰면 video 태그의 props 자동 완성 잘 됨.
>((props, ref) => {
  const video = usePostDraft().video;

  return (
    <div data-testid="video-player">
      {video && (
        <video
          data-testid="video-tag"
          ref={ref}
          controls
          width="100%"
          className="mt-4 rounded-2xl shadow"
          {...props}
        >
          <source src={video!.url} type="video/mp4" />
          지원되지 않는 형식입니다.
        </video>
      )}{" "}
    </div>
  );
});
