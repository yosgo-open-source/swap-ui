import type { TabProps as MuiTabProps } from "@mui/material/Tab";
import type { TabsProps as MuiTabsProps } from "@mui/material/Tabs";

export interface TabProps extends MuiTabProps {
  selected?: boolean;
  width?: number | string;
  height?: number | string;
  margin?: number | string;
  fontSize?: number | string;
  noIndicator?: boolean;
  animation?: boolean;
}

export interface TabsProps extends MuiTabsProps {}

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  index: number | string;
  value: number | string;
}
