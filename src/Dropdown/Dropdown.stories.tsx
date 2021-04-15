import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import { DropdownProps } from "./Dropdown.types";
import Dropdown from "./Dropdown";
import MenuItem from "../Menu/MenuItem";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import CheckIcon from "@material-ui/icons/Check";

export default {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};
const options = [
  { value: -1, label: "預設選項" },
  { value: 1, label: "選項一" },
  { value: 2, label: "選項二" },
  { value: 3, label: "選項三" },
];
const Demo: Story<DropdownProps> = (args) => {
  const [value, setValue] = useState(-1);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as any);
  };

  return (
    <SWAPTheme>
      <Dropdown
        {...args}
        width={108}
        height={40}
        value={value}
        onChange={handleChange}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        }}
      >
        {options.map((option: any, i: number) => (
          <MenuItem
            key={i}
            height={36}
            width={200}
            value={option.value}
            style={{
              backgroundColor: value === option.value ? "white" : undefined,
              opacity: value === option.value ? 1 : undefined,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "nowrap",
              color: value === option.value ? "#4862CC" : undefined,
            }}
            disabled={value === option.value}
            iconChildren={
              value === option.value ? (
                <CheckIcon style={{ height: 20, color: "#4862CC" }} />
              ) : null
            }
          >
            {option.label}
          </MenuItem>
        ))}
      </Dropdown>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
