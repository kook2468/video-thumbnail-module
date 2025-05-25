import { BaseModal } from "../../../../shared/components/modal/BaseModal";
import { useModalStore } from "../../../../stores/modal.store";
import { usePostDetailStore } from "../../../../stores/postDetail.store";

export const PostDetailModal = () => {
  const { isPostDetailModalOpen, closePostDetailModal } = useModalStore();
  const selectedPost = usePostDetailStore((s) => s.selectedPost);

  if (!selectedPost || !isPostDetailModalOpen) return null;

  const { content, thumbnails } = selectedPost;

  console.log(selectedPost);

  return (
    <BaseModal size="lg">
      <BaseModal.Header>
        <div className="flex justify-between items-center px-2">
          <h2 className="text-lg font-semibold">포스트 상세</h2>
          <button
            onClick={closePostDetailModal}
            className="text-gray-500 hover:text-black text-3xl"
            aria-label="모달 닫기"
          >
            ×
          </button>
        </div>
      </BaseModal.Header>
      <BaseModal.Content>
        <div className="p-4 space-y-4">
          <h1>포스트 #{selectedPost.id}</h1>
          {/* {video != null && (
            <video controls className="w-full rounded-lg">
              <source src={video!.url} />
            </video>
          )} */}
          <p className="text-gray-800 whitespace-pre-wrap">{content}</p>
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
      </BaseModal.Content>
    </BaseModal>
  );
};
