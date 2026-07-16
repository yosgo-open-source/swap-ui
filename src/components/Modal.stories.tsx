import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "@mui/material/Button";
import Modal from "./Modal";
import Typography from "./Typography";
import type { ModalProps } from "./Modal.types";

const meta: Meta<typeof Modal> = { title: "Feedback/Modal", component: Modal };
export default meta;
type Story = StoryObj<typeof Modal>;

const Demo: React.FC<Partial<ModalProps> & { buttonText?: string }> = ({ buttonText, ...p }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        {buttonText ?? "開啟 Modal"}
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="確認送出請款單？"
        size="small"
        secondaryButton={{ title: "取消", onClick: () => setOpen(false) }}
        primaryButton={{ title: "送出", onClick: () => setOpen(false) }}
        {...p}
      >
        <Typography variant="body2_loose" color="black800">
          送出後將通知業主付款，內容如需修改請先取消送出。
        </Typography>
      </Modal>
    </>
  );
};

export const Basic: Story = { render: () => <Demo /> };

export const WithHelpText: Story = {
  render: () => <Demo helpText="送出前請再次確認金額與項目。" />,
};

export const Checked: Story = {
  render: () => (
    <Demo buttonText="成功狀態" checked checkIconColor="success500" title="請款單已送出" />
  ),
};

export const Failed: Story = {
  render: () => <Demo buttonText="失敗狀態" failed iconColor="danger700" title="送出失敗" />,
};

export const FullWidthMobile: Story = {
  render: () => <Demo buttonText="行動版底部彈出" fullWidth mobile />,
};

export const Playground: Story = {
  args: {
    title: "確認送出請款單？",
    helpText: "",
    size: "small",
    disCloseIcon: false,
    fullWidth: false,
    fullScreen: false,
    mobile: false,
    onExit: false,
  },
  argTypes: {
    title: { control: "text" },
    helpText: { control: "text" },
    size: { control: "select", options: ["extraSmall", "small", "medium", "large"] },
    width: { control: "text", description: "數字＝px；字串可用任意 CSS 長度；不給則依 size", table: { type: { summary: "number | string" } } },
    secondaryButton: { control: false },
    primaryButton: { control: false },
    icon: { control: false },
    headChildren: { control: false },
    footer: { control: false },
  },
  render: (args) => <Demo {...args} />,
};
