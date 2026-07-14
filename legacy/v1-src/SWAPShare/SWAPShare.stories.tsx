import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPShare from "./SWAPShare";
import { SWAPShareProps } from "../SWAPShare/SWAPShare.types";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { Typography } from "@material-ui/core";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

export default {
  title: "SWAPShare",
  component: SWAPShare,
  parameters: {
    docs: {
      description: {
        component:
          "用戶透過社群媒體、Email 來分享某個網址。若在 iframe 內使用可能會有分享頁面打不開的問題",
      },
    },
  },
};

const Demo: Story<SWAPShareProps> = (args) => (
  <SWAPTheme>
    <SWAPShare {...args} />
  </SWAPTheme>
);
export const 認識 = Demo.bind({});
認識.args = {
  url: "https://swap.work",
  sharedContent: "『預設的分享文字』",
  emailSubject: "『預設的信件標題』",
};

export const 網址 = () => {
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">讀取目前的網址</Typography>
        <Typography variant="body2" color="textSecondary">
          SWAPShare 可以不需要傳入任何 props
        </Typography>
        <SWAPSpace />
        <SWAPShare />
      </div>
    </SWAPTheme>
  );
};

export const 分享訊息 = () => {
  const example = "SWAP No.1 自由接案者的虛擬公司";
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">預設訊息</Typography>
        <Typography variant="body2" color="textSecondary">
          使用 Messenger 分享無法預設分享訊息，只能攜帶分享網址。
        </Typography>
        <SWAPSpace />
        <SWAPShare sharedContent={example} url="https://swap.work" />
      </div>
    </SWAPTheme>
  );
};
