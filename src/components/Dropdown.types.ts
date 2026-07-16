import type { SelectProps as MuiSelectProps } from "@mui/material/Select";

export interface DropdownProps extends Omit<MuiSelectProps, "variant"> {
  width?: number | string;
  height?: number;
  helperText?: React.ReactNode;
  helperTextStyle?: React.CSSProperties;
  formControlStyle?: React.CSSProperties;
}
