import { SnackbarProps } from "@material-ui/core";

export interface MySnackbarProps extends SnackbarProps {
  transitionDirection?: "left" | "right" | "up" | "down";
  width?: number | string;
  height?: number | string;
  variant?: "success" | "error";
}
