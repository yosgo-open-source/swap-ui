import MaterialTextField from "@material-ui/core/TextField";
import React from "react";
import { MyTextFieldProps } from "./TextField.types";
import { makeStyles, Theme } from "@material-ui/core";

// Style
interface StyleProps {
  width: number | string;
  height: number | string;
  select: boolean;
}
const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  inputRoot: (props) => ({
    width: props.width,
    height: props.height,
    backgroundColor: "white",
    fontSize: 16,
    lineHeight: 1.4,
    fontWeight: 400,
    "& fieldset": {
      "& legend": {
        width: "0.01px",
      },
      borderColor: theme.black.black500,
    },
    "&.Mui-focused": {
      boxShadow: props.select ? "unset" : "0px 0px 0px 4px #D7DFF8",
      "& fieldset": {
        border: props.select
          ? `1px solid ${theme.black.black1000} !important`
          : `1px solid ${theme.primary.primary400} !important`,
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
    "&:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0 100px #FFFFFF inset",
    },
    "&::placeholder": { color: theme.black.black700, opacity: 1 },
    padding: "0px 16px",
  },
  selectRoot: (props) => ({
    borderRadius: 8,
    fontWeight: 400,
    width: props.width,
    height: props.height,
    display: "flex",
    alignItems: "center",
    "&:focus": {
      backgroundColor: "white",
      borderRadius: 8,
    },
  }),
  icon: { color: theme.black.black1000 },
  shrink: {
    transform: "translate(14px, -4px) scale(0.75) !important",
    backgroundColor: "white",
    fontSize: 12,
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
    ...other
  } = props;
  const styleProps: StyleProps = {
    width: width,
    height: height,
    select: select,
  };
  const classes = useStyles(styleProps);
  return (
    <MaterialTextField
      select={select}
      {...other}
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
          shrink: classes.shrink,
        },
        ...InputLabelProps,
      }}
      SelectProps={{
        classes: { root: classes.selectRoot, icon: classes.icon },
        MenuProps: {
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: -6,
            horizontal: "left",
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
