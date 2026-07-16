import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import Typography from "./Typography";
import { SWAP_TYPOGRAPHY_VARIANTS } from "../theme/typography.styles";

const meta: Meta<typeof Typography> = {
  title: "Display/Typography",
  component: Typography,
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const Scale: Story = {
  render: () => (
    <Stack spacing={1}>
      {SWAP_TYPOGRAPHY_VARIANTS.map((v) => (
        <Typography key={v} variant={v as never}>
          {v} — SWAP 排版 The quick brown fox
        </Typography>
      ))}
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={1}>
      <Typography variant="h4" color="primary">
        primary（黑）
      </Typography>
      <Typography variant="h4" color="secondary">
        secondary（深灰）
      </Typography>
      <Typography variant="h4" color="tertiary">
        tertiary（灰）
      </Typography>
      <Typography variant="h4" color="primary400">
        primary400（品牌藍）
      </Typography>
      <Typography variant="h4" color="danger800">
        danger800（紅）
      </Typography>
    </Stack>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Stack spacing={1} sx={{ p: 2, backgroundColor: "#2D2D2D" }}>
      <Typography variant="h4" color="primary" mode="dark">
        primary（白）
      </Typography>
      <Typography variant="h4" color="secondary" mode="dark">
        secondary（淺灰）
      </Typography>
    </Stack>
  ),
};

export const Playground: Story = {
  args: {
    variant: "subtitle",
    color: "tertiary",
    children: "SWAP Typography",
    mode: "",
    style: {}
  },
  argTypes: {
    variant: { control: "select", options: SWAP_TYPOGRAPHY_VARIANTS },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "primary400", "danger800", "success500"],
    },
    mode: { control: "inline-radio", options: ["", "dark"] },
  },
};
