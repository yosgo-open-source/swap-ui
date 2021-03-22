import MaterialTextField from "@material-ui/core/TextField";
import React from "react";
import { MyTextFieldProps } from "./TextField.types";
import { makeStyles, Theme } from "@material-ui/core";

const TextField: React.FC<MyTextFieldProps> = (props): React.ReactElement => {
  const { children, width, height, ...other } = props;
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
      {...other}
      className={classes.root}
      variant="outlined"
      InputProps={{
        classes: {
          root: classes.inputRoot,
          input: classes.input,
        },
      }}
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
