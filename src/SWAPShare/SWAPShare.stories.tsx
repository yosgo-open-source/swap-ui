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
        component: "用戶透過社群媒體、Email 來分享某個網址",
      },
    },
  },
};

const Demo: Story<SWAPShareProps> = (args) => <SWAPShare {...args} />;
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
        <Typography variant="subtitle1">自動讀取元件目前的網址</Typography>
        <Typography variant="body2" color="textSecondary">
          整個元件可以不需要傳入任何 props
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

export const 網址框 = () => {
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">自定義輸入框</Typography>
        <Typography variant="body2" color="textSecondary">
          可自訂網址輸入框的標籤、欄位提示以及複製按鈕名稱
        </Typography>
        <SWAPSpace />
        <SWAPShare
          copyButtonText="拷貝"
          copyInputLabel="拷貝請款單網址"
          copySuccessMessage="拷貝完成，可以開始討錢拉！"
        />
      </div>
    </SWAPTheme>
  );
};
