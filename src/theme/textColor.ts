import { swapColors } from "./tokens";

const c = swapColors;

// 攤平所有色階為單一 token→hex 表（鍵皆唯一：primary50…、secondary…、danger…、success…、white、black100…）
const tokenMap: Record<string, string> = {
  ...c.primary,
  ...c.secondary,
  ...c.danger,
  ...c.success,
  ...c.black,
};

export type SwapTextColor = "primary" | "secondary" | "tertiary" | keyof typeof tokenMap;

export function resolveSwapTextColor(color?: string, mode?: "" | "dark"): string {
  const dark = mode === "dark";
  if (color === "primary") return dark ? c.black.white : c.black.black1000;
  if (color === "secondary") return dark ? c.black.black500 : c.black.black800;
  if (color === "tertiary") return dark ? c.black.black600 : c.black.black700;
  if (color && color in tokenMap) return tokenMap[color];
  return c.black.black1000;
}
