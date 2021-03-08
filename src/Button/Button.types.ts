export interface ButtonProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary" | "text" | "tertiary" | "black";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  minWidth?: number | string;
  width?: number | string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}
