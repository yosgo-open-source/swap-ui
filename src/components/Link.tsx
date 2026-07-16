import * as React from "react";
import MuiLink from "@mui/material/Link";
import { swapTokenMap } from "../theme/textColor";
import { swapColors as c } from "../theme/tokens";
import type { LinkProps } from "./Link.types";

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { color, sx, ...rest },
  ref,
) {
  const ourStyles = {
    cursor: "pointer",
    color: (color && swapTokenMap[color]) || c.black.black1000,
    fontWeight: 700,
    borderRadius: "4px",
    lineHeight: 1.4,
    outline: "none",
    boxSizing: "border-box" as const,
    "&:focus-visible": {
      padding: "8px",
      border: `1px solid ${c.primary.primary400}`,
    },
  };
  return (
    <MuiLink
      ref={ref}
      underline="hover"
      tabIndex={0}
      sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    />
  );
});

export default Link;
