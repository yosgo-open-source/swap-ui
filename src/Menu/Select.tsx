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

// Style
interface StyleProps {
  height: number;
  width: string | number;
  paddingTop: number;
  paddingLeft: number;
  dropdown: boolean;
}

const useOutlinedInputStyles = makeStyles((theme: Theme) => ({
  root: {
    "& $notchedOutline": {
      borderColor: theme.black.black500,
    },
    "&:hover": {
      borderColor: theme.black.black1000,
      "& svg": {
        color: theme.black.black1000,
      },
    },
    "&$focused $notchedOutline": {
      borderColor: theme.black.black1000,
      borderWidth: 1,
      // boxShadow: " 0px 0px 0px 4px #D7DFF8",
    },
  },
  focused: {
    "& svg": {
      color: theme.black.black1000,
    },
  },
  notchedOutline: {},
}));

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    //SWAPTheme調整
    width: props.width ? props.width : "100%",
  }),
  inputRoot: (props) => ({
    height: props.height - 32 ? props.height - 32 : 16,
    padding:
      props.paddingTop || props.paddingLeft
        ? `${props.paddingTop}px ${props.paddingLeft}px`
        : "12px 16px",
    paddingTop: props.paddingTop ? props.paddingTop : 12,
    paddingLeft: props.paddingLeft ? props.paddingLeft : 16,
    display: "flex",
    alignItems: "center",
  }),
  select: (props) => ({
    fontSize: props.dropdown ? 14 : 16,
    fontWeight: props.dropdown ? 700 : 400,
    border: "none",
    color: "#4b4b4b",
    "&:focus": {
      fontWeight: 700,
      backgroundColor: "white",
      color: theme.black.black1000,
    },
    "&:hover": { fontWeight: 700, color: theme.black.black1000 },
  }),
  icon: {
    color: theme.black.black800,
  },
  outlined: (props) => ({
    transform:
      props.paddingTop || props.paddingLeft
        ? `translate(${props.paddingLeft - 4}px, ${
            props.paddingTop + 2
          }px) scale(1)`
        : "translate(12px, 14px) scale(1)",
  }),
  placeholder: (props) => ({
    fontSize: props.dropdown ? 14 : 16,
    fontWeight: props.dropdown ? 700 : 400,
    width: "fit-content",
    backgroundColor: "white",
    margin: "0 4px",
    color: props.dropdown ? theme.black.black800 : theme.black.black700,
    "&.Mui-focused": {
      fontWeight: 700,
      color: theme.black.black800,
    },
  }),
  shrink: {
    fontWeight: 700,
    color: theme.black.black800,
    "&.Mui-focused": {
      color: theme.black.black1000,
    },
  },
  menuRoot: {
    marginTop: 8,
  },
}));

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
  paddingTop,
  paddingLeft,
  dropdown,
}) => {
  const outlinedInputClasses = useOutlinedInputStyles();
  const styleProps: StyleProps = {
    width: width,
    height: height,
    paddingTop: paddingTop,
    paddingLeft: paddingLeft,
    dropdown: dropdown,
  };
  const classes = useStyles(styleProps);

  return (
    <FormControl
      variant="outlined"
      style={style}
      classes={{ root: classes.root }}
    >
      <InputLabel
        classes={{
          root: classes.placeholder,
          outlined: classes.outlined,
          shrink: classes.shrink,
        }}
        style={placeholderStyle}
      >
        {placeholder}
      </InputLabel>
      <MaterialSelect
        classes={{ select: classes.select, icon: classes.icon }}
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
        inputProps={{
          classes: { root: classes.inputRoot },
          ...InputProps,
        }}
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
