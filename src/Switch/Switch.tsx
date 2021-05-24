import { Fade, makeStyles, Theme } from "@material-ui/core";
import MaterialSwitch from "@material-ui/core/Switch";
import React from "react";
import { MySwitchProps } from "./Switch.types";

// Style
interface StyleProps {
  disabled: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {
    width: 40,
    height: 24,
    padding: 0,
  },
  switchBase: {
    padding: 2,
    transition:
      "left 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&$checked": {
      transform: "translateX(16px)",
      "& + $track": {
        border: `1px solid ${theme.primary.primary800}`,
        backgroundColor: theme.primary.primary400,
        opacity: 1,
      },
      "&:hover + $track": {
        backgroundColor: theme.primary.primary600,
      },
    },
    "&:hover + $track": {
      backgroundColor: theme.black.black800,
    },
    "&.Mui-disabled + $track": {
      opacity: 1,
      border: `1px solid ${theme.black.black800}`,
      backgroundColor: theme.black.black600,
    },
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: "white",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
  },
  track: {
    borderRadius: 24 / 2,
    border: `1px solid ${theme.black.black800}`,
    backgroundColor: theme.black.black600,
    opacity: 1,
    transition: "all 200ms ease-out",
  },
  checked: {},
  switchOutBlock: (props) => ({
    width: "fit-content",
    borderRadius: 24 / 2,
    "&:focus-visible": {
      boxShadow: props.disabled ? "unset" : "0px 0px 0px 4px #D7DFF8",
      outline: "none",
    },
    opacity: props.disabled ? 0.4 : 1,
  }),
  checkedIcon: {
    width: 20,
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "50%",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
  },
}));

const Switch: React.FC<MySwitchProps> = (props): React.ReactElement => {
  const { disabled, ...other } = props;
  const styleProps: StyleProps = { disabled: disabled };
  const classes = useStyles(styleProps);

  return (
    <div className={classes.switchOutBlock} tabIndex={0}>
      <MaterialSwitch
        disabled={disabled}
        tabIndex={0}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        checkedIcon={
          <div className={classes.checkedIcon}>
            <Fade in timeout={{ enter: 200, exit: 200 }}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 10.21L1.395 7.105L2.81 5.69L4.5 7.385L9.44 2.44L10.855 3.855L4.5 10.21Z"
                  fill="#4862CC"
                />
              </svg>
            </Fade>
          </div>
        }
        {...other}
      />
    </div>
  );
};

export default Switch;
