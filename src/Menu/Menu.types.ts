export interface MenuProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  autoFocus?: boolean;
  open?: boolean;
  anchorEl?: any;
  onClose?: () => void;
  keepMounted?: boolean;
  getContentAnchorEl?: any;
  onEnter?: () => void;
  onEntered?: () => void;
  onEntering?: () => void;
  onExit?: () => void;
  onExited?: () => void;
  onExiting?: () => void;
  anchorOrigin?: {
    horizontal: "center" | "left" | "right" | number;
    vertical: "bottom" | "center" | "top" | number;
  };
  anchorPosition?: { left: number; top: number };
}
