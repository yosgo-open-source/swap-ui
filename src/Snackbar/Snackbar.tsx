import MaterialSnackBar from "@material-ui/core/Snackbar";
import React from "react";
import styled from "styled-components";
import { SnackbarProps } from "./Snackbar.types";
import { Fade, makeStyles, Slide, SlideProps, Theme } from "@material-ui/core";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
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
const Snackbar: React.FC<SnackbarProps> = ({
  style,
  open,
  anchorOrigin,
  autoHideDuration,
  onClose,
  message,
  action,
  onEntered,
  onExited,
  onEntering,
  onEnter,
  onExit,
  onExiting,
  transitionDirection,
  key,
  transitionDuration,
  width,
  height,
  variant,
}) => {
  const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    contentRoot: {
      width: width ? width : 343,
      height: height ? height : 56,
      boxShadow: theme.boxShadow.l,
      borderRadius: theme.borderRadius.m,
      backgroundColor:
        variant === "success"
          ? theme.success.success800
          : variant === "error"
          ? theme.danger.danger900
          : theme.black.black1000,
      border:
        variant === "success"
          ? `1px solid ${theme.success.successA11y}`
          : variant === "error"
          ? `1px solid ${theme.danger.dangerA11y}`
          : `1px solid ${theme.black.black1000}`,
      padding: "17px 16px",
    },
    message: {
      padding: 0,
    },
  }));
  const classes = useStyles();
  return (
    <SWAPTheme>
      <SnackbarWrap>
        <MaterialSnackBar
          className={classes.root}
          style={style}
          ContentProps={{
            classes: { root: classes.contentRoot, message: classes.message },
          }}
          key={key}
          open={open}
          anchorOrigin={anchorOrigin}
          autoHideDuration={autoHideDuration}
          onClose={onClose}
          message={
            <Typography variant="body2" color="white">
              {message}
            </Typography>
          }
          action={action}
          onExited={onExited}
          onExit={onExit}
          onExiting={onExiting}
          onEnter={onEnter}
          onEntered={onEntered}
          onEntering={onEntering}
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
      </SnackbarWrap>
    </SWAPTheme>
  );
};

const SnackbarWrap = styled.div``;

export default Snackbar;
