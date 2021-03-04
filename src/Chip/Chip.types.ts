import { BoxProps } from "@material-ui/core";

export interface ChipProps extends BoxProps {
  icon?: React.ReactNode;
  variant?: "neutral" | "primary" | "success" | "danger";
  width?: string | number;
  height?: string | number;
  label?: string | React.ReactNode;
  outlined?: boolean;
  contained?: boolean;
}
