import MaterialRadioButton from "@material-ui/core/Radio";
import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";
import { FormControlLabel, makeStyles, useTheme } from "@material-ui/core";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

const RadioButton: React.FC<RadioButtonProps> = ({
  style,
  checked,
  onChange,
  label,
}) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      width: 40,
      height: 40,
      "&:hover": {
        backgroundColor: "rgba(0%,0%,0%,0.05)",
      },
    },
    checked_icon: {
      borderRadius: "50%",
      backgroundColor: theme.primary.primary800,
      "&:before": {
        display: "block",
        width: 24,
        height: 24,
        backgroundImage: "radial-gradient(#fff,#fff 30%,transparent 0%)",
        content: '""',
      },
    },
    icon: {
      color: "#cccccc",
      width: 30,
      height: 30,
    },
  });
  const classes = useStyles();
  return (
    <SWAPTheme>
      <RadioButtonWrap>
        <FormControlLabel
          label={label}
          control={
            <MaterialRadioButton
              style={style}
              checked={checked}
              onChange={onChange}
              className={classes.root}
              checkedIcon={<span className={classes.checked_icon} />}
              icon={<RadioButtonUncheckedIcon className={classes.icon} />}
              color="primary"
            />
          }
        />
      </RadioButtonWrap>
    </SWAPTheme>
  );
};

const RadioButtonWrap = styled.div``;

export default RadioButton;
