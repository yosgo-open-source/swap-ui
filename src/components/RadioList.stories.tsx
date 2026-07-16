import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import RadioList from "./RadioList";
import CheckBoxList from "./CheckBoxList";

const meta: Meta<typeof RadioList> = { title: "Inputs/RadioList", component: RadioList };
export default meta;
type Story = StoryObj<typeof RadioList>;

const RadioDemo: React.FC = () => {
  const [v, setV] = React.useState("monthly");
  return (
    <Stack spacing={2}>
      <RadioList checked={v === "monthly"} onClick={() => setV("monthly")} title="月繳" subtitle="NT$ 300 / 月" />
      <RadioList checked={v === "yearly"} onClick={() => setV("yearly")} title="年繳" subtitle="NT$ 3,000 / 年" />
    </Stack>
  );
};

export const Basic: Story = { render: () => <RadioDemo /> };

export const Modes: Story = {
  render: () => (
    <Stack spacing={2}>
      <RadioList checked title="預設" subtitle="右側說明" />
      <RadioList checked multiline title="multiline" subtitle="說明在標題下方" />
      <RadioList checked line title="line" subtitle="標題與說明之間以直線分隔，適合較長的說明文字內容。" />
    </Stack>
  ),
};

const CheckDemo: React.FC = () => {
  const [a, setA] = React.useState(true);
  const [b, setB] = React.useState(false);
  return (
    <Stack spacing={2}>
      <CheckBoxList checked={a} onClick={() => setA(!a)} title="Email 通知" subtitle="每日摘要" />
      <CheckBoxList checked={b} onClick={() => setB(!b)} title="簡訊通知" subtitle="重要事件" />
    </Stack>
  );
};

export const CheckBoxes: Story = { render: () => <CheckDemo /> };

export const Playground: Story = {
  args: { checked: true, title: "月繳", subtitle: "NT$ 300 / 月", multiline: false, line: false },
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    width: { control: "text", description: "數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）", table: { type: { summary: "number | string" } } },
  },
};
