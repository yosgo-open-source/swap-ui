export interface RadioButtonProps {
  style?: React.CSSProperties;
  checked?: boolean;
  onChange?: () => void;
  label?: string;
  labelPlacement?: "top" | "start" | "bottom" | "end";
}
