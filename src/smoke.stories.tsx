import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "@mui/material/Button";

const meta: Meta<typeof Button> = {
  title: "Smoke/MUI Button",
  component: Button,
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  args: { children: "swap-ui v2 toolchain OK", variant: "contained" },
};
