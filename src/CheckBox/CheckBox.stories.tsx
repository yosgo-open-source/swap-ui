import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import { CheckBoxProps } from "../CheckBox/CheckBox.types";
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

const Demo: Story<CheckBoxProps> = (args) => {
  const [r, setR] = useState(false);
  return (
    <SWAPTheme>
      點點看！
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
          CheckBox
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
          Radio Button
          <div style={{ display: "flex" }}>
            <RadioButton />
            <RadioButton checked />
          </div>
        </div>
      </div>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = { label: "SWAP" };
