import MaterialTab from "@material-ui/core/Tab";
import React from "react";
import { SegmentedTabProps } from "./SegmentedTab.types";
import { makeStyles } from "@material-ui/core";

const SegmentedTab: React.FC<SegmentedTabProps> = ({
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
  fontSize,
  flex,
}) => {
  const useStyles = makeStyles({
    root: {
      //SWAPTheme調整
      textTransform: "unset",
      padding: "12px 16px",
      minWidth: 0,
      minHeight: height ? height : 40,
      width: width ? width : "fit-content",
      fontWeight: 700,
      fontSize: fontSize ? fontSize : 14,
      lineHeight: 1.4,
      color: "#6F6F6F",
      "&:hover": {
        color: "#000000",
      },
      flex: flex,
      whiteSpace: "nowrap",
    },
    text: {
      position: "relative",
      zIndex: 5,
      opacity: 1,
    },
  });
  const classes = useStyles();
  return (
    <MaterialTab
      disableRipple
      classes={{ textColorInherit: classes.text }}
      className={classes.root}
      style={style}
      label={label}
      disabled={disabled}
      icon={icon}
      wrapped={wrapped}
      value={value}
      onClick={onClick}
      selected={selected}
    />
  );
};

export default SegmentedTab;
