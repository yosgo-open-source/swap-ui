import MaterialButton from "@material-ui/core/Button";
import React, { useState } from "react";
import { ButtonProps } from "./Button.types";
import { makeStyles, useTheme } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  startIcon,
  endIcon,
  fullWidth,
  minWidth,
  width,
  size,
  style,
  disabled,
  loading,
  onClick,
}) => {
  const [noFocus, setNoFocus] = useState(false);
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      color:
        variant === "primary"
          ? theme.black.white
          : variant === "secondary"
          ? theme.primary.primary400
          : variant === "tertiary"
          ? theme.primary.primary500
          : variant === "text"
          ? theme.primary.primary400
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
          : theme.primary.primary400,
      border:
        variant === "primary"
          ? `1px solid ${theme.primary.primary600}`
          : variant === "secondary"
          ? `1px solid ${theme.primary.primary400}`
          : variant === "tertiary"
          ? null
          : variant === "text"
          ? null
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
            : theme.primary.primary300,
        border:
          variant === "primary"
            ? `1px solid ${theme.primary.primary300}`
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
            : theme.primary.primary500,
      },
      noFocus: null,
      "&:focus": {
        boxShadow: noFocus ? null : "0px 0px 0px 4px #D7DFF8",
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
          : theme.primary.primary400,
        border: noFocus
          ? null
          : variant === "secondary"
          ? `1px solid ${theme.primary.primary400}`
          : variant === "tertiary"
          ? `1px solid ${theme.primary.primary400}`
          : variant === "text"
          ? `1px solid ${theme.primary.primary400}`
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
            : theme.black.white,
        border:
          variant === "secondary"
            ? `1px solid ${theme.primary.primary800}`
            : null,
      },
    },
  });
  const classes = useStyles();
  return (
    <MaterialButton
      className={classes.root}
      disableElevation
      disableFocusRipple
      onClick={() => {
        setNoFocus(true);
        onClick();
      }}
      fullWidth={fullWidth}
      disabled={disabled}
      size="medium"
      startIcon={startIcon}
      endIcon={endIcon}
      style={style}
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
                    variant === "text"
                  ? theme.black.black500
                  : theme.black.white,
              opacity:
                variant === "primary"
                  ? 0.4
                  : variant === "secondary" ||
                    variant === "tertiary" ||
                    variant === "text"
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
                    variant === "text"
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
