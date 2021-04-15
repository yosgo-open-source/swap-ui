import MaterialTabs from "@material-ui/core/Tabs";
import React from "react";
import { SegmentedTabsProps } from "./SegmentedTabs.types";
import { makeStyles, Theme } from "@material-ui/core";

// Style
interface StyleProps {
  width: number | string;
  slide: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    width: props.width,
    boxSizing: "border-box",
    border: "1px solid #cccccc",
    borderRadius: "9px",
    padding: "4px 0",
    "& button": {
      borderRadius: "8px",
      margin: "0 4px",
      "&.Mui-selected": {
        backgroundColor: props.slide ? "unset" : theme.primary.primary50,
        color: theme.primary.primary500,
      },
    },
  }),
  indicator: (props) => ({
    borderRadius: "8px",
    height: props.slide ? "100%" : 0,
    backgroundColor: theme.primary.primary50,
  }),
}));

const SegmentedTabs: React.FC<SegmentedTabsProps> = ({
  children,
  width,
  slide,
  ...other
}) => {
  const styleProps: StyleProps = {
    width: width,
    slide: slide,
  };
  const classes = useStyles(styleProps);
  return (
    <MaterialTabs
      {...other}
      classes={{
        root: classes.root,
        indicator: classes.indicator,
      }}
      indicatorColor="primary"
    >
      {children}
    </MaterialTabs>
  );
};

export default SegmentedTabs;
