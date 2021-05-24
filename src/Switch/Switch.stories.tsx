import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { MySwitchProps } from "./Switch.types";
import Switch from "../Switch/Switch";

export default {
  title: "Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<MySwitchProps> = (args) => {
  return (
    <SWAPTheme>
      <div
        style={{
          display: "flex",
          width: 100,
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Switch checked /> <Switch checked disabled />
      </div>
      <div
        style={{
          display: "flex",
          width: 100,
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Switch {...args} /> <Switch disabled />
        <div
          style={{ position: "absolute", bottom: -20, whiteSpace: "nowrap" }}
        >
          只有我能動喔！!
        </div>
      </div>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
