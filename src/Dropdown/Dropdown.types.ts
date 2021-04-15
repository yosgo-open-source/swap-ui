import { SelectProps } from "@material-ui/core";

export interface DropdownProps extends SelectProps {
  width?: number | string;
  height?: number;
  helperText?: React.ReactNode;
  helperTextStyle?: React.CSSProperties;
  formControlStyle?: React.CSSProperties;
}
