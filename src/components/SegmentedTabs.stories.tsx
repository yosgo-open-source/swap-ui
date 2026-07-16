import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import SegmentedTab from "./SegmentedTab";
import SegmentedTabs from "./SegmentedTabs";

const meta: Meta<typeof SegmentedTabs> = {
  title: "Navigation/SegmentedTabs",
  component: SegmentedTabs,
};
export default meta;
type Story = StoryObj<typeof SegmentedTabs>;

const Demo: React.FC<{ slide?: boolean; width?: number | string }> = (p) => {
  const [value, setValue] = React.useState(0);
  return (
    <SegmentedTabs value={value} onChange={(_, v) => setValue(v)} {...p}>
      <SegmentedTab label="我的請款單" />
      <SegmentedTab label="SWAP Point 明細" />
      <SegmentedTab label="設定" />
    </SegmentedTabs>
  );
};

export const Basic: Story = { render: () => <Demo /> };

export const Slide: Story = { render: () => <Demo slide /> };

export const Playground: Story = {
  parameters: { controls: { include: ["slide", "width"] } },
  args: { slide: true, width: "fit-content" },
  argTypes: {
    width: { control: "text", description: "數字（px）或 CSS 寬度字串；fit-content 貼合內容" },
  },
  render: (args) => <Demo {...args} />,
};

export const FitContent: Story = {
  render: () => (
    <Stack spacing={2}>
      <Demo />
      <Demo width="fit-content" />
    </Stack>
  ),
};

export const Compare: Story = {
  render: () => (
    <Stack spacing={2}>
      <Demo />
      <Demo slide />
    </Stack>
  ),
};
