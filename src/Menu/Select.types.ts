export interface SelectProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  label?: string;
  disabled?: boolean;
  type?: string;
  helperText?: React.ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  rowsMax?: number | string;
  rows?: number | string;
  multiline?: boolean;
  value?: any;
  onChange?: (e: any) => void;
  InputProps?: object;
  autoFocus?: boolean;
  placeholder?: string;
  required?: boolean;
  select?: boolean;
  defaultValue?: string;
  width?: number | string;
  height?: number | string;
  vertical?: "top" | "center" | "bottom" | number;
  horizontal?: "left" | "center" | "right" | number;
  open?: boolean;
  placeholderStyle?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
  helperTextStyle?: React.CSSProperties;
}
