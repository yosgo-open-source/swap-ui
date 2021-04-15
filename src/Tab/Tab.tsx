import MaterialTab from "@material-ui/core/Tab";
import React from "react";
import { MyTabProps } from "./Tab.types";
import { makeStyles, Theme } from "@material-ui/core";

const Tab: React.FC<MyTabProps> = (props) => {
  const {
    label,
    selected,
    width,
    height,
    margin,
    fontSize,
    noIndicator,
    animation,
    ...other
  } = props;

  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      minWidth: 0,
      minHeight: 0,
      padding: 0,
      margin: margin ? margin : "0px 12px",
      fontWeight: 700,
      fontSize: fontSize ? fontSize : 14,
      lineHeight: 1.4,
      "&:hover": {
        color: "#000000",
      },
    },
    text: {
      opacity: 1,
      color: theme.black.black700,
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
      animation: "$selected 400ms ",
      height: 4,
      width: "100%",
      backgroundColor: theme.primary.primary400,
      position: "absolute",
      bottom: 0,
      display: noIndicator ? "none" : null,
      borderRadius: "100px 100px 0px 0px",
    },
    "@keyframes selected": {
      from: { width: 0 },
      to: { width: "100%" },
    },
  }));
  const classes = useStyles();
  return (
    <MaterialTab
      {...other}
      classes={{
        root: classes.root,
        textColorInherit: classes.text,
        selected: classes.selected,
      }}
      label={
        <div className={classes.indicatorRoot}>
          {label}
          {selected ? <div className={classes.selected_indicator} /> : null}
        </div>
      }
      disableRipple
    />
  );
};

export default Tab;
