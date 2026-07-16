import type { TooltipProps } from "./Tooltip.types";

type ModalButtonTooltip = Omit<TooltipProps, "children">;

export interface ModalButtonItem {
  title?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary" | "text" | "tertiary" | "black" | "danger";
  loading?: boolean;
  tooltip?: ModalButtonTooltip;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  helpText?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: "medium" | "large" | "small" | "extraSmall";
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  mobile?: boolean;
  fullWidth?: boolean;
  fullScreen?: boolean;
  multiline?: boolean;
  checked?: boolean;
  failed?: boolean;
  icon?: React.ReactNode;
  /** icon/checked/failed 圖示顏色（SWAP token 名） */
  iconColor?: string;
  checkIconColor?: string;
  headpadding?: number | string;
  headChildren?: React.ReactNode;
  titleStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  bodyPadding?: number;
  bodyMaxHeight?: number | string;
  label?: React.ReactNode;
  buttonFullWidth?: boolean;
  footerDisplayColumn?: boolean;
  secondaryButton?: ModalButtonItem;
  primaryButton?: ModalButtonItem;
  disUnderLine?: boolean;
  disCloseIcon?: boolean;
  /** 退場鎖定：內容變暗、不可互動 */
  onExit?: boolean;
}
