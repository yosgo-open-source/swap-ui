import MaterialSelect from "@material-ui/core/Select";
import React from "react";
import { DropdownProps } from "./Dropdown.types";
import {
  FormControl,
  FormHelperText,
  makeStyles,
  OutlinedInput,
  Theme,
} from "@material-ui/core";

// Style
interface StyleProps {
  height: number;
  width: string | number;
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
    height: props.height
      ? props.height >= 56
        ? props.height - 38
        : props.height - 24
      : 16,
    display: "flex",
    alignItems: "center",
    padding: props.height >= 56 ? "19px 8px 19px 24px" : "12px 4px 12px 16px",
    fontSize: props.height >= 56 ? 16 : 14,
    lineHeight: props.height >= 56 ? "18px" : "15.75px",
    fontWeight: 700,
    color: theme.black.black800,
    "&:hover": {
      color: theme.black.black1000,
      backgroundColor: "white",
      fontWeight: 700,
    },
    "&:focus": {
      color: theme.black.black1000,
      backgroundColor: "white",
      fontWeight: 700,
    },
  }),
  icon: {
    marginTop: 2,
    width: 20,
    height: 20,
    color: theme.black.black800,
  },
  menuRoot: {
    marginTop: 8,
  },
}));

const Dropdown: React.FC<DropdownProps> = (props): React.ReactElement => {
  const {
    children,
    formControlStyle,
    inputProps,
    MenuProps,
    helperText,
    width,
    height,
    helperTextStyle,
    ...other
  } = props;
  const styleProps: StyleProps = {
    width: width,
    height: height,
  };
  const classes = useStyles(styleProps);
  const outlinedInputClasses = useOutlinedInputStyles();
  return (
    <FormControl
      variant="outlined"
      style={formControlStyle}
      classes={{ root: classes.root }}
    >
      <MaterialSelect
        {...other}
        classes={{
          icon: classes.icon,
        }}
        input={<OutlinedInput classes={outlinedInputClasses} />}
        inputProps={{
          classes: { root: classes.inputRoot },
          ...inputProps,
        }}
        MenuProps={{
          classes: { paper: classes.menuRoot },
          getContentAnchorEl: null,
          ...MenuProps,
        }}
      >
        {children}
      </MaterialSelect>
      <FormHelperText style={helperTextStyle}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default Dropdown;
