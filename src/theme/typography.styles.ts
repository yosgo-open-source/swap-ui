type VariantStyle = {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: string;
};

// 「規格表」——以程式生成 32 個 variant，避免手抄 32 段
const FONT_SIZE: Record<string, string> = {
  d1: "4.5rem", d2: "4rem", d3: "3.5rem", d4: "3rem",
  h1: "2.5rem", h2: "2rem", h3: "1.75rem", h4: "1.5rem", h5: "1.25rem", h6: "1.125rem",
  title: "1rem", subtitle: "0.875rem",
  body1: "1rem", body2: "0.875rem",
  caption1: "0.75rem", caption2: "0.75rem",
  small1: "0.6875rem", small2: "0.6875rem",
  tiny1: "0.625rem", tiny2: "0.625rem",
  button_l: "1rem", button_s: "0.875rem",
};

// 有 _loose 變體的 base 名（button_l/s 無 _loose）
const LOOSE_BASES = [
  "title", "subtitle", "body1", "body2",
  "caption1", "caption2", "small1", "small2", "tiny1", "tiny2",
];

const WEIGHT_400 = new Set(["body1", "body2", "caption2", "small2", "tiny2"]); // 其餘皆 700
const LH_125 = new Set(["d1", "d2", "d3", "h1", "h2", "h3"]);
const LH_1125 = new Set(["button_l", "button_s"]);

function baseName(variant: string): string {
  return variant.endsWith("_loose") ? variant.slice(0, -"_loose".length) : variant;
}

function weightOf(variant: string): number {
  return WEIGHT_400.has(baseName(variant)) ? 400 : 700;
}

function lineHeightOf(variant: string): number {
  if (variant.endsWith("_loose")) return 1.6;
  if (LH_125.has(variant)) return 1.25;
  if (LH_1125.has(variant)) return 1.125;
  return 1.4;
}

const ALL_VARIANTS: string[] = [
  "d1", "d2", "d3", "d4",
  "h1", "h2", "h3", "h4", "h5", "h6",
  ...Object.keys(FONT_SIZE).filter((k) => !/^d\d|^h\d/.test(k)),
  ...LOOSE_BASES.map((b) => `${b}_loose`),
];

// 去重並固定順序
export const SWAP_TYPOGRAPHY_VARIANTS: readonly string[] = Array.from(new Set(ALL_VARIANTS));

export const swapTypographyVariants: Record<string, VariantStyle> = Object.fromEntries(
  SWAP_TYPOGRAPHY_VARIANTS.map((v) => [
    v,
    {
      fontSize: FONT_SIZE[baseName(v)],
      fontWeight: weightOf(v),
      lineHeight: lineHeightOf(v),
      letterSpacing: "0em",
    },
  ]),
);

// variant → HTML 標籤（heading 用語意標籤，display 用 h1，button 用 span，其餘 p）
export const swapTypographyVariantMapping: Record<string, string> = Object.fromEntries(
  SWAP_TYPOGRAPHY_VARIANTS.map((v) => {
    if (/^h[1-6]$/.test(v)) return [v, v];
    if (/^d[1-4]$/.test(v)) return [v, "h1"];
    if (v.startsWith("button")) return [v, "span"];
    return [v, "p"];
  }),
);
