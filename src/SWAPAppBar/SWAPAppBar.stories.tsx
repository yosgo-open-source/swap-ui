import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import SWAPAppBar from "./SWAPAppBar";
import { SWAPAppBarProps } from "../SWAPAppBar/SWAPAppBar.types";
import { Typography } from "@material-ui/core";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

export default {
  title: "SWAPAppBar",
  component: SWAPAppBar,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<SWAPAppBarProps> = (args) => (
  <SWAPTheme>
    <SWAPAppBar {...args} />
    <Typography variant="body2" color="textSecondary">
      1. App Bar 元件之所以沒有顯示在這裡，是因為 AppBar 是固定在網頁上的元件
    </Typography>
    <SWAPSpace size="s" />
    <Typography variant="body2" color="textSecondary">
      2. 縮小視窗來模擬手機版上的 AppBar
    </Typography>
  </SWAPTheme>
);
export const 認識 = Demo.bind({});
認識.args = {
  primaryButton: {
    title: "主按鈕",
    [`onClick`]: () => alert("主按鈕"),
  },
  secondaryButton: {
    title: "次按鈕",
    [`onClick`]: () => alert("次按鈕"),
  },
  navigations: [
    { title: "我四個字", onClick: () => alert("我四個字"), disabled: true },
    { title: "三個字", onClick: () => alert("分頁二") },
    { title: "兩字", onClick: () => alert("分頁三") },
  ],
};
