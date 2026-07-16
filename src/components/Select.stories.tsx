import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Select from "./Select";

const meta: Meta<typeof Select> = { title: "Inputs/Select", component: Select };
export default meta;
type Story = StoryObj<typeof Select>;

const Demo: React.FC<{ error?: boolean; helperText?: React.ReactNode }> = (p) => {
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
