import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import { MyCheckBoxProps } from "../CheckBox/CheckBox.types";
import CheckBox from "./CheckBox";
import RadioButton from "./RadioButton";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

export default {
  title: "CheckBox & RadioButton",
  component: CheckBox,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const Demo: Story<MyCheckBoxProps> = (args) => {
  const [r, setR] = useState(false);
  return (
    <SWAPTheme>
      <b> CheckBox & Radio Button + Label</b>
      <div style={{ display: "flex" }}>
        <CheckBox
          {...args}
          onChange={() => {
            setR(!r);
          }}
        />
        <RadioButton
          {...args}
          checked={r}
          onChange={() => {
            setR(true);
          }}
        />
      </div>
      <SWAPSpace size="m" />
      <div style={{ display: "flex" }}>
        <div>
          <b> CheckBox</b>
          <div style={{ display: "flex" }}>
            <CheckBox />
            <CheckBox checked />
          </div>
          <SWAPSpace size="s" />
          <div style={{ display: "flex" }}>
            <CheckBox disabled />
            <CheckBox checked disabled />
          </div>
        </div>
        <div>
          <b> Radio Button</b>
          <div style={{ display: "flex" }}>
            <RadioButton />
            <RadioButton checked />
          </div>
          <SWAPSpace size="s" />
          <div style={{ display: "flex" }}>
            <RadioButton disabled />
            <RadioButton checked disabled />
          </div>
        </div>
      </div>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = { label: "SWAP" };
