import type { SnackbarProps as MuiSnackbarProps } from "@mui/material/Snackbar";

export interface SnackbarProps extends MuiSnackbarProps {
  transitionDirection?: "left" | "right" | "up" | "down";
  width?: string | number;
  height?: string | number;
  variant?: "success" | "error";
  revertButton?: {
    label?: React.ReactNode;
    onClick?: () => void;
  };
  closeIcon?: {
    icon?: React.ReactNode;
    hoverColor?: string;
    onClick?: () => void;
  };
  icon?: React.ReactNode;
  checkIcon?: boolean;
  errorIcon?: boolean;
}
