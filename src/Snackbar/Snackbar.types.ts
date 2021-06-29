import { SnackbarProps } from "@material-ui/core";
import React from "react";

export interface MySnackbarProps extends SnackbarProps {
  transitionDirection?: "left" | "right" | "up" | "down";
  width?: number | string;
  height?: number | string;
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
