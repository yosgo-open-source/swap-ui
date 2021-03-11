import MaterialTooltip from "@material-ui/core/Tooltip";
import { makeStyles, Theme, useTheme } from "@material-ui/core";
import React from "react";
import { MyTooltipProps } from "./Tooltip.types";

// Style
interface StyleProps {
  margin: string | number;
  backgroundColor: string;
  color: string;
  border: string;
  padding: string | number;
  fontWeight: number;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    margin: props.margin,
    backgroundColor: props.backgroundColor,
    color: props.color,
    padding: props.padding,
    boxShadow: theme.boxShadow.m,
    border: props.border,
    maxWidth: 240,
    fontSize: 12,
    lineHeight: 1.4,
    fontWeight: props.fontWeight,
  }),
  arrow: (props) => ({
    color: props.backgroundColor,
  }),
}));

const Tooltip: React.FC<MyTooltipProps> = (props): React.ReactElement => {
  const theme = useTheme();
  const {
    arrow,
    margin,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    dark,
    light,
    children,
    ...other
  } = props;
  const styleProps: StyleProps = {
    padding: arrow ? "7.5px 12px" : 12,
    margin: margin
      ? margin
      : marginTop
      ? `0px 0px ${marginTop}px 0px`
      : marginBottom
      ? `${marginBottom}px 0px 0px 0px`
      : marginRight
      ? `0px 0px 0px ${marginRight}px`
      : marginLeft
      ? `0px ${marginLeft}px 0px 0px`
      : "10px 0px",
    backgroundColor: dark
      ? theme.black.black900
      : light
      ? theme.black.white
      : theme.black.black900,
    color: dark
      ? theme.black.white
      : light
      ? theme.black.black800
      : theme.black.white,
    border: light ? "1px solid #CCCCCC" : null,
    fontWeight: arrow ? 700 : 400,
  };
  const classes = useStyles(styleProps);
  return (
    <MaterialTooltip
      classes={{ tooltip: classes.root, arrow: classes.arrow }}
      {...other}
      arrow={arrow}
    >
      <div
        style={{
          width: "fit-content",
          height: "fit-content",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </MaterialTooltip>
  );
};

export default Tooltip;
