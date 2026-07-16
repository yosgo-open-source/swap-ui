import { resolveSwapTextColor, swapTokenMap } from "./textColor";

test("swapTokenMap 攤平表", () => {
  expect(swapTokenMap.primary400).toBe("#4862CC");
  expect(swapTokenMap.black1000).toBe("#000000");
  expect(swapTokenMap.white).toBe("#FFFFFF");
});

test("語意色隨 mode 變", () => {
  expect(resolveSwapTextColor("primary")).toBe("#000000"); // light: black1000
  expect(resolveSwapTextColor("primary", "dark")).toBe("#FFFFFF"); // dark: white
  expect(resolveSwapTextColor("secondary")).toBe("#4B4B4B"); // black800
  expect(resolveSwapTextColor("secondary", "dark")).toBe("#CCCCCC"); // black500
  expect(resolveSwapTextColor("tertiary")).toBe("#6F6F6F"); // black700
  expect(resolveSwapTextColor("tertiary", "dark")).toBe("#909090"); // black600
});

test("token 名不隨 mode 變", () => {
  expect(resolveSwapTextColor("primary400")).toBe("#4862CC");
  expect(resolveSwapTextColor("primary400", "dark")).toBe("#4862CC");
  expect(resolveSwapTextColor("danger800")).toBe("#D40F14");
  expect(resolveSwapTextColor("white")).toBe("#FFFFFF");
  expect(resolveSwapTextColor("black500")).toBe("#CCCCCC");
});

test("未指定或未知 color 預設 black1000", () => {
  expect(resolveSwapTextColor()).toBe("#000000");
  expect(resolveSwapTextColor("nope")).toBe("#000000");
});
