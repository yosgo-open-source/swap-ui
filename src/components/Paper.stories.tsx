import type { Meta, StoryObj } from "@storybook/react-vite";
import Paper from "./Paper";
import Typography from "./Typography";

const meta: Meta<typeof Paper> = { title: "Display/Paper", component: Paper };
export default meta;
type Story = StoryObj<typeof Paper>;

export const Basic: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Paper>
        <Typography variant="title">卡片標題</Typography>
        <Typography variant="body2" color="tertiary">
          Paper 是帶外框與陰影的內容容器，內距會依裝置自動調整。
        </Typography>
      </Paper>
    </div>
  ),
};

export const Playground: Story = {
  args: { width: 360, height: "auto" },
  argTypes: { width: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } }, height: { control: "text", description: "數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）", table: { type: { summary: "number | string" } } } },
  render: (args) => (
    <Paper {...args}>
      <Typography variant="title">卡片標題</Typography>
      <Typography variant="body2" color="tertiary">
        調整右側 controls 看效果。
      </Typography>
    </Paper>
  ),
};
