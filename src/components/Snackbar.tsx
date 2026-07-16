import * as React from "react";
import MuiSnackbar from "@mui/material/Snackbar";
import Slide, { type SlideProps } from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { swapColors as c, swapShadows, swapRadius } from "../theme/tokens";
import { cssSize } from "../utils/cssSize";
import IconButton from "./IconButton";
import type { SnackbarProps } from "./Snackbar.types";

type TransitionProps = Omit<SlideProps, "direction">;
const TransitionLeft = (p: TransitionProps) => <Slide {...p} direction="left" />;
const TransitionRight = (p: TransitionProps) => <Slide {...p} direction="right" />;
const TransitionUp = (p: TransitionProps) => <Slide {...p} direction="up" />;
const TransitionDown = (p: TransitionProps) => <Slide {...p} direction="down" />;
const TransitionFade = (p: TransitionProps) => <Fade {...p} />;

const iconClose = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      fill="white"
    />
  </svg>
);
const iconChecked = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 7.00003L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59003L21 7.00003Z" fill="white" />
  </svg>
);
const iconError = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 13H11V7H13V13ZM13 17H11V15H13V17ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
      fill="white"
    />
  </svg>
);

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  transitionDirection,
  transitionDuration,
  width,
  height,
  variant,
  action,
  revertButton,
  closeIcon,
  icon,
  checkIcon,
  errorIcon,
  sx,
  ...rest
}) => {
  const bg =
    variant === "success" ? c.success.success800 : variant === "error" ? c.danger.danger900 : c.black.black1000;
  const border =
    variant === "success"
      ? c.success.successA11y
      : variant === "error"
        ? c.danger.dangerA11y
        : c.black.black1000;
  const leadingIcon = checkIcon ? iconChecked : errorIcon ? (icon ?? iconError) : icon;
  const ourStyles = {
    "@media only screen and (min-width: 600px)": { width: "fit-content", marginRight: "24px" },
    "@media only screen and (max-width: 600px)": {
      width: "unset",
      bottom: 16,
      left: 16,
      right: 16,
    },
    "& .MuiSnackbarContent-root": {
      flexWrap: "nowrap",
      minWidth: 320,
      maxWidth: 640,
      width: cssSize(width) ?? "unset",
      height: cssSize(height) ?? "unset",
      boxShadow: swapShadows.l,
      borderRadius: swapRadius.m,
      backgroundColor: bg,
      border: `1px solid ${border}`,
      padding: "12px 16px",
      boxSizing: "border-box",
    },
    "& .MuiSnackbarContent-message": { padding: 0 },
    "& .MuiSnackbarContent-action": { padding: 0 },
  };
  return (
    <MuiSnackbar
      {...rest}
      sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
      message={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#ffffff",
          }}
        >
          {leadingIcon ? (
            <>
              {leadingIcon}
              <Box sx={{ width: "8px", height: "100%" }} />
            </>
          ) : null}
          {message}
        </Box>
      }
      action={
        action ?? (
          <>
            {revertButton ? (
              <Box
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  color: c.secondary.secondary600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  marginLeft: "8px",
                }}
                onClick={revertButton.onClick}
              >
                {revertButton.label ?? "收回操作"}
              </Box>
            ) : null}
            {closeIcon ? (
              <IconButton
                hoverColor={
                  variant === "success"
                    ? "#006818"
                    : variant === "error"
                      ? "#A00204"
                      : (closeIcon.hoverColor ?? "#333333")
                }
                onClick={closeIcon.onClick}
                sx={{ marginLeft: "8px" }}
              >
                {closeIcon.icon ?? iconClose}
              </IconButton>
            ) : null}
          </>
        )
      }
      slots={{
        transition:
          transitionDirection === "left"
            ? TransitionLeft
            : transitionDirection === "right"
              ? TransitionRight
              : transitionDirection === "up"
                ? TransitionUp
                : transitionDirection === "down"
                  ? TransitionDown
                  : TransitionFade,
        ...rest.slots,
      }}
      transitionDuration={transitionDuration}
    />
  );
};

export default Snackbar;
