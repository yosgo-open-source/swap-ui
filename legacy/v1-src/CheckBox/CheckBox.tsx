import MaterialCheckBox from "@material-ui/core/Checkbox";
import React from "react";
import { MyCheckBoxProps } from "./CheckBox.types";
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
    borderRadius: 4,
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
    borderRadius: 4,
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

const CheckBox: React.FC<MyCheckBoxProps> = (props) => {
  const {
    disableHover,
    label,
    labelPlacement,
    checkedIcon,
    icon,
    ...other
  } = props;
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
        <MaterialCheckBox
          disableFocusRipple
          disableTouchRipple
          className={classes.root}
          {...other}
          checkedIcon={
            <span className={classes.checked_icon}>
              {checkedIcon ? (
                checkedIcon
              ) : (
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8.5L7 13L15 2"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </span>
          }
          icon={<span className={classes.icon}>{icon ? icon : null}</span>}
        />
      }
    />
  );
};

export default CheckBox;
