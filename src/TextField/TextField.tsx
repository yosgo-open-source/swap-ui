import MaterialTextField from "@material-ui/core/TextField";
import React from "react";
import { MyTextFieldProps } from "./TextField.types";
import { makeStyles, Theme } from "@material-ui/core";

// Style
interface StyleProps {
  width: number | string;
  selectWidth: number | string;
  height: number | string;
  select: boolean;
}
const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {
    "& .MuiFormHelperText-contained": {
      marginLeft: 16,
      marginRight: 16,
    },
  },
  inputRoot: (props) => ({
    width: props.width,
    height: props.height,
    padding: "0px 16px",
    backgroundColor: "white",
    fontSize: 16,
    lineHeight: "unset",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    "& fieldset": {
      "& legend": {
        width: "0.01px",
      },
      borderColor: theme.black.black500,
    },
    "&.Mui-focused": {
      boxShadow: "0px 0px 0px 4px #D7DFF8",
      "& fieldset": {
        border: `1px solid ${theme.primary.primary400} !important`,
        borderWidth: "1px !important",
      },
      "&.Mui-error": {
        boxShadow: "0px 0px",
        "& fieldset": {
          border: `1px solid ${theme.danger.danger800} !important`,
          borderWidth: "1px !important",
        },
      },
    },
    "&.Mui-error": {
      "& fieldset": {
        border: `1px solid ${theme.danger.danger800} !important`,
      },
    },
  }),
  input: {
    fontSize: 16,
    lineHeight: "unset",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    "&:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0 100px #FFFFFF inset",
    },
    "&::placeholder": { color: theme.black.black700, opacity: 1 },
    padding: 0,
    margin: 0,
    height: "fit-content",
  },
  selectRoot: (props) => ({
    borderRadius: 8,
    fontWeight: 400,
    width: props.width,
    minWidth: props.selectWidth,
    height: props.height,
    display: "flex",
    alignItems: "center",
    "&:focus": {
      backgroundColor: "white",
      borderRadius: 8,
    },
  }),
  icon: { color: theme.black.black700 },
  labelRoot: {
    "&.Mui-error": { color: theme.black.black700 },
  },
  shrink: {
    transform: "translate(14px, -10px) !important",
    height: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    fontSize: 14,
    fontWeight: 700,
    color: theme.black.black800,
    padding: "0 4px",
    "&.Mui-focused": {
      backgroundColor: "white",
      color: theme.black.black800,
    },
    "&.Mui-error": { color: theme.black.black800 },
  },
}));

const TextField: React.FC<MyTextFieldProps> = (props): React.ReactElement => {
  const {
    children,
    width,
    height,
    InputProps,
    InputLabelProps,
    SelectProps,
    select,
    fullWidth,
    ...other
  } = props;
  const styleProps: StyleProps = {
    width: width,
    selectWidth: fullWidth ? "100%" : "unset",
    height: height,
    select: select,
  };
  const classes = useStyles(styleProps);
  return (
    <MaterialTextField
      fullWidth={fullWidth}
      select={select}
      {...other}
      className={classes.root}
      variant="outlined"
      InputProps={{
        classes: {
          root: classes.inputRoot,
          input: classes.input,
        },
        ...InputProps,
      }}
      InputLabelProps={{
        classes: {
          root: classes.labelRoot,
          shrink: classes.shrink,
        },
        ...InputLabelProps,
      }}
      SelectProps={{
        classes: { root: classes.selectRoot, icon: classes.icon },
        MenuProps: {
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: -9,
            horizontal: -16,
          },
        },
        ...SelectProps,
      }}
    >
      {children}
    </MaterialTextField>
  );
};

export default TextField;
