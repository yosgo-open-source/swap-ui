import { TooltipProps } from "@material-ui/core";
import React from "react";

export interface MyTooltipProps
  extends Pick<TooltipProps, Exclude<keyof TooltipProps, "children">> {
  children: React.ReactNode;
  dark?: boolean;
  light?: boolean;
  arrow?: boolean;
  margin?: string | number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  width?: string | number;
  childrenStyle?: React.CSSProperties;
}
