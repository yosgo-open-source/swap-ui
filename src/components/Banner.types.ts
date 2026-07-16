import type { BoxProps } from "@mui/material/Box";

export interface BannerProps extends BoxProps {
  variant?: "info" | "normal" | "success" | "warning" | "error";
  mobile?: boolean;
  width?: string | number;
  height?: string | number;
  icon?: React.ReactNode;
}
