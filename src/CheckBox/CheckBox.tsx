import MaterialCheckBox from "@material-ui/core/Checkbox";
import React from "react";
import { CheckBoxProps } from "./CheckBox.types";
import { FormControlLabel, makeStyles, useTheme } from "@material-ui/core";

const CheckBox: React.FC<CheckBoxProps> = ({
  style,
  disabled,
  checked,
  onChange,
  label,
  labelPlacement,
}) => {
  const theme = useTheme();
  const useStyles = makeStyles({
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
      borderRadius: 4,
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
      // "input:focus ~ &": {
      //   boxShadow: " 0px 0px 0px 4px #D7DFF8",
      // },
      // "input:focus:hover ~ &": { boxShadow: "none" },
    },
    checked_icon: {
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
        border: `1px solid ${theme.primary.primaryA11y}`,
      },
      "input:disabled ~ &": {
        opacity: 0.4,
      },
      "input:disabled:hover ~ &": {
        border: `1px solid ${theme.primary.primary600}`,
      },
      // "input:focus ~ &": {
      //   boxShadow: " 0px 0px 0px 4px #D7DFF8",
      // },
      // "input:focus:hover ~ &": { boxShadow: "none" },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <FormControlLabel
        label={label}
        labelPlacement={labelPlacement}
        control={
          <MaterialCheckBox
            disableFocusRipple
            disableTouchRipple
            className={classes.root}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
            checkedIcon={
              <span className={classes.checked_icon}>
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
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            }
            icon={<span className={classes.icon} />}
            style={style}
          />
        }
      />
    </div>
  );
};

export default CheckBox;
