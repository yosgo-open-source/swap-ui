import * as React from "react";
import MuiCheckbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { swapColors as c } from "../theme/tokens";
import type { CheckBoxProps } from "./CheckBox.types";

const checkSvg = (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 8.5L7 13L15 2" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

function iconSx(disableHover?: boolean) {
  return {
    position: "absolute",
    width: 24,
    height: 24,
    borderRadius: "4px",
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
    borderRadius: "4px",
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

const CheckBox = React.forwardRef<HTMLButtonElement, CheckBoxProps>(function CheckBox(
  { disableHover, label, labelPlacement, checkedIcon, icon, sx, ...rest },
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
        <MuiCheckbox
          ref={ref}
          disableFocusRipple
          disableTouchRipple
          sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
          checkedIcon={
            <Box component="span" sx={checkedIconSx(disableHover)}>
              {checkedIcon ?? checkSvg}
            </Box>
          }
          icon={<Box component="span" sx={iconSx(disableHover)}>{icon ?? null}</Box>}
          {...rest}
        />
      }
    />
  );
});

export default CheckBox;
