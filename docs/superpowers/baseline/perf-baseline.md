# v1 效能基準（2026-07-14）

設計文件 §8.3 效能驗收的「升級前」對照組。v2 完成後以**相同條件**重測比對。

## 量測條件

- 來源：gh-pages（`aee33f0`）的 v1 Storybook 成品，`python3 -m http.server 6106` 伺服
- Playwright headless Chromium，viewport 1024×768
- CDP `Emulation.setCPUThrottlingRate = 6`（6 倍 CPU 節流，模擬低階裝置）
- `waitUntil: networkidle` 後取值；腳本：`.baseline/tools/perf.mjs`（重現方法見 README.md）

## 數據

| story | 載入時間 (ms) | `<style>` 標籤數 | CSS 規則數 | JS heap (MB) |
|---|---:|---:|---:|---:|
| button--狀態 | 626 | 26 | 198 | 19.6 |
| textfield--認識 | 550 | 31 | 287 | 16.3 |
| typography--字級 | 551 | 55 | 107 | 19.6 |

## 解讀

- **`typography--字級` 一頁 55 個 `<style>` 標籤**：v1 的 props 函式型 `makeStyles` 讓「每個 props 組合的元件實例」各自動態產生並注入一份 stylesheet——這就是 JSS runtime 的樣式爆量證據。真實產品頁元件數量遠多於單一 story，此問題隨頁面複雜度線性放大，是低階裝置卡頓/閃退的主因。
- v2 驗收目標（同條件重測）：樣式以 theme 靜態定義 + Emotion 快取後，`<style>` 注入量應降至**常數級**（不隨元件實例數增長）；載入時間與 heap 不高於 v1。
- 真實產品頁面的效能驗收（互動掉幀、閃退）屬 Phase 5，在產品 repo 以實機/模擬低階裝置進行；本檔僅為元件庫層級對照組。
