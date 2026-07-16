import type { IconButtonProps as MuiIconButtonProps } from "@mui/material/IconButton";

export interface IconButtonProps extends MuiIconButtonProps {
  width?: number | string;
  height?: number | string;
  /** hover 底色：SWAP token 名或任意 CSS 色，預設 black400 */
  hoverColor?: string;
  /** hover 時 svg path 的 fill：token 名或任意 CSS 色 */
  hoverIconColor?: string;
}
