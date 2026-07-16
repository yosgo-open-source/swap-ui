import type * as React from "react";
import type {
  AutocompleteProps,
  AutocompleteRenderInputParams,
} from "@mui/material/Autocomplete";

type BaseProps = Omit<
  AutocompleteProps<unknown, true, boolean | undefined, boolean | undefined>,
  "title" | "renderInput" | "open" | "value"
>;

export interface AutoCompleteProps extends Partial<BaseProps> {
  /** Popper 是否開啟（此元件為常開選單型，由使用端控制） */
  open?: boolean;
  /** Popper 位置（v1 宣告但未生效；v2 起實際生效，預設 bottom-start） */
  placement?:
    | "bottom-end" | "bottom-start" | "bottom"
    | "left-end" | "left-start" | "left"
    | "right-end" | "right-start" | "right"
    | "top-end" | "top-start" | "top";
  anchorEl?: null | HTMLElement;
  title?: React.ReactNode;
  placeholder?: string;
  width?: string | number;
  optionsMaxHeight?: string | number;
  /** 調整 Popper 位置（對應 v1：margin 偏移，預設 vertical -65 / horizontal 0） */
  anchorOrigin?: { horizontal?: string | number; vertical?: string | number };
  /** 已選中的顯示內容（有值時顯示已選面板） */
  value?: React.ReactNode;
  /** 關閉自由輸入（無選項時只顯示「無此選項」） */
  disableFreeInput?: boolean;
  /** 自由輸入連結文案（預設「使用」） */
  addNewOptionsText?: string;
  /** 使用者點「使用 『輸入值』」時回呼 */
  handleNoOptionsValueChange?: (inputValue: string) => void;
  helperText?: React.ReactNode;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
}
