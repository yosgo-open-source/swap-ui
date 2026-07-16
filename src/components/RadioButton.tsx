import * as React from "react";
import MuiRadio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { swapColors as c } from "../theme/tokens";
import type { RadioButtonProps } from "./RadioButton.types";

const dotSvg = (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="5" r="5" fill="white" />
  </svg>
);

function iconSx(disableHover?: boolean) {
  return {
    position: "absolute",
    width: 24,
    height: 24,
    borderRadius: "100px",
    backgroundColor: c.black.white,
    border: `1px solid ${c.black.black500}`,
    "input:hover ~ &": {
      border: `1px solid ${disableHover ? c.black.black500 : c.black.black1000}`,
    },
    "input:focus-visible ~ &": { boxShadow: "0px 0px 0px 4px #D7DFF8" },
    "input:disabled ~ &": { opacity: 0.4 },
    "input:disabled:hover ~ &": { border: `1px solid ${c.black.black500}` },
  } as const;
}

function checkedIconSx(disableHover?: boolean) {
  return {
    position: "absolute",
    width: 24,
    height: 24,
    borderRadius: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: c.primary.primary400,
    border: `1px solid ${c.primary.primary600}`,
    "input:hover ~ &": {
      border: `1px solid ${disableHover ? c.primary.primary600 : c.primary.primaryA11y}`,
    },
    "input:focus-visible ~ &": { boxShadow: "0px 0px 0px 4px #D7DFF8" },
    "input:disabled ~ &": { opacity: 0.4 },
    "input:disabled:hover ~ &": { border: `1px solid ${c.primary.primary600}` },
  } as const;
}

const RadioButton = React.forwardRef<HTMLButtonElement, RadioButtonProps>(function RadioButton(
  { disableHover, label, labelPlacement, sx, ...rest },
  ref,
) {
  const ourStyles = {
    width: 40,
    height: 40,
    boxShadow: "none",
    "&:hover, &.Mui-checked:hover": {
      backgroundColor: disableHover ? "unset" : c.black.black300,
    },
  };
  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      style={{ marginRight: 0 }}
      control={
        <MuiRadio
          ref={ref}
          disableFocusRipple
          disableTouchRipple
          sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
          checkedIcon={<Box component="span" sx={checkedIconSx(disableHover)}>{dotSvg}</Box>}
          icon={<Box component="span" sx={iconSx(disableHover)} />}
          {...rest}
        />
      }
    />
  );
});

export default RadioButton;
