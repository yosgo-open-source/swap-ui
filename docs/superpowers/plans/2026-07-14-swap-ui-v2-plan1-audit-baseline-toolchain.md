# swap-ui v2 計劃一：審計、基準線、新工具鏈 實作計劃

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成設計文件的 Phase 0（元件審計、視覺基準、效能基準）與 Phase 1（v2 分支上可建置、可測試、可跑 Storybook 的新工具鏈空殼）。

**Architecture:** 依 `docs/superpowers/specs/2026-07-14-mui-v9-theme-first-migration-design.md`。本計劃不寫任何 theme / 元件邏輯（那是計劃二、三的事），只交付三份審計/基準文件與一個經驗證的現代化工具鏈。

**Tech Stack:** MUI 9.2.0、React 19.2.7、TypeScript 7.0.2（退階 6.0.3 / 5.9.3）、tsup 8.5.1、Vitest 4.1.10、Storybook 10.5.0、Playwright（僅基準截圖用）。

## Global Constraints

- **commit 前一律停下，請使用者在 VS Code review，核准後才 commit**（與使用者的固定約定；本計劃所有「Commit」步驟都隱含這條）。
- 版本號一律使用 2026-07-14 查證值（見上方 Tech Stack 與 Task 6 的 package.json）；新增未列出的套件時，先 `npm view <pkg> version` 查證再安裝最新版。
- 元件去向以設計文件 §4.2 為準：SWAP 前綴元件只留 SWAPLogo、SWAPShare；TaxTextField 現役保留；稅務常數匯出保留；LandingPage 淘汰。
- Node 24.1.0、npm 11.3.0。repo 無 CI，本計劃不新增 CI（YAGNI）。
- Task 1–5 在 `master` 分支執行（產出皆為文件與基準，描述的是 v1 現況）；Task 6–8 在新的 `v2` 分支執行。

---

### Task 1: 元件審計表

**Files:**
- Create: `docs/superpowers/audit/2026-07-14-component-disposition.md`

**Interfaces:**
- Consumes: `src/index.ts`（匯出清單的唯一事實來源）、`src/**/**.tsx`、`src/**/**.types.ts`
- Produces: 審計表文件——計劃二（theme 翻譯）與計劃三（客製元件重寫）的輸入。每列格式見 Step 2。

- [ ] **Step 1: 列出全部公開匯出**

```bash
grep -E "^export|^  [A-Za-z]+,?$" src/index.ts
```

以 `src/index.ts` 的 `export { ... }` 區塊為準列出所有公開符號（元件、hook、常數）。這份清單是審計表的母集，一個都不能漏。

- [ ] **Step 2: 逐元件填寫審計表**

對每個匯出符號，讀它的 `*.tsx` 與 `*.types.ts`，在 `docs/superpowers/audit/2026-07-14-component-disposition.md` 寫入一列。表格格式（含表頭與三個範例列，執行時全部補齊）：

```markdown
# swap-ui v1 元件審計表（2026-07-14）

去向代碼：THEME=下沉為 theme variant/styleOverrides、CUSTOM=保留為客製元件重寫、DROP=淘汰

| 匯出 | 去向 | MUI v9 對應 | v1 props（非 MUI 透傳的自訂部分） | 樣式維度（variant × size × 狀態） | 備註 |
|---|---|---|---|---|---|
| Button | THEME | `@mui/material/Button` | variant(primary/secondary/tertiary/text/black/danger)、size(small/medium/large)、width、minWidth、loading | 6 variant × 3 size × (default/hover/active/focus-visible/disabled) + loading 態 | loading 雙 CircularProgress 疊加；textTransform unset |
| SWAPLogo | CUSTOM | 無 | （執行時照實填） | （執行時照實填） | 品牌資產 |
| SWAPModal | DROP | — | — | — | 已被 Modal 取代（需求方確認） |
```

