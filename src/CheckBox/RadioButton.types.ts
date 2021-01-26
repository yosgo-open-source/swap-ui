export interface RadioButtonProps {
  style?: React.CSSProperties;
  checked?: boolean;
  onChange?: (e: any) => void;
  label?: string;
  labelPlacement?: "top" | "start" | "bottom" | "end";
}
