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
