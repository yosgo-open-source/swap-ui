import MaterialSnackBar from "@material-ui/core/Snackbar";
import React from "react";
import { MySnackbarProps } from "./Snackbar.types";
import { Fade, makeStyles, Slide, SlideProps, Theme } from "@material-ui/core";
import Typography from "../Typography/Typography";

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}
function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}
function Transition(props: TransitionProps) {
  return <Fade {...props} />;
}

// Style
interface StyleProps {
  width: string | number;
  height: string | number;
  variant: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {},
  contentRoot: (props) => ({
    width: props.width ? props.width : "100%",
    height: props.height ? props.height : 56,
    boxShadow: theme.boxShadow.l,
    borderRadius: theme.borderRadius.m,
    backgroundColor:
      props.variant === "success"
        ? theme.success.success800
        : props.variant === "error"
        ? theme.danger.danger900
        : theme.black.black1000,
    border:
      props.variant === "success"
        ? `1px solid ${theme.success.successA11y}`
        : props.variant === "error"
        ? `1px solid ${theme.danger.dangerA11y}`
        : `1px solid ${theme.black.black1000}`,
    padding: "17px 16px",
  }),
  message: {
    padding: 0,
  },
}));

const Snackbar: React.FC<MySnackbarProps> = (props) => {
  const {
    message,
    transitionDirection,
    transitionDuration,
    width,
    height,
    variant,
    ...other
  } = props;
  const styleProps: StyleProps = {
    width: width,
    height: height,
    variant: variant,
  };
  const classes = useStyles(styleProps);
  return (
    <MaterialSnackBar
      {...other}
      className={classes.root}
      ContentProps={{
        classes: { root: classes.contentRoot, message: classes.message },
      }}
      message={
        <Typography variant="body2" color="white">
          {message}
        </Typography>
      }
      TransitionComponent={
        transitionDirection === "left"
          ? TransitionLeft
          : transitionDirection === "right"
          ? TransitionRight
          : transitionDirection === "up"
          ? TransitionUp
          : transitionDirection === "down"
          ? TransitionDown
          : Transition
      }
      transitionDuration={transitionDuration}
    />
  );
};

export default Snackbar;
