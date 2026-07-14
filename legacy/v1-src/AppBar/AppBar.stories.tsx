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
        component: " ",
      },
    },
  },
};

const Demo: Story<AppBarProps> = (args) => (
  <SWAPTheme>
    <AppBar />
    <div style={{ margin: 60, display: "flex", alignItems: "center" }}>
      <div style={{ border: "3px dashed #cccccc", padding: 24 }}>
        <h2 style={{ textAlign: "center" }}>LandingPage</h2> 登入 {"&"} 註冊
        {"  =>  "} 前往帳戶總攬
      </div>
      <h2 style={{ margin: "0 48px" }}>{"=>"}</h2>
      <div style={{ border: "3px dashed #cccccc", padding: 24 }}>
        <h2 style={{ textAlign: "center" }}>Dashboard</h2> 登出 {"& "}
        回到官方網站
      </div>
    </div>
  </SWAPTheme>
);
export const 認識 = Demo.bind({});
認識.args = {};
