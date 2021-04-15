import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import { MyMenuProps } from "./Menu.types";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Button from "../Button/Button";
import SWAPTheme from "../SWAPTheme/SWAPTheme";

export default {
  title: "Menu",
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const Demo: Story<MyMenuProps> = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <SWAPTheme>
      <Button width={110} size="small" variant="text" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        {...args}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        getContentAnchorEl={null}
      >
        <MenuItem width={110}>Menu One</MenuItem>
        <MenuItem width={110}>Menu Two</MenuItem>
        <MenuItem width={110}>Menu Three</MenuItem>
      </Menu>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
