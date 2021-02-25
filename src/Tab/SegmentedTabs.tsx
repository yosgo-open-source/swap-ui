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
}) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      width: width,
      padding: 4,
      border: "1px solid #cccccc",
      borderRadius: "9px",
      "& button": {
        padding: "12px 16px 12px 16px",
        borderRadius: "8px",
        "&.Mui-selected": {
          backgroundColor: theme.primary.primary50,
          color: theme.primary.primary500,
        },
      },
      "& span": {
        height: 0,
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <MaterialTabs
        classes={{
          root: classes.root,
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
    </div>
  );
};

export default SegmentedTabs;
