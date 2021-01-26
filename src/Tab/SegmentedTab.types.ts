export interface SegmentedTabProps {
  style?: React.CSSProperties;
  label?: React.ReactNode;
  disabled?: boolean;
  icon?: any;
  wrapped?: boolean;
  selected?: boolean;
  value?: any;
  onClick?: () => void;
}
