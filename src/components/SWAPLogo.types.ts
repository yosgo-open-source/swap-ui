export interface SWAPLogoProps {
  /** BIZ 版 logo */
  business?: boolean;
  /** 深色背景用（白字版） */
  dark?: boolean;
  size?: "small" | "middle" | "large" | string | number;
  width?: number | string;
  height?: number | string;
  /** BIZ 中文版 */
  chinese?: boolean;
  /** 黑白版 */
  black?: boolean;
  /** 只顯示圖示 */
  iconOnly?: boolean;
}
