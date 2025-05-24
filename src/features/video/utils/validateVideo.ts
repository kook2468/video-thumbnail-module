export const validateVideoFile = (file: File): string | null => {
  const maxSize = 100 * 1024 * 1024;
  if (!file.type.startsWith("video/"))
    return "영상 파일만 업로드할 수 있습니다.";
  if (file.size > maxSize) return "100MB 이하의 파일만 업로드할 수 있습니다.";
  return null;
};
