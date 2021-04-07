import MaterialTabs from "@material-ui/core/Tabs";

import React from "react";
import { TabsProps } from "./Tabs.types";
import { makeStyles } from "@material-ui/core";

const Tabs: React.FC<TabsProps> = ({
  children,
  style,
  centered,
  value,
  onChange,
  variant,
}) => {
  const useStyles = makeStyles({
    root: {},
    indicatorRoot: {
      backgroundColor: "transparent",
    },
  });
  const classes = useStyles();
  return (
    <MaterialTabs
      classes={{
        root: classes.root,
        indicator: classes.indicatorRoot,
      }}
      style={style}
      centered={centered}
      value={value}
      onChange={onChange}
      variant={variant}
    >
      {children}
    </MaterialTabs>
  );
};

export default Tabs;
