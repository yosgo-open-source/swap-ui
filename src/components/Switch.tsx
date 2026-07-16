import * as React from "react";
import MuiSwitch from "@mui/material/Switch";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { swapColors as c } from "../theme/tokens";
import type { SwitchProps } from "./Switch.types";

const checkSvg = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 10.21L1.395 7.105L2.81 5.69L4.5 7.385L9.44 2.44L10.855 3.855L4.5 10.21Z"
      fill="#4862CC"
    />
  </svg>
);

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { disabled, sx, ...rest },
  ref,
) {
  const ourStyles = {
    width: 40,
    height: 24,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: "2px",
      transition:
        "left 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        "& + .MuiSwitch-track": {
          border: `1px solid ${c.primary.primary800}`,
          backgroundColor: c.primary.primary400,
          opacity: 1,
        },
        "&:hover + .MuiSwitch-track": { backgroundColor: c.primary.primary600 },
      },
      "&:hover + .MuiSwitch-track": { backgroundColor: c.black.black800 },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 1,
        border: `1px solid ${c.black.black800}`,
        backgroundColor: c.black.black600,
      },
    },
    "& .MuiSwitch-thumb": {
      width: 20,
      height: 20,
      backgroundColor: "white",
      boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
    },
    "& .MuiSwitch-track": {
      borderRadius: "12px",
      border: `1px solid ${c.black.black800}`,
      backgroundColor: c.black.black600,
      opacity: 1,
      transition: "all 200ms ease-out",
    },
  };
  return (
    <Box
      component="span"
      tabIndex={0}
      sx={{
        display: "inline-block",
        width: "fit-content",
        borderRadius: "12px",
        opacity: disabled ? 0.4 : 1,
        "&:focus-visible": {
          boxShadow: disabled ? "unset" : "0px 0px 0px 4px #D7DFF8",
          outline: "none",
        },
      }}
    >
      <MuiSwitch
        ref={ref}
        disabled={disabled}
        disableRipple
        sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
        checkedIcon={
          <Box
            sx={{
              width: 20,
              height: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Fade in timeout={{ enter: 200, exit: 200 }}>
              {checkSvg}
            </Fade>
          </Box>
        }
        {...rest}
      />
    </Box>
  );
});

export default Switch;
