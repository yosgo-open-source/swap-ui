import * as React from "react";
import MuiSelect from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import { swapColors as c } from "../theme/tokens";
import type { DropdownProps } from "./Dropdown.types";
import { cssSize } from "../utils/cssSize";

const Dropdown: React.FC<DropdownProps> = ({
  children,
  formControlStyle,
  inputProps,
  MenuProps,
  helperText,
  width,
  height,
  helperTextStyle,
  sx,
  ...rest
}) => {
  const large = (height ?? 0) >= 56;
  const ourStyles = {
    "& .MuiSelect-select": {
      height: height ? (large ? height - 38 : height - 24) : 16,
      display: "flex",
      alignItems: "center",
      padding: large ? "19px 8px 19px 24px" : "12px 4px 12px 16px",
      fontSize: large ? 16 : 14,
      lineHeight: large ? "18px" : "15.75px",
      fontWeight: 700,
      color: c.black.black800,
      "&:hover": { color: c.black.black1000, backgroundColor: "white", fontWeight: 700 },
      "&:focus-visible": { color: c.black.black1000, backgroundColor: "white", fontWeight: 700 },
    },
    "& .MuiSelect-icon": { marginTop: "2px", width: 20, height: 20, color: c.black.black800 },
  };
  return (
    <FormControl variant="outlined" style={formControlStyle} sx={{ width: cssSize(width) ?? "100%" }}>
      <MuiSelect
        {...rest}
        inputProps={inputProps}
        input={
          <OutlinedInput
            sx={{
              "& .MuiOutlinedInput-notchedOutline": { borderColor: c.black.black500 },
              "&:hover": { borderColor: c.black.black1000, "& svg": { color: c.black.black1000 } },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: c.black.black1000,
                borderWidth: 1,
              },
              "&.Mui-focused svg": { color: c.black.black1000 },
            }}
          />
        }
        sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
        MenuProps={{
          slotProps: { paper: { sx: { marginTop: "8px" } } },
          ...MenuProps,
        }}
      >
        {children}
      </MuiSelect>
      <FormHelperText style={helperTextStyle}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default Dropdown;
