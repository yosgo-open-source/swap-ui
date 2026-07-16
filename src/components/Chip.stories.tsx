import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import Chip from "./Chip";

const meta: Meta<typeof Chip> = { title: "Display/Chip", component: Chip };
export default meta;
type Story = StoryObj<typeof Chip>;

const VARIANTS = ["neutral", "primary", "success", "danger"] as const;

export const Outlined: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      {VARIANTS.map((v) => (
        <Chip key={v} variant={v} label={v} />
      ))}
    </Stack>
  ),
};

export const Contained: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      {VARIANTS.map((v) => (
        <Chip key={v} variant={v} contained label={v} />
      ))}
    </Stack>
  ),
};

export const Playground: Story = {
  args: { variant: "primary", label: "標籤", contained: false },
  argTypes: { variant: { control: "select", options: VARIANTS } },
};
