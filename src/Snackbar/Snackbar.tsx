import MaterialSnackBar from "@material-ui/core/Snackbar";
import React from "react";
import { MySnackbarProps } from "./Snackbar.types";
import { Fade, makeStyles, Slide, SlideProps, Theme } from "@material-ui/core";
import IconButton from "../IconButton/IconButton";
import useBreakpoints from "../utils/useBreakpoints";

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
  root: {
    "@media only screen and (min-width: 600px)": {
      width: "fit-content",
      marginRight: 24,
    },
    "@media only screen and (max-width: 600px)": {
      width: "unset",
      bottom: 16,
      left: 16,
      right: 16,
    },
  },
  contentRoot: (props) => ({
    flexWrap: "nowrap",
    minWidth: 320,
    maxWidth: 640,
    width: props.width ? props.width : "unset",
    height: props.height ? props.height : "unset",
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
    padding: "12px 16px",
    boxSizing: "border-box",
  }),
  message: {
    padding: 0,
  },
  action: {
    padding: 0,
  },
  revertButton: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.4,
    color: theme.secondary.secondary600,
    cursor: "pointer",
    whiteSpace: "nowrap",
    marginLeft: 8,
  },
  children: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.6,
    color: "#ffffff",
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
    action,
    revertButton,
    closeIcon,
    icon,
    checkIcon,
    errorIcon,
    ...other
  } = props;
  const styleProps: StyleProps = {
    width: width,
    height: height,
    variant: variant,
  };
  const classes = useStyles(styleProps);
  const desktop: boolean = useBreakpoints("md");
  console.log(desktop);

  return (
    <MaterialSnackBar
      {...other}
      className={classes.root}
      ContentProps={{
        classes: {
          root: classes.contentRoot,
          message: classes.message,
          action: classes.action,
        },
      }}
      message={
        <div className={classes.children}>
          {checkIcon ? (
            <>
              {icon_checked}
              <div style={{ width: 8, height: "100%" }} />
            </>
          ) : errorIcon ? (
            <>
              {icon ? icon : icon_error}
              <div style={{ width: 8, height: "100%" }} />
            </>
          ) : icon ? (
            <>
              {icon}
              <div style={{ width: 8, height: "100%" }} />
            </>
          ) : null}
          {message}
        </div>
      }
      action={
        action ? (
          action
        ) : (
          <>
            {revertButton ? (
              <div
                className={classes.revertButton}
                onClick={revertButton.onClick}
              >
                {revertButton.label ? revertButton.label : "收回操作"}
              </div>
            ) : null}
            {closeIcon ? (
              <IconButton
                hoverColor={
                  variant === "success"
                    ? "#006818"
                    : variant === "error"
                    ? "#A00204"
                    : closeIcon.hoverColor
                    ? closeIcon.hoverColor
                    : "#333333"
                }
                onClick={closeIcon.onClick}
                style={{ marginLeft: 8 }}
              >
                {closeIcon.icon ? closeIcon.icon : icon_close}
              </IconButton>
            ) : null}
          </>
        )
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

const icon_close = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      fill="white"
    />
  </svg>
);

const icon_checked = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 7.00003L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59003L21 7.00003Z"
      fill="white"
    />
  </svg>
);

const icon_error = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 13H11V7H13V13ZM13 17H11V15H13V17ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
      fill="white"
    />
  </svg>
);

export default Snackbar;
