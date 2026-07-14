import { makeStyles, Theme, useTheme } from "@material-ui/core";
import MaterialLink from "@material-ui/core/Link";
import React from "react";
import { MyLinkProps } from "./Link.types";

// Style
interface StyleProps {
  color: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    cursor: "pointer",
    color: props.color,
    fontWeight: 700,
    borderRadius: 4,
    lineHeight: 1.4,
    outline: "none",
    boxSizing: "border-box",
  }),
  focusVisible: {
    boxSizing: "border-box",
    outline: "none",
    padding: 8,
    border: `1px solid ${theme.primary.primary400}`,
  },
}));

const Link: React.FC<MyLinkProps> = (props): React.ReactElement => {
  const { color, ...other } = props;
  const theme = useTheme();
  const styleProps: StyleProps = {
    color:
      color === "primary50"
        ? theme.primary.primary50
        : color === "primary100"
        ? theme.primary.primary100
        : color === "primary200"
        ? theme.primary.primary200
        : color === "primary300"
        ? theme.primary.primary300
        : color === "primary400"
        ? theme.primary.primary400
        : color === "primary500"
        ? theme.primary.primary500
        : color === "primary600"
        ? theme.primary.primary600
        : color === "primary700"
        ? theme.primary.primary700
        : color === "primary800"
        ? theme.primary.primary800
        : color === "primary900"
        ? theme.primary.primary900
        : color === "primaryA11y"
        ? theme.primary.primaryA11y
        : color === "secondary50"
        ? theme.secondary.secondary50
        : color === "secondary100"
        ? theme.secondary.secondary100
        : color === "secondary200"
        ? theme.secondary.secondary200
        : color === "secondary300"
        ? theme.secondary.secondary300
        : color === "secondary400"
        ? theme.secondary.secondary400
        : color === "secondary500"
        ? theme.secondary.secondary500
        : color === "secondary600"
        ? theme.secondary.secondary600
        : color === "secondary700"
        ? theme.secondary.secondary700
        : color === "secondary800"
        ? theme.secondary.secondary800
        : color === "secondary900"
        ? theme.secondary.secondary900
        : color === "secondaryA11y"
        ? theme.secondary.secondaryA11y
        : color === "danger50"
        ? theme.danger.danger50
        : color === "danger100"
        ? theme.danger.danger100
        : color === "danger200"
        ? theme.danger.danger200
        : color === "danger300"
        ? theme.danger.danger300
        : color === "danger400"
        ? theme.danger.danger400
        : color === "danger500"
        ? theme.danger.danger500
        : color === "danger600"
        ? theme.danger.danger600
        : color === "danger700"
        ? theme.danger.danger700
        : color === "danger800"
        ? theme.danger.danger800
        : color === "danger900"
        ? theme.danger.danger900
        : color === "dangerA11y"
        ? theme.danger.dangerA11y
        : color === "success50"
        ? theme.success.success50
        : color === "success100"
        ? theme.success.success100
        : color === "success200"
        ? theme.success.success200
        : color === "success300"
        ? theme.success.success300
        : color === "success400"
        ? theme.success.success400
        : color === "success500"
        ? theme.success.success500
        : color === "success600"
        ? theme.success.success600
        : color === "success700"
        ? theme.success.success700
        : color === "success800"
        ? theme.success.success800
        : color === "success900"
        ? theme.success.success900
        : color === "successA11y"
        ? theme.success.successA11y
        : color === "white"
        ? theme.black.white
        : color === "black100"
        ? theme.black.black100
        : color === "black200"
        ? theme.black.black200
        : color === "black300"
        ? theme.black.black300
        : color === "black400"
        ? theme.black.black400
        : color === "black500"
        ? theme.black.black500
        : color === "black600"
        ? theme.black.black600
        : color === "black700"
        ? theme.black.black700
        : color === "black800"
        ? theme.black.black800
        : color === "black900"
        ? theme.black.black900
        : color === "black1000"
        ? theme.black.black1000
        : theme.black.black1000,
  };
  const classes = useStyles(styleProps);

  return (
    <MaterialLink
      classes={{
        root: classes.root,
        focusVisible: classes.focusVisible,
        underlineHover: classes.underlineHover,
      }}
      tabIndex={0}
      {...other}
    />
  );
};

export default Link;
