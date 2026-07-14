import React from "react";

import { SWAPSpaceProps } from "./SWAPSpace.types";

const SWAPSpace: React.FC<SWAPSpaceProps> = React.memo(({ size }) => {
  const height = () => {
    if (size === "xxs") {
      return 4;
    } else if (size === "xs") {
      return 8;
    } else if (size === "s") {
      return 12;
    } else if (size === "m") {
      return 16;
    } else if (size === "l") {
      return 24;
    } else if (size === "xl") {
      return 32;
    } else if (size === "2xl") {
      return 40;
    } else if (size === "3xl") {
      return 48;
    } else if (size === "4xl") {
      return 56;
    } else if (typeof size === "number") {
      return size;
    } else return 16;
  };
  return <div style={{ height: `${height()}px` }} />;
});

export default SWAPSpace;
