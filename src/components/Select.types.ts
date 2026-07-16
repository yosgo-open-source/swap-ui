import type * as React from "react";
import type { SelectChangeEvent } from "@mui/material/Select";

export interface SelectProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  helperText?: React.ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  type?: string;
  /** 傳入底層 input 的屬性（v1 的 InputProps，對應 MUI Select 的 inputProps） */
  InputProps?: object;
  /** @deprecated v1 起即無作用，僅為型別相容保留 */
  label?: string;
  /** @deprecated v1 起即無作用，僅為型別相容保留 */
  rows?: number | string;
  /** @deprecated v1 起即無作用，僅為型別相容保留 */
  rowsMax?: number | string;
  /** @deprecated v1 起即無作用，僅為型別相容保留 */
  multiline?: boolean;
  /** @deprecated v1 起即無作用，僅為型別相容保留 */
  select?: boolean;
  value?: unknown;
  onChange?: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
  autoFocus?: boolean;
  placeholder?: string;
  required?: boolean;
  defaultValue?: unknown;
  width?: number | string;
  height?: number;
  vertical?: "top" | "center" | "bottom" | number;
  horizontal?: "left" | "center" | "right" | number;
  open?: boolean;
  placeholderStyle?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
  helperTextStyle?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  transformOrigin?: {
    horizontal: "center" | "left" | "right" | number;
    vertical: "bottom" | "center" | "top" | number;
  };
  paddingLeft?: number;
  paddingTop?: number;
  dropdown?: boolean;
}
