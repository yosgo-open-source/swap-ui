export interface TabsProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  centered?: boolean;
  value?: any;
  onChange?: (e: any, index: number) => void;
  variant?: "fullWidth";
}
