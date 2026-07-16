import * as React from "react";
import MuiTextField from "@mui/material/TextField";
import { swapColors as c } from "../theme/tokens";
import type { TextFieldProps } from "./TextField.types";

const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(function TextField(
  { width, height, sx, ...rest },
  ref,
) {
  const ourStyles = {
    "& .MuiFormHelperText-root": { marginLeft: "16px", marginRight: "16px" },
    "& .MuiOutlinedInput-root": {
      width: width ?? undefined,
      height: height ?? undefined,
      padding: "0px 16px",
      backgroundColor: "white",
      fontSize: 16,
      fontWeight: 400,
      "& fieldset": { borderColor: c.black.black500, "& legend": { width: "0.01px" } },
      "&.Mui-focused": {
        boxShadow: "0px 0px 0px 4px #D7DFF8",
        "& fieldset": { border: `1px solid ${c.primary.primary400} !important` },
        "&.Mui-error": {
          boxShadow: "none",
          "& fieldset": { border: `1px solid ${c.danger.danger800} !important` },
        },
      },
      "&.Mui-error fieldset": { border: `1px solid ${c.danger.danger800} !important` },
    },
    "& .MuiInputBase-input": {
      padding: 0,
      "&::placeholder": { color: c.black.black700, opacity: 1 },
      "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #FFFFFF inset" },
    },
    "& .MuiInputLabel-root.MuiInputLabel-shrink": {
      transform: "translate(14px, -10px)",
      backgroundColor: "white",
      padding: "0 4px",
      fontSize: 14,
      fontWeight: 700,
      color: c.black.black800,
      "&.Mui-focused, &.Mui-error": { color: c.black.black800 },
    },
  };
  return (
    <MuiTextField
      ref={ref}
      variant="outlined"
      sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    />
  );
});

export default TextField;
