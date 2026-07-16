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
  parameters: { controls: { include: ["variant", "label", "contained", "outlined", "width", "height"] } },
  args: { variant: "primary", label: "標籤", contained: false },
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    label: { control: "text" },
    width: { control: "text", description: "數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）", table: { type: { summary: "number | string" } } },
    height: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } },
    icon: { control: false },
  },
};
