import React from "react";
import styled from "styled-components";

import { SWAPLogoProps } from "./SWAPLogo.types";

import logo01 from "./SWAP_web logo.svg";
import logo02 from "./SWAP_web logo-white.svg";
import logo03 from "./SWAP BIZ_web logo_test-01.svg";

const SWAPLogo: React.FC<SWAPLogoProps> = ({
  business = false,
  size = "middle",
  dark = false,
}) => {
  return (
    <span>
      <SWAPLogoWrap size={size}>
        <img
          className={business ? "business" : ""}
          src={(() => {
            if (business) {
              return logo03;
            } else if (dark) {
              return logo02;
            } else {
              return logo01;
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
        return "39px";
      } else if ((size = "large")) {
        return "48px";
      } else {
        return "39px";
      }
    }};
    &.business {
      height: ${({ size }: SWAPLogoProps) => {
        if (size === "small") {
          return "48px";
        } else if (size === "middle") {
          return "72px";
        } else if ((size = "large")) {
          return "81px";
        } else {
          return "42px";
        }
      }};
    }
  }
`;

export default SWAPLogo;
