import type { BoxProps } from "@mui/material/Box";

export interface CardButtonItem {
  title?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "text" | "tertiary" | "black" | "danger";
  loading?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export interface CardProps extends BoxProps {
  width?: number | string;
  height?: number | string;
  bodyStyle?: React.CSSProperties;
  buttons?: CardButtonItem[];
  loading?: boolean;
}
