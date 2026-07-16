import * as React from "react";
import Box from "@mui/material/Box";
import { swapColors as c } from "../theme/tokens";
import type { ChipProps } from "./Chip.types";

const SHADE = {
  neutral: { fill: c.black.black300, border: c.black.black500, text: c.black.black800 },
  primary: { fill: c.primary.primary50, border: c.primary.primary800, text: c.primary.primary800 },
  success: { fill: c.success.success50, border: c.success.success800, text: c.success.success800 },
  danger: { fill: c.danger.danger50, border: c.danger.danger800, text: c.danger.danger800 },
} as const;

const successIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 4.66666L6 12.6667L2.33333 9L3.27333 8.06L6 10.78L13.06 3.72666L14 4.66666Z"
      fill="#00821E"
    />
  </svg>
);

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(function Chip(
  { variant = "primary", outlined, contained, width, height, label, icon, sx, ...rest },
  ref,
) {
  const s = SHADE[variant];
  const isOutlined = outlined || !contained;
  const ourStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    fontSize: "0.75rem",
    lineHeight: "17px",
    fontWeight: 700,
    width: width ?? "fit-content",
    height: height ?? 24,
    padding: isOutlined ? "0px 8px" : "0px 9px",
    backgroundColor: isOutlined ? c.black.white : s.fill,
    border: isOutlined ? `1px solid ${s.border}` : "none",
    color: s.text,
  };
  return (
    <Box ref={ref} sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]} {...rest}>
      <Box component="span" sx={{ marginRight: variant === "success" ? "4px" : 0 }}>
        {label}
      </Box>
      {variant === "success" && !icon ? successIcon : icon}
    </Box>
  );
});

export default Chip;
