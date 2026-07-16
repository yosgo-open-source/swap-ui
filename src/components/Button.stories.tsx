import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const VARIANTS = ["primary", "secondary", "tertiary", "text", "black", "danger"] as const;
const SIZES = ["small", "medium", "large"] as const;

const meta: Meta<typeof Button> = {
  title: "Components/Button",
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
  },
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    size: { control: "select", options: SIZES },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
