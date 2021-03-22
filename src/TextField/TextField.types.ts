import { OutlinedTextFieldProps } from "@material-ui/core";

export interface MyTextFieldProps
  extends Pick<
    OutlinedTextFieldProps,
    Exclude<keyof OutlinedTextFieldProps, "variant">
  > {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
}
