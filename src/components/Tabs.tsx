import * as React from "react";
import MuiTabs from "@mui/material/Tabs";
import type { TabsProps } from "./Tab.types";

// 選中指示條由 Tab 自繪，Tabs 本身的 indicator 設為透明
const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { children, sx, ...rest },
  ref,
) {
  const ourStyles = {
    "& .MuiTabs-indicator": { backgroundColor: "transparent" },
  };
  return (
    <MuiTabs ref={ref} sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]} {...rest}>
      {children}
    </MuiTabs>
  );
});

export default Tabs;
