import * as React from "react";
import MuiMenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { swapColors as c } from "../theme/tokens";
import type { MenuItemProps } from "./MenuItem.types";
import { cssSize } from "../utils/cssSize";

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(function MenuItem(
  {
    children,
    width,
    height,
    hoverBackgroundColor,
    hoverFontColor,
    hoverIconColor,
    rippleColor,
    iconChildren,
    sx,
    ...rest
  },
  ref,
) {
  const ourStyles = {
    fontSize: 14,
    fontWeight: 700,
    width: cssSize(width),
    minHeight: cssSize(height),
    "&:focus": { backgroundColor: "unset" },
    "&:hover": {
      backgroundColor: hoverBackgroundColor ?? c.primary.primary50,
      color: hoverFontColor ?? c.primary.primary800,
      "& svg path": { fill: hoverIconColor ?? c.primary.primary800 },
    },
    "& span": { color: rippleColor ?? undefined },
  };
  return (
    <MuiMenuItem ref={ref} sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]} {...rest}>
      {children}
      {iconChildren != null && (
        <ListItemIcon style={{ justifyContent: "flex-end" }}>{iconChildren}</ListItemIcon>
      )}
    </MuiMenuItem>
  );
});

export default MenuItem;
