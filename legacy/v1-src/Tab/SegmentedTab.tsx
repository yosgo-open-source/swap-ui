import MaterialTab from "@material-ui/core/Tab";
import React from "react";
import { SegmentedTabProps } from "./SegmentedTab.types";
import { makeStyles, Theme } from "@material-ui/core";

// Style
interface StyleProps {
  width: number | string;
  height: number | string;
  fontSize: number | string;
  flex: number;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    //SWAPTheme調整
    textTransform: "unset",
    padding: "12px 16px",
    minWidth: 0,
    minHeight: props.height ? props.height : 40,
    width: props.width ? props.width : "fit-content",
    fontWeight: 700,
    fontSize: props.fontSize ? props.fontSize : 14,
    lineHeight: 1.4,
    color: "#6F6F6F",
    "&:hover": {
      color: "#000000",
    },
    flex: props.flex,
    whiteSpace: "nowrap",
  }),
  text: {
    position: "relative",
    zIndex: 5,
    opacity: 1,
  },
}));

const SegmentedTab: React.FC<SegmentedTabProps> = (props) => {
  const { width, height, fontSize, flex, ...other } = props;
  const styleProps: StyleProps = {
    width: width,
    height: height,
    fontSize: fontSize,
    flex: flex,
  };
  const classes = useStyles(styleProps);
  return (
    <MaterialTab
      {...other}
      disableRipple
      classes={{ textColorInherit: classes.text }}
      className={classes.root}
    />
  );
};

export default SegmentedTab;
