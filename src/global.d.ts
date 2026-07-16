// @fontsource 等 CSS side-effect import 的型別宣告
declare module "*.css";

// SVG 資產（vite 回傳 URL、tsup dataurl 回傳 base64 字串，皆可作 img src）
declare module "*.svg" {
  const src: string;
  export default src;
}
