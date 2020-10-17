import React from "react";
import SWAP from "./SWAP";

export default {
  title: "SWAP LOGO",
  component: SWAP,
  parameters: {
    docs: {
      page: () => <>Welcome to SWAP UI</>,
    },
  },
};

export const 預設 = () => <SWAP />;

export const 顏色_Default = () => <SWAP color="default" />;

export const 顏色_Primary = () => <SWAP color="primary" />;

export const 大型 = () => <SWAP size="large" />;

export const 小型 = () => <SWAP size="small" />;
