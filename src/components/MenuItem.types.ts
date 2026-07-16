import type { MenuItemProps as MuiMenuItemProps } from "@mui/material/MenuItem";

export interface MenuItemProps extends MuiMenuItemProps {
  width?: number | string;
  height?: number | string;
  hoverBackgroundColor?: string;
  hoverFontColor?: string;
  hoverIconColor?: string;
  rippleColor?: string;
  iconChildren?: React.ReactNode;
}
