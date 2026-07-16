/**
 * 尺寸值正規化：純數字字串（"100"）轉為數字，讓 emotion 自動補 px。
 * 使 100、"100"、"100px"、"fit-content"、"50%" 皆為有效輸入。
 */
export function cssSize(v: number | string): number | string;
export function cssSize(v?: number | string): number | string | undefined;
export function cssSize(v?: number | string): number | string | undefined {
  if (typeof v === "string" && /^\d+(\.\d+)?$/.test(v.trim())) return Number(v);
  return v;
}
