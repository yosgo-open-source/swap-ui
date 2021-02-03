export interface SnackbarProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  open: boolean;
  anchorOrigin?: {
    horizontal: "center" | "left" | "right";
    vertical: "bottom" | "top";
  };
  autoHideDuration?: number;
  onClose?: () => void;
  message?: React.ReactNode;
  action?: React.ReactNode;
  onEntered?: () => void;
  onExited?: () => void;
  onEntering?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  transitionDirection?: "left" | "right" | "up" | "down";
  key?: any;
  transitionDuration?:
    | number
    | { appear?: number; enter?: number; exit?: number };
  width?: number | string;
  height?: number | string;
  variant?: "success" | "error";
}
