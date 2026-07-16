import type { RadioProps as MuiRadioProps } from "@mui/material/Radio";

export interface RadioButtonProps extends MuiRadioProps {
  label?: React.ReactNode;
  labelPlacement?: "top" | "start" | "bottom" | "end";
  disableHover?: boolean;
}
