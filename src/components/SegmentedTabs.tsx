import * as React from "react";
import MuiTabs from "@mui/material/Tabs";
import { swapColors as c } from "../theme/tokens";
import type { SegmentedTabsProps } from "./SegmentedTab.types";
import { cssSize } from "../utils/cssSize";

const SegmentedTabs = React.forwardRef<HTMLDivElement, SegmentedTabsProps>(function SegmentedTabs(
  { children, width, slide, sx, ...rest },
  ref,
) {
  const innerRef = React.useRef<HTMLDivElement | null>(null);

  // scrollable 時確保 selected tab 進入視野（v9 目標瀏覽器原生支援 smooth，不需 polyfill）
  React.useEffect(() => {
    if (innerRef.current && rest.variant === "scrollable") {
      const el = innerRef.current.querySelector(".MuiTab-root.Mui-selected");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }, 1000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ourStyles = {
    width: cssSize(width),
    boxSizing: "border-box" as const,
    border: `1px solid ${c.black.black500}`,
    borderRadius: "9px",
    padding: "4px 0",
    "& button": {
      borderRadius: "8px",
      margin: "0 4px",
      "&.Mui-selected": {
        backgroundColor: slide ? "unset" : c.primary.primary50,
        color: c.primary.primary500,
      },
    },
    "& .MuiTabs-indicator": {
      borderRadius: "8px",
      height: slide ? "100%" : 0,
      backgroundColor: c.primary.primary50,
    },
    "& .MuiTabs-scrollButtons": {
      width: 32,
      overflow: "hidden",
      "&.Mui-disabled": { width: "4px" },
    },
  };

  return (
    <MuiTabs
      ref={(node: HTMLDivElement | null) => {
        innerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    >
      {children}
    </MuiTabs>
  );
});

export default SegmentedTabs;
