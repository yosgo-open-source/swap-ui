import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import { TabsProps } from "./Tabs.types";
import Tabs from "./Tabs";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import SegmentedTabs from "./SegmentedTabs";
import SegmentedTab from "./SegmentedTab";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

export default {
  title: "Tab",
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const Demo: Story<TabsProps> = (args) => {
  const [value, setValue] = React.useState(0);

  return (
    <SWAPTheme>
      <Tabs {...args} value={value}>
        <Tab label="帳戶總覽" onClick={() => setValue(0)} />
        <Tab label="帳戶總覽" onClick={() => setValue(1)} />
        <Tab label="帳戶總覽" onClick={() => setValue(2)} />
      </Tabs>
      <SWAPSpace size="l" />
      <SegmentedTabs value={value}>
        <SegmentedTab label="帳戶總覽" onClick={() => setValue(0)} />
        <SegmentedTab label="帳戶總覽" onClick={() => setValue(1)} />
        <SegmentedTab label="帳戶總覽" onClick={() => setValue(2)} />
      </SegmentedTabs>
      <SWAPSpace size="l" />
      <TabPanel value={value} index={0}>
        1
      </TabPanel>
      <TabPanel value={value} index={1}>
        2
      </TabPanel>
      <TabPanel value={value} index={2}>
        3
      </TabPanel>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
