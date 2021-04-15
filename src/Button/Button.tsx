import MaterialButton from "@material-ui/core/Button";
import React, { useState } from "react";
import { MyButtonProps } from "./Button.types";
import { makeStyles, Theme, useTheme } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const Button: React.FC<MyButtonProps> = (props) => {
  const {
    children,
    variant,
    minWidth,
    width,
    size,
    loading,
    onClick,
    ...other
  } = props;
  const [noFocus, setNoFocus] = useState(false);
  const theme = useTheme();
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      textTransform: "unset",
      color:
        variant === "primary"
          ? theme.black.white
          : variant === "secondary"
          ? theme.primary.primary400
          : variant === "tertiary"
          ? theme.primary.primary500
          : variant === "text"
          ? theme.primary.primary400
          : variant === "black"
          ? theme.black.black800
          : variant === "danger"
          ? theme.black.white
          : theme.black.white,
      backgroundColor:
        variant === "primary"
          ? theme.primary.primary400
          : variant === "secondary"
          ? theme.black.white
          : variant === "tertiary"
          ? theme.primary.primary50
          : variant === "text"
          ? theme.black.white
          : variant === "black"
          ? theme.black.white
          : variant === "danger"
          ? theme.danger.danger800
          : theme.primary.primary400,
      border:
        variant === "primary"
          ? `1px solid ${theme.primary.primary600}`
          : variant === "secondary"
          ? `1px solid ${theme.primary.primary400}`
          : variant === "tertiary"
          ? null
          : variant === "text" || variant === "black"
          ? null
          : variant === "danger"
          ? `1px solid ${theme.danger.dangerA11y}`
          : `1px solid ${theme.primary.primary600}`,
      borderRadius: "8px",
      height:
        size === "small"
          ? "40px"
          : size === "medium"
          ? "48px"
          : size === "large"
          ? "56px"
          : "48px",
      padding:
        size === "small"
          ? "12px 16px"
          : size === "medium"
          ? "15px 24px"
          : size === "large"
          ? "19px 32px"
          : "15px 24px",
      minWidth: minWidth,
      width: width,
      fontSize:
        size === "small" ? 14 : size === "medium" || size === "large" ? 16 : 16,
      fontWeight: 700,
      lineHeight: 1.125,
      "&:hover": {
        backgroundColor:
          variant === "primary"
            ? theme.primary.primary300
            : variant === "secondary"
            ? theme.primary.primary50
            : variant === "tertiary"
            ? theme.primary.primary100
            : variant === "text"
            ? theme.primary.primary50
            : variant === "black"
            ? theme.black.black400
            : variant === "danger"
            ? theme.danger.danger600
            : theme.primary.primary300,
        border:
          variant === "primary"
            ? `1px solid ${theme.primary.primary300}`
            : variant === "tertiary" ||
              variant === "text" ||
              variant === "black"
            ? null
            : variant === "danger"
            ? `1px solid ${theme.danger.dangerA11y}`
            : `1px solid ${theme.primary.primary300}`,
      },
      "&:active": {
        backgroundColor:
          variant === "primary"
            ? theme.primary.primary500
            : variant === "secondary"
            ? theme.primary.primary100
            : variant === "tertiary"
            ? theme.primary.primary200
            : variant === "text"
            ? theme.primary.primary100
            : variant === "black"
            ? theme.black.black500
            : variant === "danger"
            ? theme.danger.danger900
            : theme.primary.primary500,
      },
      noFocus: null,
      "&:focus": {
        boxShadow: noFocus
          ? null
          : variant === "black"
          ? "0px 0px 0px 4px #CCCCCC"
          : variant === "danger"
          ? "0px 0px 0px 4px #FFCCD0"
          : "0px 0px 0px 4px #D7DFF8",
        backgroundColor: noFocus
          ? null
          : variant === "primary"
          ? theme.primary.primary400
          : variant === "secondary"
          ? theme.primary.primary50
          : variant === "tertiary"
          ? theme.primary.primary50
          : variant === "text"
          ? theme.primary.primary50
          : variant === "black"
          ? theme.black.black400
          : variant === "danger"
          ? theme.danger.danger600
          : theme.primary.primary400,
        border: noFocus
          ? null
          : variant === "secondary"
          ? `1px solid ${theme.primary.primary400}`
          : variant === "tertiary"
          ? `1px solid ${theme.primary.primary400}`
          : variant === "text"
          ? `1px solid ${theme.primary.primary400}`
          : variant === "black"
          ? `1px solid ${theme.black.black800}`
          : variant === "danger"
          ? `1px solid ${theme.danger.dangerA11y}`
          : `1px solid ${theme.primary.primary600}`,
      },
      "&:disabled": {
        opacity: 0.4,
        backgroundColor:
          variant === "primary"
            ? theme.primary.primary800
            : variant === "secondary"
            ? theme.black.white
            : variant === "tertiary"
            ? theme.primary.primary100
            : variant === "text"
            ? theme.black.white
            : variant === "black"
            ? theme.black.white
            : variant === "danger"
            ? theme.danger.danger800
            : theme.primary.primary800,
        color:
          variant === "primary"
            ? theme.black.white
            : variant === "secondary"
            ? theme.primary.primary400
            : variant === "tertiary"
            ? theme.primary.primary500
            : variant === "text"
            ? theme.primary.primary400
            : variant === "black"
            ? theme.black.black800
            : variant === "danger"
            ? theme.black.white
            : theme.black.white,
        border:
          variant === "secondary"
            ? `1px solid ${theme.primary.primary800}`
            : variant === "danger"
            ? `1px solid ${theme.danger.dangerA11y}`
            : null,
      },
    },
  }));

  const classes = useStyles();
  return (
    <MaterialButton
      className={classes.root}
      disableElevation
      disableFocusRipple
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setNoFocus(true);
        onClick(event);
      }}
      size="medium"
      {...other}
    >
      {/* Loading circle */}
      {loading ? (
        <div style={{ position: "relative" }}>
          {/* bottom */}
          <CircularProgress
            variant="determinate"
            value={100}
            size={20}
            thickness={5}
            style={{
              position: "absolute",
              left: -10,
              top: -10,
              color:
                variant === "primary"
                  ? theme.black.white
                  : variant === "secondary" ||
                    variant === "tertiary" ||
                    variant === "text" ||
                    variant === "black"
                  ? theme.black.black500
                  : theme.black.white,
              opacity:
                variant === "primary"
                  ? 0.4
                  : variant === "secondary" ||
                    variant === "tertiary" ||
                    variant === "text" ||
                    variant === "black"
                  ? 1
                  : 0.4,
            }}
          />
          {/* top */}
          <CircularProgress
            variant="indeterminate"
            color="primary"
            size={20}
            thickness={5}
            style={{
              position: "absolute",
              left: -10,
              top: -10,
              color:
                variant === "primary"
                  ? theme.black.white
                  : variant === "secondary" ||
                    variant === "tertiary" ||
                    variant === "text" ||
                    variant === "black"
                  ? theme.primary.primary800
                  : theme.black.white,
            }}
          />
        </div>
      ) : (
        <div style={{ whiteSpace: "nowrap" }}>{children}</div>
      )}
    </MaterialButton>
  );
};

export default Button;
