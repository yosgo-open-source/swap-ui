import type { BoxProps } from "@mui/material/Box";

// Omit maxWidth/padding：Box 系統 props 已有同名，SWAP 語意需覆蓋；其餘 Box props 全部保留可傳
export interface ContainerProps extends Omit<BoxProps, "maxWidth" | "padding"> {
  maxWidth?: number | "lg" | "xl" | "xxl";
  padding?: number | "xxs" | "xs" | "sm" | "md";
}
