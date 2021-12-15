import { BoxProps } from "@material-ui/core";
import { ModalProps } from "../Modal/Modal.types";

export interface DatePickerProps extends BoxProps {
  format?: "year" | "month" | "day";
  open?: boolean;
  onClose?: () => void;
  mobile?: boolean;
  ModalProps?: Pick<ModalProps, Exclude<keyof ModalProps, "open" | "onClose">>;
  min?: string;
  max?: string;
  defaultValue?: string;
  getValue?: (date: string) => void;
  value?: string;
}
