import type * as React from "react";
import type { TooltipProps as MuiTooltipProps } from "@mui/material/Tooltip";

export interface TooltipProps extends Omit<MuiTooltipProps, "children"> {
  children: React.ReactElement;
  dark?: boolean;
  light?: boolean;
  arrow?: boolean;
  margin?: string | number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  width?: number | string;
  childrenStyle?: React.CSSProperties;
}
