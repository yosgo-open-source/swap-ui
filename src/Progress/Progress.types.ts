import { BoxProps } from "@material-ui/core";

export interface ProgressProps extends BoxProps {
  step: number;
  count: number;
  complete?: boolean;
  current?: boolean;
  upcoming?: boolean;
}
