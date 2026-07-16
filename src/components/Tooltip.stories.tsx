import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = { title: "Components/Tooltip", component: Tooltip };
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={4} sx={{ p: 6 }}>
      <Tooltip title="深色（預設）" open>
        <Button variant="secondary">dark</Button>
      </Tooltip>
      <Tooltip title="淺色" light open>
        <Button variant="secondary">light</Button>
      </Tooltip>
      <Tooltip title="帶箭頭" arrow open>
        <Button variant="secondary">arrow</Button>
      </Tooltip>
    </Stack>
  ),
};
