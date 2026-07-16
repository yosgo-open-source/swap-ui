import type { BoxProps } from "@mui/material/Box";

export interface ChipProps extends Omit<BoxProps, "color"> {
  variant?: "neutral" | "primary" | "success" | "danger";
  outlined?: boolean;
  contained?: boolean;
  width?: string | number;
  height?: string | number;
  label?: React.ReactNode;
  icon?: React.ReactNode;
}
