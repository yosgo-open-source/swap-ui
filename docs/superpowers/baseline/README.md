# v1 視覺／效能基準（2026-07-14）

計劃二、三改寫元件時，以此目錄的截圖與數據作為「升級前」對照組。

## 來源

- v1 Storybook 成品取自 **`gh-pages` 分支（commit `aee33f0`）**——v1 的 Storybook 6 + node-sass 工具鏈無法在 Node 24 重建，故使用已部署的建置成品。
- ⚠️ Caveat：gh-pages 建置時間點略落後 master 最新 commit（例如 `9c9e05b` Modal 的 dvh 修正不在其中）。比對時以「品牌觀感一致」為準（設計文件 §8.1），不做像素級比對。

## v1-screenshots/ 重現方法

**截圖不進版控**（4.4MB，`.gitignore` 排除）——需要時照下述方法隨時重新產生：

```bash
git worktree add .baseline/gh-pages origin/gh-pages --detach
cd .baseline/gh-pages && python3 -m http.server 6106 &   # 勿用 npx serve（clean-URL 轉址會破壞 iframe.html 路由）
cd .baseline/tools && npm init -y && npm i playwright && node capture.mjs
```

- 截圖腳本：Playwright headless Chromium，viewport **1024×768**，`fullPage: true`，每個 story 等待 1000ms（字體/動畫）。
- story 清單來自 iframe 內的 `window.__STORYBOOK_CLIENT_API__.raw()`，共 **86 個 story**、86 張 PNG，檔名即 story id。
- 彈窗類 story（modal--認識 等）的截圖基準是「關閉態＋觸發按鈕」。**互動體驗（開闔、動畫、鍵盤操作等）無法用靜態截圖比對**——驗收階段（設計文件 §8.5）用 Chrome MCP 同時開 v1（本目錄方法重新伺服 :6106）與 v2（:6006）兩版 Storybook，逐元件實際操作比對體驗差異。

## perf-baseline.md

量測方法與數據見該檔案。
