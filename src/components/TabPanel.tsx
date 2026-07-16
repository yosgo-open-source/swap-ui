import * as React from "react";
import Box from "@mui/material/Box";
import type { TabPanelProps } from "./Tab.types";

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...rest }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`scrollable-auto-tabpanel-${index}`}
    aria-labelledby={`scrollable-auto-tab-${index}`}
    {...rest}
  >
    {value === index && <Box>{children}</Box>}
  </div>
);

export default TabPanel;
