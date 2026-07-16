import * as React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { swapBreakpoints as bp } from "../theme/tokens";
import type { ContainerProps } from "./Container.types";

const MAXW = { lg: 960, xl: 1140, xxl: 1320 } as const;
const PAD = { xxs: "0px 8px", xs: "0px 16px", sm: "0px 24px", md: "0px 24px" } as const;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { children, maxWidth, padding, sx, ...rest },
  ref,
) {
  const upXXL = useMediaQuery(`(min-width:${bp.xxl}px)`);
  const upXL = useMediaQuery(`(min-width:${bp.xl}px)`);
  const upLG = useMediaQuery(`(min-width:${bp.lg}px)`);
  const upMD = useMediaQuery(`(min-width:${bp.md}px)`);
  const upSM = useMediaQuery(`(min-width:${bp.sm}px)`);
  const upXS = useMediaQuery(`(min-width:${bp.xs}px)`);

  const resolvedMaxWidth =
    typeof maxWidth === "number"
      ? maxWidth
      : maxWidth
        ? MAXW[maxWidth]
        : upXXL ? 1320 : upXL ? 1140 : upLG ? 960 : undefined;

  const resolvedPadding =
    typeof padding === "number"
      ? padding
      : padding
        ? PAD[padding]
        : upXXL || upXL || upLG
          ? "0px 0px"
          : upMD || upSM ? "0px 24px" : upXS ? "0px 16px" : "0px 8px";

  const ourStyles = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    maxWidth: resolvedMaxWidth,
    padding: resolvedPadding,
  };
  return (
    <Box ref={ref} sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]} {...rest}>
      {children}
    </Box>
  );
});

export default Container;
