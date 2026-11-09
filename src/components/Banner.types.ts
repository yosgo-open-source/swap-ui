import type { BoxProps } from "@mui/material/Box";

export interface BannerProps extends BoxProps {
  variant?: "info" | "normal" | "success" | "warning" | "error";
  /** 已無作用（icon 一律對齊第一行文字），保留以維持相容 */
  mobile?: boolean;
  width?: string | number;
  height?: string | number;
  icon?: React.ReactNode;
}
