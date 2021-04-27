import { RadioProps } from "@material-ui/core";

export interface RadioMyButtonProps extends RadioProps {
  label?: string | React.ReactNode;
  labelPlacement?: "top" | "start" | "bottom" | "end";
  disableHover?: boolean;
}
