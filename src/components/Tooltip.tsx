import * as React from "react";
import MuiTooltip from "@mui/material/Tooltip";
import { swapColors as c, swapShadows } from "../theme/tokens";
import type { TooltipProps } from "./Tooltip.types";
import { cssSize } from "../utils/cssSize";

function resolveMargin(p: TooltipProps): string | number {
  if (p.margin) return p.margin;
  if (p.marginTop) return `0px 0px ${p.marginTop}px 0px`;
  if (p.marginBottom) return `${p.marginBottom}px 0px 0px 0px`;
  if (p.marginRight) return `0px 0px 0px ${p.marginRight}px`;
  if (p.marginLeft) return `0px ${p.marginLeft}px 0px 0px`;
  return "10px 0px";
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    dark,
    light,
    arrow,
    margin,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    width = 240,
    children,
    childrenStyle,
    slotProps: userSlotProps,
    ...other
  } = props;
  const bg = light ? c.black.white : c.black.black900;
  const fg = light ? c.black.black800 : c.black.white;
  const ourTooltipSx = {
    margin: resolveMargin(props),
    backgroundColor: bg,
    color: fg,
    padding: arrow ? "7.5px 12px" : "12px",
    boxShadow: swapShadows.m,
    border: light ? `1px solid ${c.black.black500}` : "none",
    maxWidth: cssSize(width),
    fontSize: 12,
    lineHeight: 1.4,
    fontWeight: arrow ? 700 : 400,
  };
  // 合併產品端 slotProps：其他 slot 直通，tooltip/arrow 的 sx 以陣列合併（產品端在後、可複寫）
  const us = (userSlotProps ?? {}) as Record<string, { sx?: unknown } | undefined>;
  const asArr = (v: unknown) => (Array.isArray(v) ? v : v ? [v] : []);
  return (
    <MuiTooltip
      {...other}
      arrow={arrow}
      slotProps={{
        ...us,
        tooltip: { ...us.tooltip, sx: [ourTooltipSx, ...asArr(us.tooltip?.sx)] },
        arrow: { ...us.arrow, sx: [{ color: bg }, ...asArr(us.arrow?.sx)] },
      }}
    >
      <span
        style={{
          width: "fit-content",
          height: "fit-content",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          ...childrenStyle,
        }}
      >
        {children}
      </span>
    </MuiTooltip>
  );
};

export default Tooltip;
