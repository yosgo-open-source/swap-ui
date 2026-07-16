import type { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";

export type TextFieldProps = Omit<MuiTextFieldProps, "variant"> & {
  width?: number | string;
  height?: number | string;
};
