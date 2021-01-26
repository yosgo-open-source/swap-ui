import MaterialTextField from "@material-ui/core/TextField";
import React from "react";
import styled from "styled-components";
import { TextFieldProps } from "./TextField.types";
import { makeStyles, Theme } from "@material-ui/core";
import SWAPTheme from "../SWAPTheme/SWAPTheme";

const TextField: React.FC<TextFieldProps> = ({
  children,
  style,
  label,
  disabled,
  type,
  helperText,
  error,
  fullWidth,
  rowsMax,
  rows,
  multiline,
  value,
  onChange,
  InputProps,
  autoFocus,
  placeholder,
  required,
  select,
  defaultValue,
  width,
  height,
}) => {
  const useStyles = makeStyles((theme: Theme) => ({
    //SWAPTheme調整
    root: {},
    inputRoot: {
      width: width,
      height: height,
      "&.Mui-focused": {
        borderRadius: 8,
        boxShadow: "0px 0px 0px 4px #D7DFF8",
        fontWeight: 700,
        "&.Mui-error": {
          boxShadow: "0px 0px",
        },
      },
    },

    selectRoot: {
      width: width,
      height: height,
      display: "flex",
      alignItems: "center",
      "&.Mui-focused": {
        fontWeight: 700,
      },
    },
  }));
  const classes = useStyles();
  return (
    <SWAPTheme>
      <TextFieldWrap>
        <MaterialTextField
          className={classes.root}
          variant="outlined"
          style={style}
          label={label}
          helperText={helperText}
          placeholder={placeholder}
          error={error}
          disabled={disabled}
          required={required}
          fullWidth={fullWidth}
          autoFocus={autoFocus}
          type={type}
          multiline={multiline}
          rowsMax={rowsMax}
          rows={rows}
          value={value}
          onChange={onChange}
          InputProps={{ classes: { root: classes.inputRoot }, ...InputProps }}
          select={select}
          defaultValue={defaultValue}
          SelectProps={{
            classes: { root: classes.selectRoot },
            MenuProps: {
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              getContentAnchorEl: null,
            },
          }}
        >
          {children}
        </MaterialTextField>
      </TextFieldWrap>
    </SWAPTheme>
  );
};

const TextFieldWrap = styled.div``;

export default TextField;
