import React from "react";
import styled from "styled-components";

import { SWAPLogoProps } from "./SWAPLogo.types";

const logo01 = require("./SWAP_LOGO_01.svg") as string;
const logo02 = require("./SWAP_LOGO_02.svg") as string;
const logo03 = require("./SWAP_LOGO_03.svg") as string;

const SWAPLogo: React.FC<SWAPLogoProps> = ({
  business = false,
  size = "middle",
  dark = false,
}) => {
  return (
    <div>
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
    </div>
  );
};

const SWAPLogoWrap = styled.div`
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
