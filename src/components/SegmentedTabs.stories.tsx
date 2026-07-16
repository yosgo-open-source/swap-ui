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
  args: { slide: true, width: 420 },
  argTypes: { width: { control: "number" } },
  render: (args) => <Demo {...args} />,
};

export const Compare: Story = {
  render: () => (
    <Stack spacing={2}>
      <Demo />
      <Demo slide />
    </Stack>
  ),
};
