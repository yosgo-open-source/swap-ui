import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import Link from "./Link";

const meta: Meta<typeof Link> = { title: "Navigation/Link", component: Link };
export default meta;
type Story = StoryObj<typeof Link>;

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Link href="#">預設（黑）</Link>
      <Link href="#" color="primary400">
        primary400
      </Link>
      <Link href="#" color="danger800">
        danger800
      </Link>
    </Stack>
  ),
};
