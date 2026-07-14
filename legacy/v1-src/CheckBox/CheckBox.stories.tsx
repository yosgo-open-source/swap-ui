import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import { MyCheckBoxProps } from "../CheckBox/CheckBox.types";
import CheckBox from "./CheckBox";
import RadioButton from "./RadioButton";
import RadioList from "./RadioList";
import CheckBoxList from "./CheckBoxList";
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
  const [checked, setChecked] = useState<{
    [key: number]: { checked: boolean };
  }>({});

  return (
    <SWAPTheme>
      <div
        style={{ display: "flex", width: 700, justifyContent: "space-between" }}
      >
        <div>
          <b> CheckBox & Radio Button + Label</b>
          <div style={{ display: "flex", gridGap: 8 }}>
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
          <div style={{ display: "flex", gridGap: 8 }}>
            <div>
              <b> CheckBox</b>
              <div style={{ display: "flex", gridGap: 8 }}>
                <CheckBox />
                <CheckBox checked />
              </div>
              <SWAPSpace size="s" />
              <div style={{ display: "flex", gridGap: 8 }}>
                <CheckBox disabled />
                <CheckBox checked disabled />
              </div>
            </div>
            <div>
              <b> Radio Button</b>
              <div style={{ display: "flex", gridGap: 8 }}>
                <RadioButton />
                <RadioButton checked />
              </div>
              <SWAPSpace size="s" />
              <div style={{ display: "flex", gridGap: 8 }}>
                <RadioButton disabled />
                <RadioButton checked disabled />
              </div>
            </div>
          </div>
        </div>
        <div>
          <b> Radio List</b>
          <RadioList
            checked={checked[0]?.checked}
            title="Default"
            subtitle="Caption"
            onClick={(e) => setChecked({ ...e, [0]: { checked: true } })}
          />
          <SWAPSpace />
          <RadioList
            checked={checked[1]?.checked}
            title="9A"
            subtitle="執行業務所得"
            multiline
            onClick={(e) => setChecked({ ...e, [1]: { checked: true } })}
          />
          <SWAPSpace />
          <RadioList
            line
            checked={checked[2]?.checked}
            title="程式設計師"
            subtitle="提供程式撰寫相供程式撰寫相關服務提供程式撰寫相關服務"
            onClick={(e) => setChecked({ ...e, [2]: { checked: true } })}
          />
          <SWAPSpace />
          <CheckBoxList
            line
            checked={checked[3]?.checked}
            title="成本"
            subtitle="自備工作所需器材，或自行負擔成本佔總收入20%"
            onClick={() =>
              setChecked({ ...checked, [3]: { checked: !checked[3]?.checked } })
            }
          />
        </div>
      </div>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = { label: "SWAP" };
