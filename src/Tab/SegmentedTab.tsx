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
      // height: height ? height : 40,
      fontWeight: 700,
      fontSize: fontSize ? fontSize : 14,
      lineHeight: 1.4,
      "&:hover": {
        color: "#000000",
      },
      flex: flex,
      whiteSpace: "nowrap",
      margin: 4,
    },
  });
  const classes = useStyles();
  return (
    <MaterialTab
      classes={{}}
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
