import { BoxProps } from "@material-ui/core";

export interface BannerProps extends BoxProps {
  children?: React.ReactNode;
  variant?: "info" | "normal" | "success" | "warning" | "error";
  mobile?: boolean;
  width?: string | number;
  height?: string | number;
  icon?: React.ReactNode;
}
