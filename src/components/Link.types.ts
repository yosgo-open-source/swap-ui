import type { LinkProps as MuiLinkProps } from "@mui/material/Link";

export interface LinkProps extends Omit<MuiLinkProps, "color"> {
  /** SWAP token 名（如 primary400）；非 token 一律 black1000 */
  color?: string;
}
