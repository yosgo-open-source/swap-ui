import { BoxProps } from "@material-ui/core";
import React from "react";

export interface ProgressProps
  extends Pick<BoxProps, Exclude<keyof BoxProps, "onClick">> {
  step: number;
  count: number;
  label?: Array<React.ReactNode>;
  size?: number | string;
  stepWidth?: number | string;
  onClick?: Array<() => void>;
}
