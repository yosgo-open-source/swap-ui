import MaterialSelect from "@material-ui/core/Select";
import React from "react";
import { SelectProps } from "./Select.types";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Theme,
} from "@material-ui/core";
const Select: React.FC<SelectProps> = ({
  children,
  style,
  value,
  onChange,
  defaultValue,
  error,
  disabled,
  type,
  autoFocus,
  placeholder,
  fullWidth,
  required,
  InputProps,
  helperText,
  width,
  height,
  horizontal,
  vertical,
  open,
  placeholderStyle,
  selectStyle,
  helperTextStyle,
  onClick,
  transformOrigin,
}) => {
  const useOutlinedInputStyles = makeStyles((theme: Theme) => ({
    root: {
      "& $notchedOutline": {
        borderColor: theme.black.black500,
      },
      "&:hover": {
        borderColor: theme.black.black1000,
        color: theme.black.black1000,
        fontWeight: 700,
      },
      "&$focused $notchedOutline": {
        borderColor: theme.black.black1000,
        color: theme.black.black1000,
        fontWeight: 700,
      },
    },
    focused: {},
    notchedOutline: {},
  }));
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      //SWAPTheme調整
      width: width,
    },
    inputRoot: {
      height: height,
      display: "flex",
      alignItems: "center",
      fontSize: 14,
      padding: "0px 16px",
    },
    select: {
      color: "#4b4b4b",
      fontWeight: 700,
      "&.Mui-focused": {
        color: theme.black.black1000,
        "& svg": {
          color: theme.black.black1000,
        },
      },
      "&:hover": {
        "& svg": {
          color: theme.black.black1000,
        },
      },
    },
    placeholder: {
      color: theme.black.black800,
      fontSize: 14,
      fontWeight: 700,
      top: -7,
      left: 2,
      "&.Mui-focused": {
        color: theme.black.black1000,
      },
      "&:hover": {
        color: theme.black.black1000,
      },
    },
    menuRoot: {
      marginTop: 8,
    },
  }));
  const outlinedInputClasses = useOutlinedInputStyles();
  const classes = useStyles();
  return (
    <FormControl variant="outlined" style={style} className={classes.root}>
      <InputLabel
        classes={{ root: classes.placeholder }}
        style={placeholderStyle}
        shrink={false}
      >
        {value === "" ? placeholder : null}
      </InputLabel>
      <MaterialSelect
        classes={{ select: classes.select }}
        style={selectStyle}
        open={open}
        value={value}
        onChange={onChange}
        label={placeholder}
        defaultValue={defaultValue}
        error={error}
        disabled={disabled}
        type={type}
        autoFocus={autoFocus}
        required={required}
        fullWidth={fullWidth}
        inputProps={{ classes: { root: classes.inputRoot }, ...InputProps }}
        input={<OutlinedInput classes={outlinedInputClasses} />}
        MenuProps={{
          transformOrigin: transformOrigin,
          classes: { paper: classes.menuRoot },
          anchorOrigin: {
            vertical: vertical,
            horizontal: horizontal,
          },
          getContentAnchorEl: null,
        }}
        onClick={onClick}
      >
        {children}
      </MaterialSelect>
      <FormHelperText style={helperTextStyle}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default Select;
