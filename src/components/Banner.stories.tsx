import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import Banner from "./Banner";

const meta: Meta<typeof Banner> = { title: "Feedback/Banner", component: Banner };
export default meta;
type Story = StoryObj<typeof Banner>;

const VARIANTS = ["normal", "info", "success", "warning", "error"] as const;

export const Variants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 480 }}>
      {VARIANTS.map((v) => (
        <Banner key={v} variant={v}>
          這是 {v} 提示訊息，用來告知使用者目前的狀態或需要注意的事項。
        </Banner>
      ))}
    </Stack>
  ),
};

export const Playground: Story = {
  parameters: { controls: { include: ["variant", "children", "mobile", "width"] } },
  args: { variant: "info", children: "提示訊息內容", mobile: false },
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    children: { control: "text" },
    icon: { control: false },
    width: { control: "text", description: "數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）", table: { type: { summary: "number | string" } } },
  },
};
