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
      <SWAPSpace size="l" />{" "}
      <Tabs {...args} value={value}>
        <Tab
          label="登入帳號"
          onClick={() => setValue(0)}
          width={72}
          height={64}
          margin="0px 12px 0px 0px"
          fontSize={18}
        />
        <Tab
          label="登入帳號"
          onClick={() => setValue(1)}
          width={72}
          height={64}
          margin="0px"
          fontSize={18}
        />
      </Tabs>
      <SWAPSpace size="l" />
      <SegmentedTabs value={value} width={256}>
        <SegmentedTab label="我的請款單" onClick={() => setValue(0)} />
        <SegmentedTab label="Swap Point 明細" onClick={() => setValue(1)} />
      </SegmentedTabs>
      <SWAPSpace size="l" />
      <SegmentedTabs value={value} width={500}>
        <SegmentedTab label="我的請款單" onClick={() => setValue(0)} flex={1} />
        <SegmentedTab
          label="Swap Point 明細"
          onClick={() => setValue(1)}
          flex={3}
        />
      </SegmentedTabs>
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
