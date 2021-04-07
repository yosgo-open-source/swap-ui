export interface TabProps {
  style?: React.CSSProperties;
  label?: React.ReactNode;
  disabled?: boolean;
  icon?: any;
  wrapped?: boolean;
  selected?: boolean;
  value?: any;
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
  margin?: number | string;
  fontSize?: number | string;
  noIndicator?: boolean;
  animation?: boolean;
}
