import { BoxProps } from "@material-ui/core";

export interface CardProps extends BoxProps {
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
  bodyStyle?: React.CSSProperties;
  buttons?: Array<{
    title?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    variant?:
      | "primary"
      | "secondary"
      | "text"
      | "tertiary"
      | "black"
      | "danger";
    loading?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
  }>;
  loading?: boolean;
}
