import * as React from "react";
import MuiTab from "@mui/material/Tab";
import type { SegmentedTabProps } from "./SegmentedTab.types";
import { cssSize } from "../utils/cssSize";

const SegmentedTab = React.forwardRef<HTMLDivElement, SegmentedTabProps>(function SegmentedTab(
  { width, height, fontSize, flex, sx, ...rest },
  ref,
) {
  const ourStyles = {
    textTransform: "unset" as const,
    padding: "12px 16px",
    minWidth: 0,
    minHeight: cssSize(height) ?? 40,
    width: cssSize(width) ?? "fit-content",
    fontWeight: 700,
    fontSize: fontSize ?? 14,
    lineHeight: 1.4,
    color: "#6F6F6F",
    opacity: 1,
    whiteSpace: "nowrap" as const,
    flex,
    "&:hover": { color: "#000000" },
    // 讓文字墊在 slide 指示層之上
    "& .MuiTab-wrapper, &": { position: "relative" as const, zIndex: 5 },
  };
  return <MuiTab ref={ref} disableRipple sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]} {...rest} />;
});

export default SegmentedTab;
