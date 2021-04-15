import MaterialMenuItem from "@material-ui/core/MenuItem";
import React from "react";
import { MyMenuItemProps } from "./MenuItem.types";
import { ListItemIcon, makeStyles, Theme } from "@material-ui/core";

// Style
interface StyleProps {
  width: number | string;
  height: number | string;
  hoverBackgroundColor: string;
  hoverFontColor: string;
  hoverIconColor: string;
  rippleColor: string;
}
const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    fontSize: 14,
    fontWeight: 700,
    width: props.width,
    minHeight: props.height,
    "&:focus": {
      backgroundColor: "unset",
    },
    "&:hover": {
      backgroundColor: props.hoverBackgroundColor
        ? props.hoverBackgroundColor
        : theme.primary.primary50,
      color: props.hoverFontColor
        ? props.hoverFontColor
        : theme.primary.primary800,
      "& svg": {
        "& path": {
          fill: props.hoverIconColor
            ? props.hoverIconColor
            : theme.primary.primary800,
        },
      },
    },
    "& span": {
      color: props.rippleColor,
    },
  }),
}));

const MenuItem: React.FC<MyMenuItemProps> = React.forwardRef((props, ref) => {
  const {
    children,
    width,
    hoverBackgroundColor,
    hoverFontColor,
    hoverIconColor,
    height,
    rippleColor,
    iconChildren,
    ...other
  } = props;
  const styleProps: StyleProps = {
    width: width,
    height: height,
    hoverBackgroundColor: hoverBackgroundColor,
    hoverFontColor: hoverFontColor,
    hoverIconColor: hoverIconColor,
    rippleColor: rippleColor,
  };

  const classes = useStyles(styleProps);
  return (
    <MaterialMenuItem className={classes.root} {...other}>
      {children}
      <ListItemIcon style={{ justifyContent: "flex-end" }}>
        {iconChildren}
      </ListItemIcon>
    </MaterialMenuItem>
  );
});

export default MenuItem;
