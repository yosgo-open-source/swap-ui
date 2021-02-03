import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import AppBar from "./AppBar";
import { AppBarProps } from "../AppBar/AppBar.types";

export default {
  title: "AppBar",
  component: AppBar,
  parameters: {
    docs: {
      description: {
        component: "網頁上方的導覽列",
      },
    },
  },
};

const Demo: Story<AppBarProps> = (args) => (
  <SWAPTheme>
    <AppBar />
    <div style={{ marginTop: 60 }}>
      點點看！
      <br /> LandingPage {"=>"} 登入 or 註冊 {"=>"} 前往帳戶總攬 {"=>"}
      Dashboard {"=>"} 登出 or 回到官方網站 {"=>"} LandingPage
    </div>
  </SWAPTheme>
);
export const 認識 = Demo.bind({});
認識.args = {};
