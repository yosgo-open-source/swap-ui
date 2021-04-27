import MaterialRadioButton from "@material-ui/core/Radio";
import React from "react";
import { RadioMyButtonProps } from "./RadioButton.types";
import { FormControlLabel, makeStyles, Theme } from "@material-ui/core";
// Style
interface StyleProps {
  disableHover: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    width: 40,
    height: 40,
    boxShadow: "none",
    "&:hover": {
      backgroundColor: props.disableHover ? "unset" : theme.black.black300,
    },
    "&.Mui-checked:hover": {
      backgroundColor: props.disableHover ? "unset" : theme.black.black300,
    },
  }),
  icon: (props) => ({
    position: "absolute",
    width: "24px",
    height: "24px",
    borderRadius: 100,
    backgroundColor: theme.black.white,
    border: `1px solid ${theme.black.black500}`,
    "input:hover ~ &": {
      border: props.disableHover
        ? `1px solid ${theme.black.black500}`
        : `1px solid ${theme.black.black1000}`,
    },
    "input:focus-visible ~ &": {
      boxShadow: "0px 0px 0px 4px #D7DFF8",
    },
    "input:disabled ~ &": {
      opacity: 0.4,
    },
    "input:disabled:hover ~ &": {
      border: props.disableHover
        ? `1px solid ${theme.black.black500}`
        : `1px solid ${theme.black.black500}`,
    },
  }),
  checked_icon: (props) => ({
    position: "absolute",
    width: 24,
    height: 24,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.primary.primary400,
    border: `1px solid ${theme.primary.primary600}`,
    "input:hover ~ &": {
      border: props.disableHover
        ? `1px solid ${theme.primary.primary600}`
        : `1px solid ${theme.primary.primaryA11y}`,
    },
    "input:focus-visible ~ &": {
      boxShadow: "0px 0px 0px 4px #D7DFF8",
    },
    "input:disabled ~ &": {
      opacity: 0.4,
    },
    "input:disabled:hover ~ &": {
      border: props.disableHover
        ? `1px solid ${theme.primary.primary600}`
        : `1px solid ${theme.primary.primary600}`,
    },
  }),
}));
const RadioButton: React.FC<RadioMyButtonProps> = (props) => {
  const { label, labelPlacement, disableHover, ...other } = props;
  const styleProps: StyleProps = {
    disableHover: disableHover,
  };
  const classes = useStyles(styleProps);
  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      style={{ marginRight: 0 }}
      control={
        <MaterialRadioButton
          disableFocusRipple
          disableTouchRipple
          className={classes.root}
          checkedIcon={
            <span className={classes.checked_icon}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5" cy="5" r="5" fill="white" />
              </svg>
            </span>
          }
          icon={<span className={classes.icon} />}
          {...other}
        />
      }
    />
  );
};

export default RadioButton;
