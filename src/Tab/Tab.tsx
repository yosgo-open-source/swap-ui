import MaterialTab from "@material-ui/core/Tab";

import React from "react";
import { TabProps } from "./Tab.types";
import { makeStyles, useTheme } from "@material-ui/core";

const Tab: React.FC<TabProps> = ({
  style,
  label,
  disabled,
  icon,
  wrapped,
  value,
  onClick,
  selected,
  width,
  height,
  margin,
  fontSize,
  noIndicator,
}) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      minWidth: 0,
      minHeight: 0,
      padding: 0,
      margin: margin ? margin : "0px 12px",
      fontWeight: 700,
      fontSize: fontSize ? fontSize : 14,
      lineHeight: 1.4,
      transition: "width 3s",
      // boxShadow: selected
      //   ? "inset 0px -4px 0px #4862CC"
      //   : "inset 0px -4px 0px red",
      "&:hover": {
        color: "#000000",
      },
    },
    text: {
      opacity: 1,
      color: theme.black.black600,
    },
    selected: {
      color: "#000000",
    },
    indicatorRoot: {
      width: width ? width : 56,
      height: height ? height : 56,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    selected_indicator: {
      animation: "$selected 300ms ",
      height: 4,
      width: "100%",
      backgroundColor: theme.primary.primary400,
      position: "absolute",
      bottom: 0,
      display: noIndicator ? "none" : null,
    },
    // unselected_indicator: {
    //   animation: "$unselected 300ms ",
    //   height: 4,
    //   width: 56,
    //   backgroundColor: "white",
    //   position: "absolute",
    //   bottom: 0,
    // },
    "@keyframes selected": {
      from: { width: 0 },
      to: { width: "100%" },
    },
    // "@keyframes unselected": {
    //   from: { width: 56 },
    //   to: { width: 0 },
    // },
  });
  const classes = useStyles();
  return (
    <MaterialTab
      classes={{
        root: classes.root,
        textColorInherit: classes.text,
        selected: classes.selected,
      }}
      style={style}
      label={
        <div className={classes.indicatorRoot}>
          {label}
          {selected ? <div className={classes.selected_indicator} /> : null}
        </div>
      }
      disabled={disabled}
      icon={icon}
      wrapped={wrapped}
      value={value}
      onClick={onClick}
      selected={selected}
      disableRipple
    />
  );
};

export default Tab;
