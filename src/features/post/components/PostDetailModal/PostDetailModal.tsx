import { Modal } from "@/shared/components/modal";
import { usePostDetail } from "@/shared/hooks/usePostDetail";
import { usePostDetailModal } from "@/shared/hooks/usePostDetailModal";

export const PostDetailModal = () => {
  const { isOpen, close } = usePostDetailModal();
  const { post, postIndex } = usePostDetail();

  if (!post || !isOpen) return null;

  const { content, thumbnails } = post;

  return (
    <Modal size="lg">
      <Modal.Header>
        <div className="flex justify-between items-center px-2">
          <h2 className="text-lg font-semibold">포스트 상세</h2>
          <button
            onClick={close}
            className="text-gray-500 hover:text-black text-3xl"
            aria-label="모달 닫기"
          >
            ×
          </button>
        </div>
      </Modal.Header>
      <Modal.Content>
        <div className="p-6">
          <h1>포스트 #{postIndex + 1}</h1>
          <p className="my-6 text-gray-800 whitespace-pre-wrap">{content}</p>
          <div className="mb-4">
            {thumbnails && thumbnails?.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {thumbnails.map((thumb) => (
                  <img
                    key={thumb.time}
                    src={thumb.src}
                    alt={`썸네일 ${thumb.time}`}
                    className="w-full rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
};
