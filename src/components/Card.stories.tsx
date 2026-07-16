import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import Card from "./Card";
import Typography from "./Typography";

const meta: Meta<typeof Card> = { title: "Display/Card", component: Card };
export default meta;
type Story = StoryObj<typeof Card>;

const Body = () => (
  <>
    <Typography variant="title">七月請款單</Typography>
    <Typography variant="body2" color="secondary">
      共 3 筆，合計 NT$ 42,000。最後更新 07/16。
    </Typography>
  </>
);

export const WithButtons: Story = {
  render: () => (
    <Card
      buttons={[
        { title: "查看明細" },
        { title: "刪除", variant: "danger" },
      ]}
    >
      <Body />
    </Card>
  ),
};

export const Loading: Story = {
  render: () => (
    <Stack sx={{ height: 200 }}>
      <Card loading height={200} buttons={[{ title: "查看明細" }]}>
        <Body />
      </Card>
    </Stack>
  ),
};

export const Playground: Story = {
  args: { loading: false, width: 350 },
  argTypes: {
    width: { control: "text", description: "數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）", table: { type: { summary: "number | string" } } },
    buttons: { control: false },
  },
  render: (args) => (
    <Card {...args} buttons={[{ title: "查看明細" }]}>
      <Body />
    </Card>
  ),
};
