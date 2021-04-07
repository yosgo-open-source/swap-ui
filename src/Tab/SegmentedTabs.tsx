import MaterialTabs from "@material-ui/core/Tabs";
import React from "react";
import { SegmentedTabsProps } from "./SegmentedTabs.types";
import { makeStyles, useTheme } from "@material-ui/core";

const SegmentedTabs: React.FC<SegmentedTabsProps> = ({
  children,
  style,
  centered,
  value,
  onChange,
  variant,
  width,
  slide,
}) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      width: width,
      boxSizing: "border-box",
      border: "1px solid #cccccc",
      borderRadius: "9px",
      padding: "4px 0",
      "& button": {
        borderRadius: "8px",
        margin: "0 4px",
        "&.Mui-selected": {
          backgroundColor: slide ? "unset" : theme.primary.primary50,
          color: theme.primary.primary500,
        },
      },
    },
    indicator: {
      borderRadius: "8px",
      height: slide ? "100%" : 0,
      backgroundColor: theme.primary.primary50,
    },
  });
  const classes = useStyles();
  return (
    <MaterialTabs
      classes={{
        root: classes.root,
        indicator: classes.indicator,
      }}
      style={style}
      centered={centered}
      value={value}
      onChange={onChange}
      variant={variant}
      indicatorColor="primary"
    >
      {children}
    </MaterialTabs>
  );
};

export default SegmentedTabs;
