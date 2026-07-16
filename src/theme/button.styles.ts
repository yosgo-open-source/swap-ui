import { swapColors } from "./tokens";

const c = swapColors;

export const buttonRootStyles = {
  textTransform: "unset" as const,
  borderRadius: "8px",
  fontWeight: 700,
  lineHeight: 1.125,
};

// 每個 variant 一組色彩；狀態（hover/active/focus-visible/disabled）以巢狀選擇器表達
const variantColor = [
  {
    variant: "primary",
    color: c.black.white,
    backgroundColor: c.primary.primary400,
    border: `1px solid ${c.primary.primary600}`,
    hoverBg: c.primary.primary300,
    activeBg: c.primary.primary500,
    focusShadow: "0px 0px 0px 4px #D7DFF8",
  },
  {
    variant: "secondary",
    color: c.primary.primary400,
    backgroundColor: c.black.white,
    border: `1px solid ${c.primary.primary400}`,
    hoverBg: c.primary.primary50,
    activeBg: c.primary.primary100,
    focusShadow: "0px 0px 0px 4px #D7DFF8",
  },
  {
    variant: "tertiary",
    color: c.black.black800,
    backgroundColor: c.black.black400,
    border: "none",
    hoverBg: c.black.black500,
    activeBg: c.black.black600,
    focusShadow: "0px 0px 0px 4px rgba(0, 0, 0, 0.1)",
  },
  {
    variant: "text",
    color: c.primary.primary400,
    backgroundColor: c.black.white,
    border: "none",
    hoverBg: c.primary.primary50,
    activeBg: c.primary.primary100,
    focusShadow: "0px 0px 0px 4px #D7DFF8",
  },
  {
    variant: "black",
    color: c.black.black800,
    backgroundColor: c.black.white,
    border: "none",
    hoverBg: c.black.black400,
    activeBg: c.black.black500,
    focusShadow: "0px 0px 0px 4px #CCCCCC",
  },
  {
    variant: "danger",
    color: c.black.white,
    backgroundColor: c.danger.danger800,
    border: `1px solid ${c.danger.dangerA11y}`,
    hoverBg: c.danger.danger600,
    activeBg: c.danger.danger900,
    focusShadow: "0px 0px 0px 4px #FFCCD0",
  },
] as const;

const sizeStyle = [
  { size: "small", height: "40px", padding: "12px 16px", fontSize: 14 },
  { size: "medium", height: "48px", padding: "15px 24px", fontSize: 16 },
  { size: "large", height: "56px", padding: "19px 32px", fontSize: 16 },
] as const;

export const buttonVariants = [
  ...variantColor.map((v) => ({
    props: { variant: v.variant },
    style: {
      color: v.color,
      backgroundColor: v.backgroundColor,
      border: v.border,
      "&:hover": { backgroundColor: v.hoverBg },
      "&:active": { backgroundColor: v.activeBg },
      "&:focus-visible": { boxShadow: v.focusShadow },
      // 只夾透明度：文字色/底色由 root 提供，覆蓋會擋掉 MUI loading 時隱藏文字的機制
      "&:disabled": { opacity: 0.4 },
      // loading spinner 顏色跟隨 variant 文字色（否則 MUI 預設灰 rgba(0,0,0,0.26) 幾乎隱形）
      "& .MuiButton-loadingIndicator": { color: v.color },
    },
  })),
  ...sizeStyle.map((s) => ({
    props: { size: s.size },
    style: { height: s.height, padding: s.padding, fontSize: s.fontSize },
  })),
];
