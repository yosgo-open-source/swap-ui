import MaterialTabs from "@material-ui/core/Tabs";

import React from "react";
import { MyTabsProps } from "./Tabs.types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  indicatorRoot: {
    backgroundColor: "transparent",
  },
});

const Tabs: React.FC<MyTabsProps> = (props) => {
  const { children, ...other } = props;
  const classes = useStyles();
  return (
    <MaterialTabs
      {...other}
      classes={{
        root: classes.root,
        indicator: classes.indicatorRoot,
      }}
    >
      {children}
    </MaterialTabs>
  );
};

export default Tabs;
