import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import AppBar from "./AppBar";
import { AppBarProps } from "../AppBar/AppBar.types";
import { Typography } from "@material-ui/core";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

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
  </SWAPTheme>
);
export const 認識 = Demo.bind({});
認識.args = {};
