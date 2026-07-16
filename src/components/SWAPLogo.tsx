import * as React from "react";
import Box from "@mui/material/Box";
import { cssSize } from "../utils/cssSize";
import type { SWAPLogoProps } from "./SWAPLogo.types";

import logoNormal from "./assets/SWAP_web logo.svg";
import logoNormalDark from "./assets/SWAP_web logo-white.svg";
import logoBiz from "./assets/SWAP BIZ_web logo_test-01.svg";
import logoBizZhTw from "./assets/Blue - Biz.svg";
import logoBlack from "./assets/Color=Black.svg";
import logoBlackDark from "./assets/Color=White.svg";
import logoIcon from "./assets/Color=Blue.svg";
import logoIconBlack from "./assets/Color=White_icon.svg";

function pickSrc(p: SWAPLogoProps): string {
  if (p.business) return p.chinese ? logoBizZhTw : logoBiz;
  if (p.black) {
    if (p.iconOnly) return logoIconBlack;
    if (p.dark) return logoBlackDark;
    return logoBlack;
  }
  if (p.iconOnly) return logoIcon;
  if (p.dark) return logoNormalDark;
  return logoNormal;
}

function logoHeight(size: SWAPLogoProps["size"], business?: boolean): string {
  const map = business
    ? { small: "48px", middle: "72px", large: "81px" }
    : { small: "30px", middle: "40px", large: "48px" };
  if (size === "small" || size === "middle" || size === "large") return map[size];
  if (typeof size === "number") return `${size}px`;
  if (typeof size === "string") return size;
  return business ? "42px" : "100%";
}

const SWAPLogo: React.FC<SWAPLogoProps> = (props) => {
  const { size = "middle", width, height } = props;
  return (
    <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
      <img
        src={pickSrc(props)}
        alt={props.business ? "SWAP BIZ" : "SWAP"}
        style={{
          height: cssSize(height) ?? logoHeight(size, props.business),
          width: cssSize(width),
        }}
      />
    </Box>
  );
};

export default SWAPLogo;
