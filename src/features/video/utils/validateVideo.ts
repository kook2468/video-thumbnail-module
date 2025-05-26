import { ERROR_MESSAGES } from "../constants/message";

export function validateVideoFile(file: File): string | null {
  const maxSize = 100 * 1024 * 1024;
  if (!file.type.startsWith("video/")) return ERROR_MESSAGES.invalidVideo;
  if (file.size > maxSize) return ERROR_MESSAGES.fileTooLarge;
  return null;
}
