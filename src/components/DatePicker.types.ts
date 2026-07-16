import type { ModalProps } from "./Modal.types";

export interface DatePickerProps {
  /** 選擇精度：年 / 月 / 日（預設 day） */
  format?: "year" | "month" | "day";
  open?: boolean;
  onClose?: () => void;
  mobile?: boolean;
  ModalProps?: Omit<ModalProps, "open" | "onClose">;
  /** 最小/最大可選日期（YYYY-MM-DD 等 dayjs 可解析字串） */
  min?: string;
  max?: string;
  defaultValue?: string;
  value?: string;
  /** 選定回呼；字串格式沿 v1：year "YYYY"、month "YYYY-M"、day "YYYY-M-D"（不補零） */
  getValue?: (date: string) => void;
}
