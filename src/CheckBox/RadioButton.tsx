import MaterialRadioButton from "@material-ui/core/Radio";
import React from "react";
import { RadioMyButtonProps } from "./RadioButton.types";
import { FormControlLabel, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 40,
    height: 40,
    boxShadow: "none",
    "&:hover": {
      backgroundColor: theme.black.black300,
    },
    "&.Mui-checked:hover": {
      backgroundColor: theme.black.black300,
    },
  },
  icon: {
    position: "absolute",
    width: "24px",
    height: "24px",
    borderRadius: 100,
    backgroundColor: theme.black.white,
    border: `1px solid ${theme.black.black500}`,
    "input:hover ~ &": {
      border: `1px solid ${theme.black.black1000}`,
    },
    "input:disabled ~ &": {
      opacity: 0.4,
    },
    "input:disabled:hover ~ &": {
      border: `1px solid ${theme.black.black500}`,
    },
  },
  checked_icon: {
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
      border: `1px solid ${theme.primary.primaryA11y}`,
    },
    "input:disabled ~ &": {
      opacity: 0.4,
    },
    "input:disabled:hover ~ &": {
      border: `1px solid ${theme.primary.primary600}`,
    },
  },
}));
const RadioButton: React.FC<RadioMyButtonProps> = (props) => {
  const { label, labelPlacement, ...other } = props;

  const classes = useStyles();
  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
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
