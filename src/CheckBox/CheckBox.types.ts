export interface CheckBoxProps {
  style?: React.CSSProperties;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: any) => void;
  label?: string;
  labelPlacement?: "top" | "start" | "bottom" | "end";
}
