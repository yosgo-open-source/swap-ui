import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import { MenuProps } from "./Menu.types";
import Select from "./Select";
import MenuItem from "./MenuItem";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import SWAPSpace from "../SWAPSpace/SWAPSpace";
import { useTheme } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

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
  { value: -1, label: "全部紀錄" },
  { value: 1, label: "未付款" },
  { value: 2, label: "已付款" },
  { value: 3, label: "已封存" },
];
const Demo: Story<MenuProps> = (args) => {
  const [value, setValue] = useState(-1);
  const [open, setOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as any);
  };
  const theme = useTheme();

  return (
    <SWAPTheme>
      調整看看！
      <br />
      <br />
      <Select
        {...args}
        dropdown
        width="100%"
        height={40}
        value={value}
        open={open}
        // open
        onChange={handleChange}
        vertical="bottom"
        horizontal="left"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {options.map((option: any, i: number) => (
          <MenuItem
            key={i}
            height={36}
            value={option.value}
            style={{
              backgroundColor: value === option.value ? "white" : null,
              opacity: value === option.value ? 1 : null,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "nowrap",
              color: value === option.value ? "blue" : null,
            }}
            disabled={value === option.value}
            iconChildren={
              value === option.value && open ? (
                <CheckIcon style={{ height: 20, color: "blue" }} />
              ) : null
            }
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <SWAPSpace size="m" />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
