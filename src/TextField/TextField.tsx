import MaterialTextField from "@material-ui/core/TextField";
import React from "react";
import { TextFieldProps } from "./TextField.types";
import { makeStyles, Theme } from "@material-ui/core";

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
  onKeyDown,
}) => {
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      "& label": {
        backgroundColor: "white",
        color: theme.black.black800,
        boxShadow: "0px 0px 0px 7px #ffffff",
      },
    },
    inputRoot: {
      width: width,
      height: height,
      padding: "0px 16px",
      "&.Mui-focused": {
        boxShadow: "0px 0px 0px 4px #D7DFF8",
        fontWeight: 400,
        "& fieldset": {
          borderWidth: "1px !important",
        },

        "&.Mui-error": {
          boxShadow: "0px 0px",
          "& fieldset": {
            borderWidth: 1,
          },
        },
      },
      "&:hover": {
        // fontWeight: 700,
        "&.Mui-disabled": {
          fontWeight: 400,
        },
      },
    },
    input: {
      "&:-webkit-autofill": {
        "-webkit-box-shadow": "0 0 0 100px #FFFFFF inset",
      },
      padding: "0px 0px",
    },
    selectRoot: {
      fontWeight: 700,
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
      onKeyDown={onKeyDown}
      InputProps={{
        classes: {
          root: classes.inputRoot,
          input: classes.input,
        },
        ...InputProps,
      }}
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
  );
};

export default TextField;
