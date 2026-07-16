import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import TextField from "./TextField";

const meta: Meta<typeof TextField> = { title: "Inputs/TextField", component: TextField };
export default meta;
type Story = StoryObj<typeof TextField>;

export const States: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 320, pt: 1 }}>
      <TextField label="姓名" placeholder="請輸入姓名" />
      <TextField label="信箱" error helperText="格式不正確" defaultValue="not-an-email" />
      <TextField label="唯讀" disabled defaultValue="不可編輯" />
      <TextField label="含說明" helperText="這是輔助說明文字" />
    </Stack>
  ),
};

export const Playground: Story = {
  args: {
    label: "標籤",
    placeholder: "請輸入",
    error: false,
    disabled: false,
    helperText: "",
    height: 80,
  },
  argTypes: {
    height: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } },
    width: { control: "text", description: "數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）", table: { type: { summary: "number | string" } } },
  },
};
