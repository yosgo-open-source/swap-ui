import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Tab from "./Tab";
import Tabs from "./Tabs";
import TabPanel from "./TabPanel";
import Typography from "./Typography";

const meta: Meta<typeof Tab> = { title: "Navigation/Tab", component: Tab };
export default meta;
type Story = StoryObj<typeof Tab>;

const Demo: React.FC<{ animation?: boolean; noIndicator?: boolean }> = (p) => {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Tabs value={value} onChange={(_, v) => setValue(v)}>
        <Tab label="帳戶總覽" selected={value === 0} {...p} />
        <Tab label="請款單" selected={value === 1} {...p} />
        <Tab label="設定" selected={value === 2} {...p} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="body2">帳戶總覽內容</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="body2">請款單內容</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="body2">設定內容</Typography>
      </TabPanel>
    </>
  );
};

export const Basic: Story = { render: () => <Demo /> };
export const WithAnimation: Story = { render: () => <Demo animation /> };

export const Playground: Story = {
  args: { label: "分頁", selected: true, noIndicator: false, animation: true },
  argTypes: {
    label: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
    fontSize: { control: "number" },
    margin: { control: "text" },
  },
  // Tab 需在 Tabs 容器內渲染（MUI 9 context 約束）
  render: (args) => (
    <Tabs value={0}>
      <Tab {...args} />
    </Tabs>
  ),
};