填寫規則：
- 去向依設計文件 §4.2 的分類；審計中若發現與 §4.2 衝突的事實（例如某 DROP 元件其實被別的保留元件引用），記入「備註」欄並回報使用者，不要自行改分類。
- 「樣式維度」欄必須完整列出該元件所有視覺狀態——這是計劃二翻譯樣式時的 checklist，漏一項就是漏一個視覺回歸。
- `Styles`、`useBreakpoints` 等非元件匯出也要有列（useBreakpoints 的 v9 對應是 `useMediaQuery` + `theme.breakpoints`）。

- [ ] **Step 3: 完整性驗證**

```bash
# index.ts 每個匯出符號都必須出現在審計表中，輸出應為空
for s in $(node -e "
const src=require('fs').readFileSync('src/index.ts','utf8');
const m=src.match(/export \{([\s\S]*?)\}/);
m[1].split(',').map(x=>x.trim()).filter(Boolean).forEach(x=>console.log(x));
"); do grep -q "| $s " docs/superpowers/audit/2026-07-14-component-disposition.md || echo "MISSING: $s"; done
```

Expected: 無 `MISSING:` 輸出。

- [ ] **Step 4: 請使用者 review 審計表，核准後 commit**

```bash
git add docs/superpowers/audit/2026-07-14-component-disposition.md
git commit -m "docs: v1 元件審計表（去向、props、樣式維度盤點）"
```

---

### Task 2: 視覺基準——v1 Storybook 截圖

**Files:**
- Create: `docs/superpowers/baseline/v1-screenshots/*.png`（每個 story 一張）
- Create: `docs/superpowers/baseline/README.md`（截圖方法記錄，供計劃二比對時重現）
- Modify: `.gitignore`（新增 `.baseline/`）

**Interfaces:**
- Consumes: `gh-pages` 分支（已建置的 v1 Storybook 成品——v1 的 Storybook 6 + node-sass 4 工具鏈在 Node 24 無法重建，故用部署成品）
- Produces: `docs/superpowers/baseline/v1-screenshots/<story-id>.png`——計劃二、三視覺比對的基準。

- [ ] **Step 1: 取出 gh-pages 成品並在本機伺服**

```bash
echo ".baseline/" >> .gitignore
git worktree add .baseline/gh-pages origin/gh-pages --detach
npx serve .baseline/gh-pages -l 6106 &
sleep 2 && curl -sI http://localhost:6106 | head -1
```

Expected: `HTTP/1.1 200 OK`。

- [ ] **Step 2: 建立截圖工具（獨立目錄，不污染 repo 依賴）**

```bash
mkdir -p .baseline/tools && cd .baseline/tools && npm init -y && npm i playwright && npx playwright install chromium && cd ../..
```

建立 `.baseline/tools/capture.mjs`：

```js
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = "../../docs/superpowers/baseline/v1-screenshots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 768 } });

// Storybook 6 的 iframe 內有 client API，可列出全部 story id
await page.goto("http://localhost:6106/iframe.html");
await page.waitForFunction(() => window.__STORYBOOK_CLIENT_API__);
const ids = await page.evaluate(() =>
  window.__STORYBOOK_CLIENT_API__.raw().map((s) => s.id)
);
console.log(`found ${ids.length} stories`);

for (const id of ids) {
  await page.goto(`http://localhost:6106/iframe.html?id=${id}&viewMode=story`);
  await page.waitForTimeout(1000); // 等字體與動畫
  await page.screenshot({ path: `${OUT}/${id}.png`, fullPage: true });
  console.log(`captured ${id}`);
}
await browser.close();
```

- [ ] **Step 3: 執行截圖**

```bash
cd .baseline/tools && node capture.mjs && cd ../..
ls docs/superpowers/baseline/v1-screenshots | wc -l
```

Expected: `found N stories`（N 應與 `ls src/**/*.stories.tsx` 的 story 總數同量級），輸出資料夾有 N 張 PNG。若 `__STORYBOOK_CLIENT_API__` 不存在（gh-pages 版本過舊），退階方案：從各 `*.stories.tsx` 的 `title` 與 export 名手動組 story id（規則：`title` 轉 kebab-case + `--` + export 名轉 kebab-case）。

- [ ] **Step 4: 抽查與記錄**

肉眼抽查 5 張截圖（Button、TextField、Modal、Typography、Tab）確認內容完整非空白。將伺服方式、截圖指令、viewport、注意事項寫入 `docs/superpowers/baseline/README.md`（內容即本 Task 的步驟摘要，供計劃二重現同條件比對）。

**注意**：gh-pages 的建置時間點可能略落後 master 最新 commit（例如 Modal 的 dvh 修正）。在 README.md 記下 gh-pages 的 commit（`aee33f0`）與此 caveat；比對時以「品牌觀感一致」為準，不做像素級比對（設計文件 §8.1）。

- [ ] **Step 5: 請使用者 review，核准後 commit**

```bash
git add .gitignore docs/superpowers/baseline/
git commit -m "docs: v1 Storybook 視覺基準截圖（來源 gh-pages aee33f0）"
```

---

### Task 3: 效能基準

**Files:**
- Create: `.baseline/tools/perf.mjs`
- Create: `docs/superpowers/baseline/perf-baseline.md`

**Interfaces:**
- Consumes: Task 2 已伺服的 v1 Storybook（localhost:6106）與 `.baseline/tools`
- Produces: `perf-baseline.md`——設計文件 §8.3 效能驗收的「升級前」對照組。指標：style 標籤數、JS heap、6× CPU 節流下的載入時間。

- [ ] **Step 1: 建立量測腳本 `.baseline/tools/perf.mjs`**

```js
import { chromium } from "playwright";

