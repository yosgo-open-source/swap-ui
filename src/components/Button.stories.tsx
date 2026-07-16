import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const VARIANTS = ["primary", "secondary", "tertiary", "text", "black", "danger"] as const;
const SIZES = ["small", "medium", "large"] as const;

const meta: Meta<typeof Button> = {
  title: "Inputs/Button",
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      {VARIANTS.map((v) => (
        <Button key={v} variant={v}>
          {v}
        </Button>
      ))}
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>

      {SIZES.map((s) => (
        <Button key={s} variant="primary" size={s}>
          {s}
        </Button>
      ))}
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="primary">normal</Button>
      <Button variant="primary" disabled>
        disabled
      </Button>
      <Button variant="primary" loading>
        loading
      </Button>
    </Stack>
  ),
};

export const Playground: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
    loading: false,
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    children: { control: "text" },
    variant: { control: "select", options: VARIANTS },
    size: { control: "select", options: SIZES },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
