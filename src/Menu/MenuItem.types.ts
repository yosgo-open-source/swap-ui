export interface MenuItemProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  key?: any;
  value?: any;
  onClick?: () => void;
  disabled?: boolean;
  width?: number;
}
