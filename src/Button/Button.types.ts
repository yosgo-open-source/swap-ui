import { ButtonProps } from "@material-ui/core";

type OmitButtonProps = Omit<
  ButtonProps,
  "variant" | "onClick" | "size" | "color"
>;

export interface MyButtonProps extends OmitButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "text" | "tertiary" | "black" | "danger";
  loading?: boolean;
  minWidth?: number | string;
  width?: number | string;
  size?: "small" | "medium" | "large";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
