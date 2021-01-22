export interface CheckBoxProps {
  style?: React.CSSProperties;
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
  label?: string;
  labelPlacement?: "top" | "start" | "bottom" | "end";
}
