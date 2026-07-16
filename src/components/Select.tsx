import * as React from "react";
import MuiSelect from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { swapColors as c } from "../theme/tokens";
import type { SelectProps } from "./Select.types";

const Select: React.FC<SelectProps> = ({
  children,
  style,
  value,
  onChange,
  defaultValue,
  error,
  disabled,
  type,
  InputProps,
  autoFocus,
  placeholder,
  fullWidth,
  required,
  helperText,
  width,
  height,
  horizontal = "left",
  vertical = "bottom",
  open,
  placeholderStyle,
  selectStyle,
  helperTextStyle,
  onClick,
  transformOrigin,
  paddingTop,
  paddingLeft,
  dropdown,
}) => {
  const hasCustomPadding = Boolean(paddingTop || paddingLeft);
  return (
    <FormControl
      variant="outlined"
      style={style}
      sx={{ width: width ?? "100%" }}
    >
      <InputLabel
        style={placeholderStyle}
        sx={{
          "&.MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
            transform: hasCustomPadding
              ? `translate(${(paddingLeft ?? 0) - 4}px, ${(paddingTop ?? 0) + 2}px) scale(1)`
              : "translate(12px, 14px) scale(1)",
          },
          "&.MuiInputLabel-shrink": {
            width: "fit-content",
            padding: "0 4px",
            backgroundColor: "white",
            fontSize: 12,
            fontWeight: 700,
            color: c.black.black800,
            "&.Mui-focused": { fontWeight: 700, color: c.black.black800 },
          },
        }}
      >
        {placeholder}
      </InputLabel>
      <MuiSelect
        style={selectStyle}
        open={open}
        value={value}
        onChange={onChange}
        label={placeholder}
        defaultValue={defaultValue}
        error={error}
        disabled={disabled}
        type={type}
        autoFocus={autoFocus}
        required={required}
        fullWidth={fullWidth}
        onClick={onClick}
        inputProps={InputProps}
        input={
          <OutlinedInput
            sx={{
              "& .MuiOutlinedInput-notchedOutline": { borderColor: c.black.black500 },
              "&:hover": {
                borderColor: c.black.black1000,
                "& svg": { color: c.black.black1000 },
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: c.black.black1000,
                borderWidth: 1,
              },
              "&.Mui-focused svg": { color: c.black.black1000 },
            }}
          />
        }
        sx={{
          "& .MuiSelect-select": {
            height: height ? height - 32 : 16,
            padding: hasCustomPadding
              ? `${paddingTop ?? 12}px ${paddingLeft ?? 16}px`
              : "12px 16px",
            display: "flex",
            alignItems: "center",
            fontSize: dropdown ? 14 : 16,
            fontWeight: dropdown ? 700 : 400,
            border: "none",
            color: c.black.black800,
            "&:focus": { backgroundColor: "white", color: c.black.black1000 },
            "&:hover": { backgroundColor: "white", color: c.black.black1000 },
          },
          "& .MuiSelect-icon": { color: c.black.black800 },
        }}
        MenuProps={{
          transformOrigin,
          anchorOrigin: { vertical, horizontal },
          slotProps: { paper: { sx: { marginTop: "8px" } } },
        }}
      >
        {children}
      </MuiSelect>
      <FormHelperText style={helperTextStyle}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default Select;
