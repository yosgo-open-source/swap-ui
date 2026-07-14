import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { MyTabsProps } from "./Tabs.types";
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

const Demo: Story<MyTabsProps> = (args) => {
  const defaultValue = 0;
  const [value, setValue] = React.useState(defaultValue);
  const [a, setA] = React.useState(false);
  React.useEffect(() => {
    if (!a) {
      if (value !== defaultValue) {
        setA(true);
      }
    }
  }, [value]);
  return (
    <SWAPTheme>
      <Tabs {...args} value={value}>
        <Tab label="帳戶總覽" value={0} animation onClick={() => setValue(0)} />
        <Tab label="帳戶總覽" value={1} animation onClick={() => setValue(1)} />
        <Tab value={2} label="帳戶總覽" animation onClick={() => setValue(2)} />
      </Tabs>
      <SWAPSpace size="l" />
      <Tabs {...args} value={value > 1 ? 1 : value}>
        <Tab
          label="登入帳號"
          animation
          onClick={() => setValue(0)}
          width={72}
          height={64}
          margin="0px 12px 0px 0px"
          fontSize={18}
        />
        <Tab
          label="登入帳號"
          animation
          onClick={() => setValue(1)}
          width={72}
          height={64}
          margin="0px"
          fontSize={18}
        />
      </Tabs>
      <SWAPSpace size="l" />
      <SegmentedTabs value={value > 1 ? 1 : value} width={264}>
        <SegmentedTab label="我的請款單" onClick={() => setValue(0)} />
        <SegmentedTab label="SWAP Point 明細" onClick={() => setValue(1)} />
      </SegmentedTabs>
      <SWAPSpace size="l" />
      <SegmentedTabs value={value > 1 ? 1 : value} width={500}>
        <SegmentedTab label="我的請款單" onClick={() => setValue(0)} flex={1} />
        <SegmentedTab
          label="SWAP Point 明細"
          onClick={() => setValue(1)}
          flex={3}
        />
      </SegmentedTabs>
      <SWAPSpace size="l" />
      <SegmentedTabs slide value={value} width={800}>
        <SegmentedTab label="我的請款單" onClick={() => setValue(0)} flex={1} />
        <SegmentedTab
          label="SWAP Point 明細"
          onClick={() => setValue(1)}
          flex={3}
        />
        <SegmentedTab label="我的請款單" onClick={() => setValue(2)} flex={1} />
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
      <SWAPSpace size="l" />
      <SegmentedTabs
        value={3}
        width={300}
        scrollButtons="on"
        variant="scrollable"
      >
        <SegmentedTab label="我的帳戶" onClick={() => {}} />
        <SegmentedTab label="我的優惠券" onClick={() => {}} />
        <SegmentedTab label="請款手續費紀錄" onClick={() => {}} />
        <SegmentedTab label="我的方案" onClick={() => {}} />
        <SegmentedTab label="財力證明" onClick={() => {}} />
      </SegmentedTabs>
      <SWAPSpace size="l" />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
