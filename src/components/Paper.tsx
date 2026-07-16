import * as React from "react";
import MuiPaper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { swapColors as c, swapShadows, swapBreakpoints as bp } from "../theme/tokens";
import type { PaperProps } from "./Paper.types";
import { cssSize } from "../utils/cssSize";

const Paper = React.forwardRef<HTMLDivElement, PaperProps>(function Paper(
  { width, height, sx, ...rest },
  ref,
) {
  const upSM = useMediaQuery(`(min-width:${bp.sm}px)`);
  const upXS = useMediaQuery(`(min-width:${bp.xs}px)`);
  const padding = upSM ? 40 : upXS ? 24 : 16;
  const ourStyles = {
    boxShadow: swapShadows.xl,
    borderRadius: "12px",
    border: `1px solid ${c.black.black500}`,
    width: cssSize(width) ?? "100%",
    height: cssSize(height) ?? "100%",
    padding: `${padding}px`,
  };
  return (
    <MuiPaper
      ref={ref}
      variant="outlined"
      sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    />
  );
});

export default Paper;
