import type { Meta, StoryObj } from "@storybook/react-vite";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const meta: Meta<typeof Skeleton> = { title: "Feedback/Skeleton", component: Skeleton };
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Shapes: Story = {
  render: () => (
    <Stack spacing={1} sx={{ width: 240 }}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" height={80} />
      <Skeleton variant="circular" width={40} height={40} />
    </Stack>
  ),
};

export const Playground: Story = {
  parameters: { controls: { include: ["variant", "width", "height"] } },
  args: { variant: "rectangular", width: 240, height: 80 },
  argTypes: {
    variant: { control: "select", options: ["text", "rectangular", "circular"] },
    width: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } },
    height: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } },
  },
};
