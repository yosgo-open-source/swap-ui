import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Select from "./Select";

const meta: Meta<typeof Select> = { title: "Inputs/Select", component: Select };
export default meta;
type Story = StoryObj<typeof Select>;

import type { SelectProps } from "./Select.types";

const Demo: React.FC<Partial<SelectProps>> = (p) => {
  const [v, setV] = React.useState("");
  return (
    <Select placeholder="請款類別" value={v} onChange={(e) => setV(e.target.value as string)} {...p}>
      <MenuItem value="design">設計費</MenuItem>
      <MenuItem value="dev">開發費</MenuItem>
      <MenuItem value="consult">顧問費</MenuItem>
    </Select>
  );
};

export const Basic: Story = { render: () => <Demo /> };

export const WithHelper: Story = {
  render: () => (
    <Stack spacing={3}>
      <Demo helperText="選擇這筆請款的類別" />
      <Demo error helperText="必填欄位" />
    </Stack>
  ),
};

export const Playground: Story = {
  parameters: { controls: { include: ["placeholder", "helperText", "error", "disabled", "dropdown", "width", "height", "vertical", "horizontal"] } },
  args: { placeholder: "請款類別", helperText: "", error: false, disabled: false, dropdown: false },
  argTypes: {
    vertical: { control: "select", options: ["top", "center", "bottom"], description: "選單垂直錨點" },
    horizontal: { control: "select", options: ["left", "center", "right"], description: "選單水平錨點" },
    helperText: { control: "text" }, width: { control: "text", description: "數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）", table: { type: { summary: "number | string" } } }, height: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } } },
  render: (args) => <Demo {...args} />,
};
