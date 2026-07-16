import * as React from "react";
import MuiTextField from "@mui/material/TextField";
import { swapColors as c } from "../theme/tokens";
import type { TextFieldProps } from "./TextField.types";
import { cssSize } from "../utils/cssSize";

const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(function TextField(
  { width, height, sx, ...rest },
  ref,
) {
  // v1 依賴使用端必傳 height、否則欄位高度坍塌（垂直 padding 為 0）。
  // v2 改善：預設 48px（與 Button medium 同高）；multiline 維持自動高度。
  const resolvedHeight = cssSize(height) ?? (rest.multiline ? undefined : 48);
  const ourStyles = {
    "& .MuiFormHelperText-root": { marginLeft: "16px", marginRight: "16px" },
    "& .MuiOutlinedInput-root": {
      width: cssSize(width),
      height: resolvedHeight,
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
    // resting label 垂直置中隨欄位高度自適應（MUI 預設偏移是按 56px 高算的，
    // 48px 下會偏下 ~3.5px；label 行高約 23px）
    ...(typeof resolvedHeight === "number"
      ? {
          "& .MuiInputLabel-root:not(.MuiInputLabel-shrink)": {
            transform: `translate(14px, ${Math.round((resolvedHeight - 23) / 2)}px)`,
          },
        }
      : {}),
    "& .MuiInputLabel-root.MuiInputLabel-shrink": {
      transform: "translate(14px, -10px)",
      backgroundColor: "white",
      padding: "0 4px",
      fontSize: 14,
      fontWeight: 700,
      color: c.black.black800,
      "&.Mui-focused, &.Mui-error": { color: c.black.black800 },
    },
    // select 模式（v1 selectRoot）
    "& .MuiSelect-select": {
      borderRadius: "8px",
      fontWeight: 400,
      minWidth: rest.fullWidth ? "100%" : "unset",
      display: "flex",
      alignItems: "center",
      "&:focus": { backgroundColor: "white", borderRadius: "8px" },
    },
    "& .MuiSelect-icon": { color: c.black.black700 },
  };
  // v1 select 模式的選單定位（anchorOrigin -9/-16）
  const slotProps = rest.select
    ? {
        ...rest.slotProps,
        select: {
          MenuProps: { anchorOrigin: { vertical: -9 as const, horizontal: -16 as const } },
          ...(rest.slotProps?.select as object | undefined),
        },
      }
    : rest.slotProps;
  return (
    <MuiTextField
      ref={ref}
      variant="outlined"
      sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
      slotProps={slotProps}
    />
  );
});

export default TextField;
