import * as React from "react";
import MuiTypography from "@mui/material/Typography";
import type { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import { resolveSwapTextColor, type SwapTextColor } from "../theme/textColor";

// color 改為 swap token（Omit 掉 MUI 原生 color 型別避免衝突）；其餘 MUI props 全透傳
export interface SwapTypographyProps extends Omit<MuiTypographyProps, "color"> {
  color?: SwapTextColor;
  mode?: "" | "dark";
}

// React.memo 沿用 v1（排版元件常大量重複渲染）
const Typography = React.memo(
  React.forwardRef<HTMLElement, SwapTypographyProps>(function Typography(
    { variant = "body1", color, mode, sx, ...rest },
    ref,
  ) {
    return (
      <MuiTypography
        ref={ref}
        variant={variant}
        // 我方預設 color 先，使用者 sx 後 → 可複寫
        sx={[{ color: resolveSwapTextColor(color, mode) }, ...(Array.isArray(sx) ? sx : [sx])]}
        {...rest}
      />
    );
  }),
);

export default Typography;
