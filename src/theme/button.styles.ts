import { swapColors } from "./tokens";

const c = swapColors;

export const buttonRootStyles = {
  textTransform: "unset" as const,
  borderRadius: "8px",
  fontWeight: 700,
  lineHeight: 1.125,
  whiteSpace: "nowrap" as const, // v1 將 children 包 nowrap 容器：按鈕文字不換行
  // disabled/loading 顯示禁止游標。MUI 預設 pointer-events:none 會吃掉滑鼠事件使 cursor 無效，
  // 開回 auto——原生 <button disabled> 仍擋 click，安全；hover 樣式另以 :not(:disabled) 守衛
  "&.Mui-disabled": {
    pointerEvents: "auto" as const,
    cursor: "not-allowed",
  },
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
    disabledColor: c.black.black700, // 灰字＝停用訊號；on primary50 ≈ 4.1:1
    disabledBg: c.primary.primary50,
    disabledBorder: `1px solid ${c.primary.primary100}`,
    spinnerColor: c.primary.primary400,
  },
  {
    variant: "secondary",
    color: c.primary.primary400,
    backgroundColor: c.black.white,
    border: `1px solid ${c.primary.primary400}`,
    hoverBg: c.primary.primary50,
    activeBg: c.primary.primary100,
    focusShadow: "0px 0px 0px 4px #D7DFF8",
    disabledColor: c.black.black600,
    disabledBg: c.black.white,
    disabledBorder: `1px solid ${c.black.black500}`,
    spinnerColor: c.primary.primary300,
  },
  {
    variant: "tertiary",
    color: c.black.black800,
    backgroundColor: c.black.black400,
    border: "none",
    hoverBg: c.black.black500,
    activeBg: c.black.black600,
    focusShadow: "0px 0px 0px 4px rgba(0, 0, 0, 0.1)",
    disabledColor: c.black.black700, // on black200 ≈ 4.6:1
    disabledBg: c.black.black200,
    disabledBorder: "none",
    spinnerColor: c.black.black700,
  },
  {
    variant: "text",
    color: c.primary.primary400,
    backgroundColor: c.black.white,
    border: "none",
    hoverBg: c.primary.primary50,
    activeBg: c.primary.primary100,
    focusShadow: "0px 0px 0px 4px #D7DFF8",
    disabledColor: c.black.black600,
    disabledBg: c.black.white,
    disabledBorder: "none",
    spinnerColor: c.primary.primary300,
  },
  {
    variant: "black",
    color: c.black.black800,
    backgroundColor: c.black.white,
    border: "none",
    hoverBg: c.black.black400,
    activeBg: c.black.black500,
    focusShadow: "0px 0px 0px 4px #CCCCCC",
    disabledColor: c.black.black600,
    disabledBg: c.black.white,
    disabledBorder: "none",
    spinnerColor: c.black.black600,
  },
  {
    variant: "danger",
    color: c.black.white,
    backgroundColor: c.danger.danger800,
    border: `1px solid ${c.danger.dangerA11y}`,
    hoverBg: c.danger.danger600,
    activeBg: c.danger.danger900,
    focusShadow: "0px 0px 0px 4px #FFCCD0",
    disabledColor: c.black.black700, // 灰字＝停用訊號；紅系身分由 danger50 底色保留
    disabledBg: c.danger.danger50,
    disabledBorder: `1px solid ${c.danger.danger100}`,
    spinnerColor: c.danger.danger700,
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
      "&:hover:not(:disabled)": { backgroundColor: v.hoverBg },
      "&:active:not(:disabled)": { backgroundColor: v.activeBg },
      "&:focus-visible": { boxShadow: v.focusShadow },
      // disabled 用明確配色（v1 的整顆 opacity 0.4 會把文案對比稀釋到 ~2:1 難以閱讀）
      "&:disabled": {
        backgroundColor: v.disabledBg,
        border: v.disabledBorder,
      },
      // color 只能在「非 loading」時指定——loading 時 MUI 靠文字色隱藏 label，蓋掉會讓文案疊在 spinner 上
      "&:disabled:not(.MuiButton-loading)": { color: v.disabledColor },
      // spinner 色與 disabled 灰字脫鉤：維持 variant 色系（在 disabledBg 上可見，loading 視覺已驗收）
      "& .MuiButton-loadingIndicator": { color: v.spinnerColor },
    },
  })),
  ...sizeStyle.map((s) => ({
    props: { size: s.size },
    style: { height: s.height, padding: s.padding, fontSize: s.fontSize },
  })),
];
