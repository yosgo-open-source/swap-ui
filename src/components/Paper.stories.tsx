import type { Meta, StoryObj } from "@storybook/react-vite";
import Paper from "./Paper";
import Typography from "./Typography";

const meta: Meta<typeof Paper> = { title: "Components/Paper", component: Paper };
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
