import type { TabProps as MuiTabProps } from "@mui/material/Tab";
import type { TabsProps as MuiTabsProps } from "@mui/material/Tabs";

export interface SegmentedTabProps extends MuiTabProps {
  width?: number | string;
  height?: number | string;
  fontSize?: number | string;
  flex?: number;
}

export interface SegmentedTabsProps extends MuiTabsProps {
  width?: number | string;
  /** 選中底色以 indicator 滑動呈現（切換時有滑動動畫） */
  slide?: boolean;
}
