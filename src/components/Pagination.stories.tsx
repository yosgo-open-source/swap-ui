import type { Meta, StoryObj } from "@storybook/react-vite";
import Pagination from "@mui/material/Pagination";

const meta: Meta<typeof Pagination> = { title: "Navigation/Pagination", component: Pagination };
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Basic: Story = { args: { count: 10, defaultPage: 3 } };
export const Many: Story = { args: { count: 30, defaultPage: 15, siblingCount: 1 } };

export const Playground: Story = {
  args: { count: 10, defaultPage: 1, siblingCount: 1, disabled: false },
};
