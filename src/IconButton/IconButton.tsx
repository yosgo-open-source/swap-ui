import { makeStyles, Theme, useTheme } from "@material-ui/core";
import MaterialIconButton from "@material-ui/core/IconButton";
import React from "react";
import { MyIconButtonProps } from "./IconButton.types";

// Style
interface StyleProps {
  hoverBackgroundColor: string;
  width: number | string;
  height: number | string;
}

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  root: (props) => ({
    width: props.width,
    height: props.height,
    borderRadius: 8,
    "&:hover": {
      backgroundColor: props.hoverBackgroundColor,
    },
  }),
}));

const IconButton: React.FC<MyIconButtonProps> = (props): React.ReactElement => {
  const { hoverColor, width, height, ...other } = props;
  const theme = useTheme();
  const styleProps: StyleProps = {
    width: width ? width : 32,
    height: height ? height : 32,
    hoverBackgroundColor: hoverColor
      ? hoverColor === "primary50"
        ? theme.primary.primary50
        : hoverColor === "primary100"
        ? theme.primary.primary100
        : hoverColor === "primary200"
        ? theme.primary.primary200
        : hoverColor === "primary300"
        ? theme.primary.primary300
        : hoverColor === "primary400"
        ? theme.primary.primary400
        : hoverColor === "primary500"
        ? theme.primary.primary500
        : hoverColor === "primary600"
        ? theme.primary.primary600
        : hoverColor === "primary700"
        ? theme.primary.primary700
        : hoverColor === "primary800"
        ? theme.primary.primary800
        : hoverColor === "primary900"
        ? theme.primary.primary900
        : hoverColor === "primaryA11y"
        ? theme.primary.primaryA11y
        : hoverColor === "secondary50"
        ? theme.secondary.secondary50
        : hoverColor === "secondary100"
        ? theme.secondary.secondary100
        : hoverColor === "secondary200"
        ? theme.secondary.secondary200
        : hoverColor === "secondary300"
        ? theme.secondary.secondary300
        : hoverColor === "secondary400"
        ? theme.secondary.secondary400
        : hoverColor === "secondary500"
        ? theme.secondary.secondary500
        : hoverColor === "secondary600"
        ? theme.secondary.secondary600
        : hoverColor === "secondary700"
        ? theme.secondary.secondary700
        : hoverColor === "secondary800"
        ? theme.secondary.secondary800
        : hoverColor === "secondary900"
        ? theme.secondary.secondary900
        : hoverColor === "secondaryA11y"
        ? theme.secondary.secondaryA11y
        : hoverColor === "danger50"
        ? theme.danger.danger50
        : hoverColor === "danger100"
        ? theme.danger.danger100
        : hoverColor === "danger200"
        ? theme.danger.danger200
        : hoverColor === "danger300"
        ? theme.danger.danger300
        : hoverColor === "danger400"
        ? theme.danger.danger400
        : hoverColor === "danger500"
        ? theme.danger.danger500
        : hoverColor === "danger600"
        ? theme.danger.danger600
        : hoverColor === "danger700"
        ? theme.danger.danger700
        : hoverColor === "danger800"
        ? theme.danger.danger800
        : hoverColor === "danger900"
        ? theme.danger.danger900
        : hoverColor === "dangerA11y"
        ? theme.danger.dangerA11y
        : hoverColor === "success50"
        ? theme.success.success50
        : hoverColor === "success100"
        ? theme.success.success100
        : hoverColor === "success200"
        ? theme.success.success200
        : hoverColor === "success300"
        ? theme.success.success300
        : hoverColor === "success400"
        ? theme.success.success400
        : hoverColor === "success500"
        ? theme.success.success500
        : hoverColor === "success600"
        ? theme.success.success600
        : hoverColor === "success700"
        ? theme.success.success700
        : hoverColor === "success800"
        ? theme.success.success800
        : hoverColor === "success900"
        ? theme.success.success900
        : hoverColor === "successA11y"
        ? theme.success.successA11y
        : hoverColor === "white"
        ? theme.black.white
        : hoverColor === "black100"
        ? theme.black.black100
        : hoverColor === "black200"
        ? theme.black.black200
        : hoverColor === "black300"
        ? theme.black.black300
        : hoverColor === "black400"
        ? theme.black.black400
        : hoverColor === "black500"
        ? theme.black.black500
        : hoverColor === "black600"
        ? theme.black.black600
        : hoverColor === "black700"
        ? theme.black.black700
        : hoverColor === "black800"
        ? theme.black.black800
        : hoverColor === "black900"
        ? theme.black.black900
        : hoverColor === "black1000"
        ? theme.black.black1000
        : hoverColor
      : theme.black.black400,
  };
  const classes = useStyles(styleProps);

  return <MaterialIconButton className={classes.root} {...other} />;
};

export default IconButton;
