import * as React from "react";
import Box from "@mui/material/Box";
import { swapColors as c } from "../theme/tokens";
import { cssSize } from "../utils/cssSize";
import Typography from "./Typography";
import type { BannerProps } from "./Banner.types";

const PALETTE = {
  normal: { bg: c.black.black100, border: c.black.black500, iconFill: c.black.black700 },
  info: { bg: c.primary.primary50, border: c.primary.primary200, iconFill: c.primary.primary400 },
  success: { bg: c.success.success50, border: c.success.success400, iconFill: "#00932A" },
  warning: { bg: c.secondary.secondary50, border: c.secondary.secondary600, iconFill: "#E5640C" },
  error: { bg: c.danger.danger50, border: c.danger.danger300, iconFill: c.danger.danger700 },
} as const;

const infoPath =
  "M13 9H11V7H13V9ZM13 17H11V11H13V17ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z";
const successPath =
  "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z";
const warningPath = "M13 14H11V9H13V14ZM13 18H11V16H13V18ZM1 21H23L12 2L1 21Z";

function defaultIcon(variant: keyof typeof PALETTE) {
  const path = variant === "success" ? successPath : variant === "warning" ? warningPath : infoPath;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={path} fill={PALETTE[variant].iconFill} />
    </svg>
  );
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(function Banner(
  { icon, variant = "info", width, height, mobile, children, sx, ...rest },
  ref,
) {
  // v1：內容高度 >60 時改為 flex-start 對齊（mount 時量測）
  const innerRef = React.useRef<HTMLDivElement | null>(null);
  const [alignStart, setAlignStart] = React.useState(false);
  React.useEffect(() => {
    if (innerRef.current && innerRef.current.offsetHeight > 60) setAlignStart(true);
  }, []);

  const p = PALETTE[variant];
  const ourStyles = {
    backgroundColor: p.bg,
    border: `1px solid ${p.border}`,
    borderRadius: "8px",
    padding: "12px 16px",
    width: cssSize(width),
    height: cssSize(height),
    display: "flex",
    alignItems: mobile || alignStart ? "flex-start" : "center",
  };
  return (
    <Box
      ref={(node: HTMLDivElement | null) => {
        innerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    >
      <Box sx={{ width: 24, height: 24, marginRight: "8px", flexShrink: 0 }}>
        {icon ?? defaultIcon(variant)}
      </Box>
      {/* component="div"：caption2 預設映射為 <p>，而 <p> 只能容納 phrasing content，
          使用者若在 children 放 div/Typography 會是非法巢狀（SSR 下為 hydration error）。
          variant 只決定樣式、component 只決定標籤，故視覺不變。 */}
      <Typography variant="caption2" component="div">
        {children}
      </Typography>
    </Box>
  );
});

export default Banner;
