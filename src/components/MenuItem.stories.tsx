import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import MenuItem from "./MenuItem";

const meta: Meta<typeof MenuItem> = { title: "Inputs/MenuItem", component: MenuItem };
export default meta;
type Story = StoryObj<typeof MenuItem>;

const Demo: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
    <>
      <Button variant="secondary" onClick={(e) => setAnchorEl(e.currentTarget)}>
        開啟選單
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)}>檢視</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)} iconChildren={<EditIcon fontSize="small" />}>
          編輯
        </MenuItem>
        <MenuItem
          onClick={() => setAnchorEl(null)}
          hoverBackgroundColor="#FFEBED"
          hoverFontColor="#D40F14"
          hoverIconColor="#D40F14"
        >
          刪除
        </MenuItem>
      </Menu>
    </>
  );
};

export const WithMenu: Story = { render: () => <Demo /> };

export const Playground: Story = {
  args: {
    children: "選單項目",
    hoverBackgroundColor: "",
    hoverFontColor: "",
    hoverIconColor: "",
  },
  argTypes: {
    children: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
    iconChildren: { control: false },
  },
  render: (args) => (
    <MenuList sx={{ width: 200, border: "1px solid #ECECEC", borderRadius: "8px" }}>
      <MenuItem {...args} />
    </MenuList>
  ),
};
