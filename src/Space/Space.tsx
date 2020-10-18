import React from "react";
import styled from "styled-components";

import { SpaceProps } from "./Space.types";

const Space: React.FC<SpaceProps> = ({ size }) => {
  return (
    <div>
      <SpaceWrap size={size} />
    </div>
  );
};

const SpaceWrap = styled.div`
  height: ${({ size }: SpaceProps) => {
    if (size === "small") {
      return 12;
    } else if (size === "medium") {
      return 24;
    } else if (size === "large") {
      return 36;
    } else {
      return 12;
    }
  }}px;
`;

export default Space;
