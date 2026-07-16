import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = { title: "Inputs/Switch", component: Switch };
export default meta;
type Story = StoryObj<typeof Switch>;

export const States: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
      <Switch disabled defaultChecked />
    </Stack>
  ),
};

export const Playground: Story = {
  parameters: { controls: { include: ["disabled", "defaultChecked"] } },
  args: { disabled: false, defaultChecked: true },
};
