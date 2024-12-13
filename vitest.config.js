import { defineConfig } from "vitest/config";

export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  test: {
    globals: true, // 啟用全域測試 API，如 describe/it/expect
    environment: "jsdom", // 模擬瀏覽器環境 (適用於 React/Vue)
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"], // 測試檔案範圍
    coverage: {
      reporter: ["text", "html"], // 覆蓋率輸出格式
    },
  },
});
