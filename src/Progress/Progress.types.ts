import { BoxProps } from "@material-ui/core";

export interface ProgressProps
  extends Pick<BoxProps, Exclude<keyof BoxProps, "onClick">> {
  step: number;
  count: number;
  label?: Array<String>;
  size?: number | string;
  stepWidth?: number | string;
  onClick?: Array<() => void>;
}
