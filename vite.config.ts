import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true, // 👉 expect, describe, it 등 글로벌 사용 가능
    environment: "jsdom", // 👉 DOM API 테스트 가능
    setupFiles: "./src/setupTests.ts", // ✅ setup 파일 등록!
  },
});
