import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Dropdown from "./Dropdown";
import type { DropdownProps } from "./Dropdown.types";

const meta: Meta<typeof Dropdown> = { title: "Inputs/Dropdown", component: Dropdown };
export default meta;
type Story = StoryObj<typeof Dropdown>;

const Demo: React.FC<Partial<DropdownProps>> = (p) => {
  const [v, setV] = React.useState("30d");
  return (
    <Dropdown value={v} onChange={(e) => setV(e.target.value as string)} {...p}>
      <MenuItem value="7d">近 7 天</MenuItem>
      <MenuItem value="30d">近 30 天</MenuItem>
      <MenuItem value="90d">近 90 天</MenuItem>
    </Dropdown>
  );
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 240 }}>
      <Demo height={40} />
      <Demo height={56} />
    </Stack>
  ),
};

export const Playground: Story = {
  args: { width: 240, height: 40, helperText: "" },
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    helperText: { control: "text" },
  },
  render: (args) => <Demo {...args} />,
};
