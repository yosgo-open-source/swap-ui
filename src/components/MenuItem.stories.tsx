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
  parameters: { controls: { include: ["children", "hoverBackgroundColor", "hoverFontColor", "hoverIconColor", "width", "height"] } },
  args: {
    children: "選單項目",
    hoverBackgroundColor: "",
    hoverFontColor: "",
    hoverIconColor: "",
  },
  argTypes: {
    children: { control: "text" },
    hoverBackgroundColor: { control: "text", description: "hover 底色（CSS 色，如 #FFEBED；留空用品牌預設）" },
    hoverFontColor: { control: "text", description: "hover 文字色（CSS 色；留空用品牌預設）" },
    hoverIconColor: { control: "text", description: "hover 圖示色（CSS 色；留空用品牌預設）" },
    width: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } },
    height: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } },
    iconChildren: { control: false },
  },
  render: (args) => (
    <MenuList sx={{ width: 200, border: "1px solid #ECECEC", borderRadius: "8px" }}>
      <MenuItem {...args} />
    </MenuList>
  ),
};
