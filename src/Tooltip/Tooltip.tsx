import MaterialTooltip from "@material-ui/core/Tooltip";
import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { MyTooltipProps } from "./Tooltip.types";

// Style
interface StyleProps {}

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  root: {},
}));

const Tooltip: React.FC<MyTooltipProps> = (props): React.ReactElement => {
  // const theme = useTheme();
  const { children, ...other } = props;
  const styleProps: StyleProps = {};
  const classes = useStyles(styleProps);
  return (
    <MaterialTooltip className={classes.root} {...other}>
      <div style={{ width: "fit-content", height: "fit-content" }}>
        {children}
      </div>
    </MaterialTooltip>
  );
};

export default Tooltip;
