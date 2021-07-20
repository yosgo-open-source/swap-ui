import React from "react";
import styled from "styled-components";

import { SWAPLogoProps } from "./SWAPLogo.types";

import logo_normal from "./SWAP_web logo.svg";
import logo_normal_dark from "./SWAP_web logo-white.svg";
import logo_biz from "./SWAP BIZ_web logo_test-01.svg";
import logo_biz_zh_tw from "./Blue - Biz.svg";
import logo_black from "./Color=Black.svg";
import logo_black_dark from "./Color=White.svg";
import logo_icon from "./Color=Blue.svg";
import logo_icon_black from "./Color=White_icon.svg";

const SWAPLogo: React.FC<SWAPLogoProps> = ({
  black = false,
  iconOnly = false,
  chinese = false,
  business = false,
  size = "middle",
  dark = false,
  height,
  width,
}) => {
  return (
    <span>
      <SWAPLogoWrap size={size}>
        <img
          className={business ? "business" : ""}
          style={{ width: width, height: height }}
          src={(() => {
            if (business) {
              if (chinese) {
                return logo_biz_zh_tw;
              }
              return logo_biz;
            } else if (black) {
              if (iconOnly) {
                return logo_icon_black;
              } else if (dark) {
                return logo_black_dark;
              }
              return logo_black;
            } else if (iconOnly) {
              return logo_icon;
            } else if (dark) {
              return logo_normal_dark;
            } else {
              return logo_normal;
            }
          })()}
        />
      </SWAPLogoWrap>
    </span>
  );
};

const SWAPLogoWrap = styled.div`
  display: flex;
  align-items: center;
  img {
    height: ${({ size }: SWAPLogoProps) => {
      if (size === "small") {
        return "30px";
      } else if (size === "middle") {
        return "40px";
      } else if (size === "large") {
        return "48px";
      } else if (size && typeof size === "number") {
        return `${size}px`;
      } else if (size && typeof size === "string") {
        return size;
      } else {
        return "100%";
      }
    }};
    &.business {
      height: ${({ size }: SWAPLogoProps) => {
        if (size === "small") {
          return "48px";
        } else if (size === "middle") {
          return "72px";
        } else if (size === "large") {
          return "81px";
        } else if (size && typeof size === "number") {
          return `${size}px`;
        } else if (size && typeof size === "string") {
          return size;
        } else {
          return "42px";
        }
      }};
    }
  }
`;

export default SWAPLogo;
