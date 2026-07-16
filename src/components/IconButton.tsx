import * as React from "react";
import MuiIconButton from "@mui/material/IconButton";
import { swapTokenMap } from "../theme/textColor";
import { swapColors as c } from "../theme/tokens";
import type { IconButtonProps } from "./IconButton.types";

const resolve = (v?: string) => (v ? (swapTokenMap[v] ?? v) : undefined);

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { width = 32, height = 32, hoverColor, hoverIconColor, sx, ...rest },
  ref,
) {
  const hoverBg = resolve(hoverColor) ?? c.black.black400;
  const hoverFill = resolve(hoverIconColor);
  const ourStyles = {
    width,
    height,
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: hoverBg,
      ...(hoverFill ? { "& svg path": { fill: hoverFill } } : {}),
    },
  };
  return <MuiIconButton ref={ref} sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]} {...rest} />;
});

export default IconButton;
