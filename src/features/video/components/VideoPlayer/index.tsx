import { forwardRef, type JSX } from "react";
import { usePostDraftStore } from "../../../../stores/postDraft.store";

//JSX.IntrinsicElements["video"]를 쓰면 video 태그의 props 자동 완성도 잘 됨
export const VideoPlayer = forwardRef<
  HTMLVideoElement,
  JSX.IntrinsicElements["video"]
>((props, ref) => {
  const video = usePostDraftStore((s) => s.video);

  return (
    <div>
      {video && (
        <video
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
