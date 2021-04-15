import { CheckboxProps } from "@material-ui/core";

export interface MyCheckBoxProps extends CheckboxProps {
  label?: string | React.ReactNode;
  labelPlacement?: "top" | "start" | "bottom" | "end";
}
