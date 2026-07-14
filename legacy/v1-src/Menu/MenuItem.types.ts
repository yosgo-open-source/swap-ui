import { MenuItemProps } from "@material-ui/core";

export interface MyMenuItemProps extends MenuItemProps {
  button?: true;
  width?: number | string;
  height?: number | string;
  hoverBackgroundColor?: string;
  hoverFontColor?: string;
  hoverIconColor?: string;
  rippleColor?: string;
  iconChildren?: React.ReactNode;
}
