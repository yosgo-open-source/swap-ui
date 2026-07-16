# swap-ui v2 Storybook 設計手冊（MDX 使用指南）設計

日期：2026-07-16
狀態：已與使用者確認

## 背景與目標

v2 Storybook 目前僅有純展示 stories（Button、Typography）。目標是加一層「使用指南」，讓工程師**看到元件就知道用在哪、怎麼用**，呈現得像設計手冊。

## 已確認決策

- **範圍**：只做「每元件使用指南」；不做品牌首頁、foundations 頁、也不改 Storybook 外觀。
- **每頁內容**（三塊）：① 一句話簡介 + 使用時機　② 可複製的程式碼範例；**不放** Do/Don't、**不放** props 表。
- **做法**：每元件一個 **MDX 手冊頁**（官方 Docs addon 的自由編版路徑，用 Doc Blocks 組），autodocs 不強制開。理由：純 autodocs 會強制帶 props 表且版面固定，MDX 才能達到手冊感又剔除 props 表（官方文件背書：writing-docs / mdx / autodocs）。

## 架構

**檔案結構**：MDX 手冊頁與元件 stories 同目錄。
```
src/components/
├── Button.stories.tsx      （既有，不變——手冊範例引用它）
├── Button.mdx              （新增：手冊頁）
├── Typography.stories.tsx  （既有，不變）
└── Typography.mdx          （新增：手冊頁）
```

**每頁版型**（固定三塊）：
1. 標題 + 一句話簡介
2. 使用時機（條列）
3. 範例：分小節，每節一句情境說明 + `<Canvas>`（嵌現有 story 的即時預覽，內建「Show code」顯示可複製碼）

**用到的 Doc Blocks**：`Meta`（`of={Stories}` 掛到對應元件，於側欄產生 Docs 頁）、`Canvas`（`of={Stories.X}` 即時範例 + 可複製碼）。不使用 `ArgTypes` / `Controls` 表。

**導覽**：側欄每個元件底下多一個「Docs」頁，即手冊。Playground story 保留（可玩 controls），與手冊互補。

**範本效應**：先套 Button + Typography 當範本；計劃四起每加一元件即依同版型加一 `.mdx`。

## 技術注意

- Doc Blocks 於 Storybook 10 的正確 import 路徑須於實作時查證（`@storybook/addon-docs/blocks` 或等效），勿憑記憶。
- MDX 頁以 `<Meta of={...} />` attach 到 stories，避免與 CSF autodocs 重複產生 Docs 頁。
- 動到 `.storybook`/MDX 後 storybook dev 需重啟（HMR 對此類變更不穩）。

## 驗收

- Chrome MCP 開 Button 與 Typography 的 Docs 頁：確認版型（簡介/使用時機/範例）、`<Canvas>` 即時預覽正常、程式碼可展開複製、無 console 錯誤。
- `npm run storybook:build` 成功；CI 綠燈。
