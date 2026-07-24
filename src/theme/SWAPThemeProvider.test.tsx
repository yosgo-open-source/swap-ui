import { readFileSync } from "node:fs";
import { join } from "node:path";
import { render, screen } from "@testing-library/react";
import Button from "@mui/material/Button";
import { SWAPThemeProvider } from "./SWAPThemeProvider";

test("Provider 渲染 children", () => {
  render(
    <SWAPThemeProvider>
      <Button>hello</Button>
    </SWAPThemeProvider>,
  );
  expect(screen.getByRole("button", { name: "hello" })).toBeInTheDocument();
});

// 守門：M PLUS 只能載 latin 子集。完整版含 CJK 字形，會以日式読点（貼左下）
// 搶走中文標點的渲染；latin 子集不含 CJK，標點才會 fallback 到 Noto Sans TC（置中）。
// jsdom 無法量測字形位置，故以源碼 import 鎖住此行為（實測紀錄見 2026-07-23 會話）。
test("M PLUS 僅載入 latin 子集（中文標點須由 Noto Sans TC 渲染）", () => {
  const src = readFileSync(join(__dirname, "SWAPThemeProvider.tsx"), "utf8");
  expect(src).toMatch(/@fontsource\/m-plus-rounded-1c\/latin-400\.css/);
  expect(src).toMatch(/@fontsource\/m-plus-rounded-1c\/latin-700\.css/);
  // 不得載入完整版（含 CJK 子集）
  expect(src).not.toMatch(/@fontsource\/m-plus-rounded-1c\/(400|700)\.css/);
  // Noto Sans TC 維持完整載入（負責所有 CJK）
  expect(src).toMatch(/@fontsource\/noto-sans-tc\/400\.css/);
  expect(src).toMatch(/@fontsource\/noto-sans-tc\/700\.css/);
});
