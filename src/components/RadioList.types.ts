import type { BoxProps } from "@mui/material/Box";

export interface RadioListProps extends Omit<BoxProps, "title"> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  checked: boolean;
  /** title 下方顯示 subtitle（窄卡模式） */
  multiline?: boolean;
  /** title 與 subtitle 以直線分隔（寬卡模式） */
  line?: boolean;
  width?: string | number;
  height?: string | number;
}

export interface CheckBoxListProps extends RadioListProps {}
