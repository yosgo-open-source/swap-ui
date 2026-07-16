import type { CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";

export interface CheckBoxProps extends MuiCheckboxProps {
  label?: React.ReactNode;
  labelPlacement?: "top" | "start" | "bottom" | "end";
  disableHover?: boolean;
}
