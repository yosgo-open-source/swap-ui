export interface MenuItemProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  key?: any;
  value?: any;
  onClick?: () => void;
  disabled?: boolean;
  width?: number | string;
  height?: number | string;
  hoverBackgroundColor?: string;
  hoverFontColor?: string;
  hoverIconColor?: string;
  rippleColor?: string;
}
