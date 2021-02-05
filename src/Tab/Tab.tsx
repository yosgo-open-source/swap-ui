import MaterialTab from "@material-ui/core/Tab";

import React from "react";
import { TabProps } from "./Tab.types";
import { makeStyles } from "@material-ui/core";

const Tab: React.FC<TabProps> = ({
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
      width: 56,
      height: 56,
      padding: 0,
      margin: "0px 12px",
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
      className={classes.root}
      style={style}
      label={label}
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