// 取樣三個代表性 story：樣式最重的 Button、表單類 TextField、彈窗類 Modal
// story id 以 Task 2 產出的截圖檔名為準（此處為預期值，執行時核對）
const STORIES = ["button--button", "textfield--text-field", "modal--modal"];

const browser = await chromium.launch();
for (const id of STORIES) {
  const page = await browser.newPage({ viewport: { width: 1024, height: 768 } });
  const client = await page.context().newCDPSession(page);
  await client.send("Emulation.setCPUThrottlingRate", { rate: 6 }); // 模擬低階裝置

  const t0 = Date.now();
  await page.goto(`http://localhost:6106/iframe.html?id=${id}&viewMode=story`, {
    waitUntil: "networkidle",
  });
  const loadMs = Date.now() - t0;

  const metrics = await page.evaluate(() => ({
    styleTags: document.querySelectorAll("style").length,
    styleRules: [...document.querySelectorAll("style")].reduce(
      (n, s) => n + (s.sheet ? s.sheet.cssRules.length : 0), 0),
    heapMB: performance.memory
      ? (performance.memory.usedJSHeapSize / 1048576).toFixed(1)
      : "n/a",
  }));
  console.log(JSON.stringify({ id, loadMs, ...metrics }));
  await page.close();
}
await browser.close();
```

- [ ] **Step 2: 執行並記錄**

```bash
cd .baseline/tools && node perf.mjs && cd ../..
```

Expected: 每個 story 一行 JSON。若 story id 與預期不符，用 Task 2 截圖檔名核對後修正 STORIES 再跑。

將結果整理進 `docs/superpowers/baseline/perf-baseline.md`：量測條件（viewport、CPU 節流倍率、gh-pages commit）+ 指標表格 + 一句結論（v1 的 styleTags / styleRules 數字即 JSS 動態注入的證據，v2 驗收時同條件重測，styleTags 應降至常數級）。同時註明：真實產品頁的效能驗收在 Phase 5 於產品 repo 進行，此處僅為元件庫層級的對照組。

- [ ] **Step 3: 清理伺服程序，請使用者 review，核准後 commit**

```bash
pkill -f "serve .baseline/gh-pages" 2>/dev/null
git worktree remove .baseline/gh-pages --force
git add docs/superpowers/baseline/perf-baseline.md
git commit -m "docs: v1 效能基準（style 注入量、heap、6x 節流載入時間）"
```

---

### Task 4: 建立 v2 分支並封存 v1 原始碼

**Files:**
- Move: `src/` → `legacy/v1-src/`（保留為計劃二、三的翻譯參考，不參與建置）
- Delete: `out1670/ out3579/ out7565/ out9681/ storybook-static/ yarn-error.log jest.config.js jest.setup.ts rollup.config.js util/`（v1 工具鏈與雜物，使用者已同意「順便清理雜物」）

**Interfaces:**
- Consumes: —
- Produces: `v2` 分支，`legacy/v1-src/` 內有完整 v1 原始碼供後續計劃對照。

- [ ] **Step 1: 開分支、搬移與清理**

```bash
git checkout -b v2
git mv src legacy/v1-src
git rm -r --cached out1670 out3579 out7565 out9681 storybook-static 2>/dev/null
rm -rf out1670 out3579 out7565 out9681 storybook-static yarn-error.log
git rm jest.config.js jest.setup.ts rollup.config.js
git rm -r util
```

- [ ] **Step 2: 驗證**

```bash
ls legacy/v1-src/Button/Button.tsx && git status --short | head -20
```

Expected: 檔案存在；status 顯示 rename 與刪除，無未預期變更。

- [ ] **Step 3: 請使用者 review，核准後 commit**

```bash
git add -A
git commit -m "chore: 開 v2 分支，v1 原始碼封存至 legacy/，清除 v1 工具鏈與雜物"
```

---

### Task 5: v2 package.json 與依賴安裝

**Files:**
- Rewrite: `package.json`
- Delete: `yarn.lock`（改用 npm 的 package-lock.json）

**Interfaces:**
- Consumes: —
- Produces: 可 `npm install` 的依賴宣告。後續 Task 依賴 `npm run build|test|storybook` 等 scripts（Task 6–8 逐一補上設定檔）。

- [ ] **Step 1: 重寫 package.json**

```json
{
  "name": "@yosgo/swap-ui",
  "version": "2.0.0-alpha.0",
  "description": "SWAP UI theme & components on MUI v9. www.swap.work",
  "type": "module",
  "main": "./build/index.cjs",
  "module": "./build/index.js",
  "types": "./build/index.d.ts",
  "exports": {
    ".": {
      "types": "./build/index.d.ts",
      "import": "./build/index.js",
      "require": "./build/index.cjs"
    }
  },
  "files": ["build"],
  "sideEffects": false,
  "scripts": {
    "build": "tsup",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "storybook": "storybook dev -p 6006",
    "storybook:build": "storybook build",
    "prepublishOnly": "npm run typecheck && npm run test && npm run build"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/yosgo-open-source/swap-ui.git"
  },
  "author": "kcin1993",
  "license": "MIT",
  "publishConfig": { "access": "public" },
  "peerDependencies": {
    "@mui/material": "^9.0.0",
    "react": ">=18",
    "react-dom": ">=18"
  },
  "devDependencies": {
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    "@fontsource/m-plus-rounded-1c": "5.2.10",
    "@fontsource/noto-sans-tc": "5.2.9",
    "@mui/icons-material": "9.2.0",
    "@mui/material": "9.2.0",
    "@testing-library/react": "16.3.2",
    "react": "19.2.7",
    "react-dom": "19.2.7",
    "tsup": "8.5.1",
    "typescript": "7.0.2",
    "vitest": "4.1.10"
  }
}
```

註：`@fontsource/*` 之後（計劃二）會移到 `dependencies`；Storybook、Vitest 周邊（vite、jsdom、@types/react 等）在 Task 7、8 用指令安裝（自動取最新版，不憑記憶寫版本號）。

- [ ] **Step 2: 安裝並驗證**

```bash
rm -f yarn.lock && rm -rf node_modules
npm install
npm ls @mui/material typescript react
```

Expected: 安裝無 ERESOLVE 錯誤；三個套件版本與宣告一致。若 React 19 與某依賴 peer 衝突，記錄錯誤全文回報使用者再決定（不要自行 `--force`）。

- [ ] **Step 3: 請使用者 review，核准後 commit**

```bash
git add package.json package-lock.json
git commit -m "chore: v2 依賴宣告（MUI 9 / React 19 / TS 7 / tsup / Vitest，版本皆經查證）"
```

---

### Task 6: TypeScript 7 + tsup 建置鏈

**Files:**
- Rewrite: `tsconfig.json`
- Create: `tsup.config.ts`
- Create: `src/index.ts`（僅 smoke 匯出）

**Interfaces:**
- Consumes: Task 5 的依賴
- Produces: `npm run build` 產出 `build/index.js|index.cjs|index.d.ts`；`src/index.ts` 匯出 `SWAP_UI_VERSION: string`（計劃二會擴充此檔）。**此 Task 是 TS 7.0.2 相容性的首要驗證點。**

- [ ] **Step 1: 寫 tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src"],
  "exclude": ["legacy", "node_modules", "build"]
}
```

- [ ] **Step 2: 寫 tsup.config.ts 與 smoke 進入點**

`tsup.config.ts`：

```ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  outDir: "build",
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "@mui/material",
    "@emotion/react",
    "@emotion/styled",
  ],
});
```

`src/index.ts`：

```ts
export const SWAP_UI_VERSION = "2.0.0-alpha.0";
```

- [ ] **Step 3: 執行建置驗證（TS 7 相容性檢查點）**

```bash
npm run typecheck && npm run build && ls build/
node -e "console.log(require('./build/index.cjs').SWAP_UI_VERSION)"
```

Expected: typecheck 無錯；build 產出 `index.js index.cjs index.d.ts` 與 sourcemap；node 印出 `2.0.0-alpha.0`。

**若 TS 7.0.2 失敗**（tsup 的 dts 產生或 typecheck 報工具鏈不相容）：記錄錯誤全文 → `npm i -D typescript@6.0.3` 重試 → 仍失敗再 `npm i -D typescript@5.9.3` → 將最終採用版本與原因回報使用者並記入 commit 訊息（設計文件 §9 的既定退階路徑）。

- [ ] **Step 4: 請使用者 review，核准後 commit**

```bash
git add tsconfig.json tsup.config.ts src/index.ts
git commit -m "build: TS + tsup 建置鏈（ESM/CJS 雙格式 + d.ts）"
```

---

### Task 7: Vitest + Testing Library 測試鏈

**Files:**
- Create: `vitest.config.ts`
- Create: `src/smoke.test.tsx`
- Modify: `tsconfig.json`（include 加測試設定）、`package.json`（devDeps 由指令新增）

**Interfaces:**
- Consumes: Task 6 的 tsconfig / src
- Produces: `npm test` 綠燈；計劃二、三的元件測試沿用此設定（jsdom 環境、RTL render）。

- [ ] **Step 1: 安裝測試周邊（指令取最新版）**

```bash
npm i -D vite jsdom @types/react @types/react-dom @testing-library/jest-dom
```

- [ ] **Step 2: 寫 vitest.config.ts 與 smoke 測試**

`vitest.config.ts`：

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});
```

`vitest.setup.ts`：

```ts
import "@testing-library/jest-dom/vitest";
```

`src/smoke.test.tsx`（先寫測試——它同時驗證 jsx、jsdom、RTL、MUI 四者能一起運作）：

```tsx
import { render, screen } from "@testing-library/react";
import Button from "@mui/material/Button";
import { SWAP_UI_VERSION } from "./index";

test("版本常數正確", () => {
  expect(SWAP_UI_VERSION).toBe("2.0.0-alpha.0");
});

test("MUI v9 元件可在測試環境渲染", () => {
  render(<Button>hello</Button>);
  expect(screen.getByRole("button", { name: "hello" })).toBeInTheDocument();
});
```

tsconfig.json 的 `include` 改為 `["src", "vitest.config.ts", "vitest.setup.ts", "tsup.config.ts"]`，`compilerOptions` 加 `"types": ["vitest/globals", "@testing-library/jest-dom"]`。

- [ ] **Step 3: 執行驗證**

```bash
npm test
```

Expected: 2 passed。（此測試不經歷「先紅後綠」——它驗證的是環境而非行為，環境成功即綠。）

- [ ] **Step 4: 請使用者 review，核准後 commit**

```bash
git add vitest.config.ts vitest.setup.ts src/smoke.test.tsx tsconfig.json package.json package-lock.json
git commit -m "test: Vitest + Testing Library 測試鏈（jsdom + MUI 渲染 smoke）"
```

---

### Task 8: Storybook 10

**Files:**
- Create: `.storybook/main.ts`、`.storybook/preview.ts`（由 init 產生後精簡）
- Create: `src/smoke.stories.tsx`
- Modify: `package.json`（init 自動加依賴與 scripts）

**Interfaces:**
- Consumes: Task 6–7 的工具鏈
- Produces: `npm run storybook` 可開、`npm run storybook:build` 可建置。計劃二的 variant stories、計劃三的元件 stories、以及驗收第 5 項（Chrome MCP 實測）都跑在這上面。

- [ ] **Step 1: 執行官方 init（React + Vite）**

```bash
npx storybook@10.5.0 init --builder vite --no-dev
```

Expected: 產生 `.storybook/`，package.json 增加 storybook 相關 devDeps。init 產生的範例 stories（`src/stories/`）整目錄刪除：

```bash
rm -rf src/stories
```

- [ ] **Step 2: 寫 smoke story**

`src/smoke.stories.tsx`：

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "@mui/material/Button";

const meta: Meta<typeof Button> = {
  title: "Smoke/MUI Button",
  component: Button,
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  args: { children: "swap-ui v2 toolchain OK", variant: "contained" },
};
```

註：import 路徑 `@storybook/react-vite` 以 init 實際產生的 `.storybook/main.ts` framework 欄位為準，若不同則跟隨 init 的寫法。

- [ ] **Step 3: 驗證 dev 與 build**

```bash
npm run storybook:build && ls storybook-static/index.html
npm run storybook &
sleep 15 && curl -sI http://localhost:6006 | head -1 && kill %1
```

Expected: build 產出 `storybook-static/`；dev server 回 `HTTP/1.1 200 OK`。並將 `storybook-static/` 加入 `.gitignore`（v2 不 commit 建置產物）。

- [ ] **Step 4: 收尾驗證——三條鏈全綠**

```bash
npm run typecheck && npm test && npm run build && npm run storybook:build && echo "ALL GREEN"
```

Expected: `ALL GREEN`。

- [ ] **Step 5: 請使用者 review，核准後 commit**

```bash
git add .storybook src/smoke.stories.tsx .gitignore package.json package-lock.json
git commit -m "build: Storybook 10（Vite builder）+ smoke story，Phase 1 工具鏈完成"
```

---

### Task 9: CI（GitHub Actions）

**Files:**
- Create: `.github/workflows/ci.yml`

**Interfaces:**
- Consumes: Task 6–8 的 npm scripts
- Produces: push / PR 時自動跑 typecheck + test + build + storybook build（設計文件 Phase 1 要求的 CI）。

- [ ] **Step 1: 寫 workflow**

```yaml
name: CI
on:
  push:
    branches: [master, v2]
  pull_request:

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: npm
      - run: npm ci
      - run: npm run typecheck
      - run: npm test
      - run: npm run build
      - run: npm run storybook:build
```

- [ ] **Step 2: 本地等效驗證（repo 無法本地跑 Actions，驗證指令序列即可）**

```bash
npm ci && npm run typecheck && npm test && npm run build && npm run storybook:build && echo "CI STEPS GREEN"
```

Expected: `CI STEPS GREEN`。

- [ ] **Step 3: 請使用者 review，核准後 commit 並 push 觀察 Actions**

```bash
git add .github/workflows/ci.yml
git commit -m "ci: typecheck + test + build + storybook build"
```

push 後到 GitHub Actions 頁面確認 workflow 綠燈（push 需使用者同意）。

---

## 計劃完成的定義

- `master` 上有：元件審計表、v1 視覺基準截圖、效能基準文件（各自經使用者 review 後 commit）
- `v2` 分支上：`npm run typecheck / test / build / storybook:build` 全綠，TS 7 相容性已驗證（或已依退階路徑定版並回報），CI workflow 就緒
- 下一步：依審計表撰寫計劃二（Phase 2 theme 核心）
