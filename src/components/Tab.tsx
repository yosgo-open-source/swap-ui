import * as React from "react";
import MuiTab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { swapColors as c } from "../theme/tokens";
import type { TabProps } from "./Tab.types";

const Tab = React.forwardRef<HTMLDivElement, TabProps>(function Tab(
  { label, selected, width, height, margin, fontSize, noIndicator, animation, sx, ...rest },
  ref,
) {
  const ourStyles = {
    minWidth: 0,
    minHeight: 0,
    padding: 0,
    margin: margin ?? "0px 12px",
    fontWeight: 700,
    fontSize: fontSize ?? 14,
    lineHeight: 1.4,
    opacity: 1,
    color: c.black.black700,
    "&:hover": { color: "#000000" },
    "&.Mui-selected": { color: "#000000" },
  };
  return (
    <MuiTab
      ref={ref}
      disableRipple
      sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
      label={
        <Box
          sx={{
            width: width ?? 56,
            height: height ?? 56,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {label}
          {selected && !noIndicator ? (
            <Box
              sx={{
                height: "4px",
                width: "100%",
                backgroundColor: c.primary.primary400,
                position: "absolute",
                bottom: 0,
                borderRadius: "100px 100px 0px 0px",
                ...(animation
                  ? {
                      animation: "swap-tab-selected 300ms",
                      "@keyframes swap-tab-selected": {
                        from: { width: 0 },
                        to: { width: "100%" },
                      },
                    }
                  : {}),
              }}
            />
          ) : null}
        </Box>
      }
      {...rest}
    />
  );
});

export default Tab;
