import { makeStyles, Theme, useTheme } from "@material-ui/core";
import React from "react";
import Typography from "../Typography/Typography";
import { ChipProps } from "./Chip.types";

// Style
interface StyleProps {
  backgroundColor: string;
  width: string | number;
  height: string | number;
  border: string;
  padding: string;
}

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  root: (props) => ({
    backgroundColor: props.backgroundColor,
    border: props.border,
    borderRadius: 4,
    padding: props.padding,
    width: props.width,
    height: props.height,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
}));

const Chip: React.FC<ChipProps> = (props): React.ReactElement => {
  const theme = useTheme();
  const {
    variant,
    width,
    height,
    label,
    icon,
    outlined,
    contained,
    ...other
  } = props;
  const styleProps: StyleProps = {
    backgroundColor:
      outlined || !contained
        ? theme.black.white
        : variant === "neutral"
        ? theme.black.black300
        : variant === "primary"
        ? theme.primary.primary50
        : variant === "success"
        ? theme.success.success50
        : variant === "danger"
        ? theme.danger.danger50
        : theme.primary.primary50,
    width: width ? width : "fit-content",
    height: height ? height : "fit-content",
    border:
      outlined || !contained
        ? variant === "neutral"
          ? `1px solid ${theme.black.black500}`
          : variant === "primary"
          ? `1px solid ${theme.primary.primary800}`
          : variant === "success"
          ? `1px solid ${theme.success.success800}`
          : variant === "danger"
          ? `1px solid ${theme.danger.danger800}`
          : `1px solid ${theme.primary.primary800}`
        : null,
    padding: outlined || !contained ? "3.5px 8px" : "3.5px 9px",
  };
  const classes = useStyles(styleProps);
  return (
    <div className={classes.root} {...other}>
      <Typography
        variant="caption1"
        color={
          variant === "neutral"
            ? "black800"
            : variant === "primary"
            ? "primary800"
            : variant === "success"
            ? "success800"
            : variant === "danger"
            ? "danger800"
            : "primary800"
        }
        style={{ marginRight: icon ? 4 : 0 }}
      >
        {label}
      </Typography>
      {icon}
    </div>
  );
};

export default Chip;
