import React from "react";
import styled from "styled-components";

import { SWAPSpaceProps } from "./SWAPSpace.types";

const SWAPSpace: React.FC<SWAPSpaceProps> = ({ size }) => {
  return (
    <div>
      <SWAPSpaceWrap size={size} />
    </div>
  );
};

const SWAPSpaceWrap = styled.div`
  height: ${({ size }: SWAPSpaceProps) => {
    if (size === "small") {
      return 12;
    } else if (size === "middle") {
      return 24;
    } else if (size === "large") {
      return 36;
    } else {
      return 12;
    }
  }}px;
`;

export default SWAPSpace;
