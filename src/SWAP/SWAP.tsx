// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { SWAPProps } from "./SWAP.types";

const SWAP: React.FC<SWAPProps> = ({ size, color }) => (
  <div data-testid="SWAP" className="swap">
    <SWAPWrap>
      <img
        className={`logo_size_${size ? size : "medium"}`}
        src={
          color === "default"
            ? "https://swap.yosgo.com/media/swap_black.png"
            : "https://swap.yosgo.com/media/swap.png"
        }
      />
    </SWAPWrap>
  </div>
);

const SWAPWrap = styled.div`
  img {
    display: block;
  }
  .logo_size_small {
    height: 36px;
  }
  .logo_size_medium {
    height: 45px;
  }
  .logo_size_large {
    height: 57px;
  }
`;

export default SWAP;
