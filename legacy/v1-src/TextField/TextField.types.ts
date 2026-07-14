import { TextFieldProps } from "@material-ui/core";

export interface MyTextFieldProps
  extends Pick<TextFieldProps, Exclude<keyof TextFieldProps, "variant">> {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
}
