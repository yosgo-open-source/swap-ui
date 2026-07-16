import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import CircularProgress from "./CircularProgress";

const meta: Meta<typeof CircularProgress> = {
  title: "Feedback/CircularProgress",
  component: CircularProgress,
};
export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
      <CircularProgress size={20} />
      <CircularProgress size={32} />
      <CircularProgress size={48} thickness={4} />
    </Stack>
  ),
};

export const Dark: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ p: 2, backgroundColor: "#2D2D2D" }}>
      <CircularProgress dark size={32} />
    </Stack>
  ),
};

export const Playground: Story = {
  parameters: { controls: { include: ["dark", "size", "thickness"] } },
  args: { dark: false, size: 32, thickness: 5 },
  argTypes: { size: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } } },
};
