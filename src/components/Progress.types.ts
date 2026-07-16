import type { BoxProps } from "@mui/material/Box";

export interface ProgressProps extends Omit<BoxProps, "onClick"> {
  /** 目前進行到第幾步（1 起算） */
  step: number;
  /** 總步數 */
  count: number;
  /** 各步驟下方標籤 */
  label?: React.ReactNode[];
  /** 步驟圓直徑，預設 24 */
  size?: number | string;
  width?: number | string;
}
