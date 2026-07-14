import { Box } from "@material-ui/core";
import { TabPanelProps } from "@material-ui/lab";
import React from "react";

interface MyTabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  other?: TabPanelProps;
}

function TabPanel(props: MyTabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default TabPanel;
