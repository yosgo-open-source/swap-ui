import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import { MenuProps } from "./Menu.types";
import Select from "./Select";
import MenuItem from "./MenuItem";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

export default {
  title: "Menu",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};
const options = [
  { value: "option1" },
  { value: "option2" },
  { value: "option3" },
];
const Demo: Story<MenuProps> = (args) => {
  const [value, setValue] = useState("");
  return (
    <SWAPTheme>
      調整看看！
      <Select
        {...args}
        width={112}
        height={40}
        value={value}
        onChange={(e: any) => {
          setValue(e.target.value);
        }}
        vertical="bottom"
        horizontal="left"
        placeholder="全部紀錄"
      >
        {options.map((option: any) => (
          <MenuItem width={200} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </Select>
      <SWAPSpace size="m" />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
