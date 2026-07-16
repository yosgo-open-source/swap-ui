import type { Meta, StoryObj } from "@storybook/react-vite";
import Progress from "./Progress";

const meta: Meta<typeof Progress> = { title: "Feedback/Progress", component: Progress };
export default meta;
type Story = StoryObj<typeof Progress>;

export const Basic: Story = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <Progress step={2} count={4} label={["填寫資料", "確認內容", "送出", "完成"]} />
    </div>
  ),
};

export const Playground: Story = {
  args: { step: 2, count: 4, label: ["填寫資料", "確認內容", "送出", "完成"] },
  argTypes: {
    step: { control: "number" },
    count: { control: "number" },
    size: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } },
  },
  render: (args) => (
    <div style={{ maxWidth: 480 }}>
      <Progress {...args} />
    </div>
  ),
};
