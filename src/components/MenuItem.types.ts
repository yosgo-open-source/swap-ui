import type { MenuItemProps as MuiMenuItemProps } from "@mui/material/MenuItem";

export interface MenuItemProps extends MuiMenuItemProps {
  /** @deprecated MUI v4 遺留 prop，v9 已無作用，僅為型別相容保留 */
  button?: true;
  width?: number | string;
  height?: number | string;
  hoverBackgroundColor?: string;
  hoverFontColor?: string;
  hoverIconColor?: string;
  rippleColor?: string;
  iconChildren?: React.ReactNode;
}
