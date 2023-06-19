import { makeStyles } from "@material-ui/core";
import MaterialTypography from "@material-ui/core/Typography";
import React from "react";

import { TypographyProps } from "./Typography.types";

interface styleProps {
  variant: any;
  mode: any;
  color: any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: ({ mode, color }: styleProps) =>
      mode === "dark"
        ? color === "primary"
          ? theme.black.white
          : color === "secondary"
          ? theme.black.black500
          : color === "tertiary"
          ? theme.black.black600
          : color === "primary50"
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
          : theme.black.black1000
        : color === "primary"
        ? theme.black.black1000
        : color === "secondary"
        ? theme.black.black800
        : color === "tertiary"
        ? theme.black.black700
        : color === "primary50"
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
    fontSize: ({ variant }: styleProps) =>
      variant === "d1"
        ? "4.5rem"
        : variant === "d2"
        ? "4rem"
        : variant === "d3"
        ? "3.5rem"
        : variant === "d4"
        ? "3rem"
        : variant === "h1"
        ? "2.5rem"
        : variant === "h2"
        ? "2rem"
        : variant === "h3"
        ? "1.75rem"
        : variant === "h4"
        ? "1.5rem"
        : variant === "h5"
        ? "1.25rem"
        : variant === "h6"
        ? "1.125rem"
        : variant === "title" || variant === "title_loose"
        ? "1rem"
        : variant === "subtitle" || variant === "subtitle_loose"
        ? "0.875rem"
        : variant === "body1" || variant === "body1_loose"
        ? "1rem"
        : variant === "body2" || variant === "body2_loose"
        ? "0.875rem"
        : variant === "caption1" || variant === "caption1_loose"
        ? "0.75rem"
        : variant === "caption2" || variant === "caption2_loose"
        ? "0.75rem"
        : variant === "small1" || variant === "small1_loose"
        ? "0.6875rem"
        : variant === "small2" || variant === "small2_loose"
        ? "0.6875rem"
        : variant === "tiny1" || variant === "tiny1_loose"
        ? "0.625rem"
        : variant === "tiny2" || variant === "tiny2_loose"
        ? "0.625rem"
        : variant === "button_l"
        ? "1rem"
        : variant === "button_s"
        ? "0.875rem"
        : "1rem",
    fontWeight: ({ variant }: styleProps) =>
      variant === "d1" ||
      variant === "d2" ||
      variant === "d3" ||
      variant === "d4" ||
      variant === "h1" ||
      variant === "h2" ||
      variant === "h3" ||
      variant === "h4" ||
      variant === "h5" ||
      variant === "h6" ||
      variant === "title" ||
      variant === "title_loose" ||
      variant === "subtitle" ||
      variant === "subtitle_loose" ||
      variant === "caption1" ||
      variant === "caption1_loose" ||
      variant === "small1" ||
      variant === "small1_loose" ||
      variant === "tiny1" ||
      variant === "tiny1_loose" ||
      variant === "button_l" ||
      variant === "button_s"
        ? 700
        : variant === "body1" ||
          variant === "body1_loose" ||
          variant === "body2" ||
          variant === "body2_loose" ||
          variant === "caption2" ||
          variant === "caption2_loose" ||
          variant === "small2" ||
          variant === "small2_loose" ||
          variant === "tiny2" ||
          variant === "tiny2_loose"
        ? 400
        : 400,
    lineHeight: ({ variant }: styleProps) =>
      variant === "d1" ||
      variant === "d2" ||
      variant === "d3" ||
      variant === "h1" ||
      variant === "h2" ||
      variant === "h3"
        ? 1.25
        : variant === "d4" ||
          variant === "h4" ||
          variant === "h5" ||
          variant === "h6" ||
          variant === "title" ||
          variant === "subtitle" ||
          variant === "body1" ||
          variant === "body2" ||
          variant === "caption1" ||
          variant === "caption2" ||
          variant === "small1" ||
          variant === "small2" ||
          variant === "tiny1" ||
          variant === "tiny2"
        ? 1.4
        : variant === "title_loose" ||
          variant === "subtitle_loose" ||
          variant === "body1_loose" ||
          variant === "body2_loose" ||
          variant === "caption1_loose" ||
          variant === "caption2_loose" ||
          variant === "small1_loose" ||
          variant === "small2_loose" ||
          variant === "tiny1_loose" ||
          variant === "tiny2_loose"
        ? 1.6
        : variant === "button_l" || variant === "button_s"
        ? 1.125
        : 1.4,
    letterSpacing: "0em",
  },
}));

const Typography: React.FC<TypographyProps> = React.memo(
  ({ variant, children, mode, color, style }) => {
    const classes = useStyles({ variant, mode, color });
    return (
      <MaterialTypography className={classes.root} style={style}>
        {children}
      </MaterialTypography>
    );
  }
);

export default Typography;
