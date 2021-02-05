import MaterialCheckBox from "@material-ui/core/Checkbox";
import React from "react";
import styled from "styled-components";
import { CheckBoxProps } from "./CheckBox.types";
import { FormControlLabel, makeStyles } from "@material-ui/core";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const CheckBox: React.FC<CheckBoxProps> = ({
  style,
  disabled,
  checked,
  onChange,
  label,
  labelPlacement,
}) => {
  const useStyles = makeStyles({
    root: {
      //在SWAPTheme調整
      width: 40,
      height: 40,
    },
    icon: { width: 32, height: 32 },
    checked_icon: { width: 30, height: 30 },
  });
  const classes = useStyles();
  return (
    <SWAPTheme>
      <CheckBoxWrap>
        <FormControlLabel
          label={label}
          labelPlacement={labelPlacement}
          control={
            <MaterialCheckBox
              className={classes.root}
              disabled={disabled}
              checked={checked}
              onChange={onChange}
              checkedIcon={<CheckBoxIcon className={classes.checked_icon} />}
              icon={
                <CheckBoxOutlineBlankIcon
                  className={classes.icon}
                  fontSize="small"
                />
              }
              style={style}
              color="primary"
            />
          }
        />
      </CheckBoxWrap>
    </SWAPTheme>
  );
};

const CheckBoxWrap = styled.div``;

export default CheckBox;
