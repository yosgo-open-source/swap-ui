import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import CheckBox from "./CheckBox";

const meta: Meta<typeof CheckBox> = { title: "Inputs/CheckBox", component: CheckBox };
export default meta;
type Story = StoryObj<typeof CheckBox>;

export const States: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <CheckBox label="未勾選" />
      <CheckBox label="已勾選" defaultChecked />
      <CheckBox label="停用" disabled />
      <CheckBox label="停用已勾" disabled defaultChecked />
    </Stack>
  ),
};

export const Playground: Story = {
  args: { label: "同意服務條款", disabled: false, disableHover: false },
};
