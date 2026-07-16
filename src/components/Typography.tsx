import * as React from "react";
import MuiTypography from "@mui/material/Typography";
import type { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import { resolveSwapTextColor, type SwapTextColor } from "../theme/textColor";

export interface SwapTypographyProps {
  variant?: MuiTypographyProps["variant"];
  color?: SwapTextColor;
  mode?: "" | "dark";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

// React.memo 沿用 v1（排版元件常大量重複渲染）
const Typography: React.FC<SwapTypographyProps> = React.memo(function Typography({
  variant = "body1",
  color,
  mode,
  children,
  style,
}) {
  return (
    <MuiTypography variant={variant} sx={{ color: resolveSwapTextColor(color, mode) }} style={style}>
      {children}
    </MuiTypography>
  );
});

export default Typography;
