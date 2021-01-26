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
}) => {
  const useStyles = makeStyles({
    root: {
      //SWAPTheme調整
      minWidth: 56,
      height: 48,
      padding: 0,
      fontWeight: 700,
      lineHeight: 1.4,
      "&:hover": {
        color: "#000000",
      },
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
