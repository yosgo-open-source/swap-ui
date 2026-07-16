import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "./IconButton";

const meta: Meta<typeof IconButton> = { title: "Inputs/IconButton", component: IconButton };
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Hover: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <IconButton hoverColor="primary50" hoverIconColor="primary400">
        <CloseIcon />
      </IconButton>
      <IconButton hoverColor="danger50" hoverIconColor="danger800">
        <CloseIcon />
      </IconButton>
    </Stack>
  ),
};

export const Playground: Story = {
  parameters: { controls: { include: ["hoverColor", "hoverIconColor", "width", "height", "disabled"] } },
  args: { hoverColor: "primary50", hoverIconColor: "primary400", width: 32, height: 32, disabled: false },
  argTypes: {
    hoverColor: { control: "text", description: "SWAP token 名（如 primary50）或任意 CSS 色" },
    hoverIconColor: { control: "text", description: "SWAP token 名或任意 CSS 色" },
    width: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } },
    height: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } },
  },
  render: (args) => (
    <IconButton {...args}>
      <CloseIcon />
    </IconButton>
  ),
};
