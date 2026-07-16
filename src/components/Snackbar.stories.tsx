import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "@mui/material/Button";
import Snackbar from "./Snackbar";

const meta: Meta<typeof Snackbar> = { title: "Feedback/Snackbar", component: Snackbar };
export default meta;
type Story = StoryObj<typeof Snackbar>;

const Demo: React.FC<Partial<React.ComponentProps<typeof Snackbar>>> = (p) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        觸發 Snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        message="已刪除 1 筆資料"
        revertButton={{ onClick: () => setOpen(false) }}
        closeIcon={{ onClick: () => setOpen(false) }}
        {...p}
      />
    </>
  );
};

export const Default: Story = { render: () => <Demo /> };
export const Success: Story = {
  render: () => <Demo variant="success" checkIcon message="儲存成功" />,
};
export const Error: Story = {
  render: () => <Demo variant="error" errorIcon message="儲存失敗，請稍後再試" />,
};
export const SlideUp: Story = { render: () => <Demo transitionDirection="up" /> };

export const Playground: Story = {
  parameters: { controls: { include: ["message", "variant", "checkIcon", "errorIcon", "transitionDirection"] } },
  args: {
    message: "已刪除 1 筆資料",
    variant: undefined,
    checkIcon: false,
    errorIcon: false,
    transitionDirection: undefined,
  },
  argTypes: {
    message: { control: "text" },
    variant: { control: "select", options: [undefined, "success", "error"] },
    transitionDirection: {
      control: "select",
      options: [undefined, "left", "right", "up", "down"],
      description: "進場方向；不指定為淡入",
    },
    revertButton: { control: false },
    closeIcon: { control: false },
    icon: { control: false },
  },
  render: (args) => <Demo {...args} />,
};
