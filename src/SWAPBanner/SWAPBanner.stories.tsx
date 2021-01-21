import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPBanner from "./SWAPBanner";
import { SWAPBannerProps } from "../SWAPBanner/SWAPBanner.types";
import { Button, Typography } from "@material-ui/core";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

export default {
  title: "SWAPBanner",
  component: SWAPBanner,
  parameters: {
    docs: {
      description: {
        component: "提示用戶目前頁面的狀態",
      },
    },
  },
};
const Demo: Story<SWAPBannerProps> = (args) => (
  <SWAPTheme>
    <SWAPBanner {...args} />
  </SWAPTheme>
);
export const 認識 = Demo.bind({});
認識.args = {
  status: "warning",
  title: "注意！您目前帳號內的燃料不足",
  content: "不需要擔心，本次行程不會受到影響，但我們建議您找機會補充燃料",
  primaryButton: {
    title: "asdlkjwioedasd我是大笨豬注意我瞭解了",
    onClick: () => {},
  },
  secondaryButton: {
    title: "如何補充燃料?",
    onClick: () => {},
  },
};

export const 狀態 = () => {
  return (
    <SWAPTheme>
      <Typography variant="subtitle1">成功狀態</Typography>
      <Typography variant="body2" color="textSecondary">
        告訴用戶事情已經完成
      </Typography>
      <SWAPSpace />
      <SWAPBanner
        title="歡迎你註冊 SWAP"
        content="您可以逛逛 SWAP 電子請款單與提領的功能，不過正式使用前請先完成 SWAP 帳戶內的實名驗證。"
        status="success"
        primaryButton={{
          title: "前往實名驗證",
          onClick: () => {},
        }}
      />
      <SWAPSpace size="l" />
      <Typography variant="subtitle1">注意狀態</Typography>
      <Typography variant="body2" color="textSecondary">
        提醒用戶要注意某一件事情
      </Typography>
      <SWAPSpace />
      <SWAPBanner
        title="您的帳戶目前正在審核中"
        content="SWAP 相關人員已正在審核您的實名資料，請耐心稍後，我們將於 1 個工作日完成"
        status="warning"
        primaryButton={{
          title: "詢問客服目前審核進度",
          onClick: () => {},
        }}
      />
      <SWAPSpace size="l" />
      <Typography variant="subtitle1">注意狀態</Typography>
      <Typography variant="body2" color="textSecondary">
        告知用戶要儘快處理，避免產生負面影響
      </Typography>
      <SWAPSpace />
      <SWAPBanner
        title="請更新您的實名資料"
        content="您的 OOOOO 欄位有誤，請依照 OOOOOO 來調整你的資料。"
        status="critical"
        primaryButton={{
          title: "前往實名驗證",
          onClick: () => {},
        }}
      />
      <SWAPSpace size="l" />
    </SWAPTheme>
  );
};

export const 禁止點擊 = () => {
  return (
    <SWAPTheme>
      <Typography variant="subtitle1">禁止點擊</Typography>
      <Typography variant="body2" color="textSecondary">
        Banner 上的按鈕可設定禁止點擊
      </Typography>
      <SWAPSpace />
      <SWAPBanner
        title="資料已儲存"
        content="您的實名驗證資料已經儲存，SWAP 人員將於 1 個工作日完成審核"
        status="success"
        primaryButton={{
          title: "返回首頁",
          onClick: () => {},
          disabled: true,
        }}
        secondaryButton={{
          title: "聯繫線上客服",
          onClick: () => {},
          disabled: false,
        }}
        focus
      />
    </SWAPTheme>
  );
};

export const 自動鎖定 = () => {
  const [show, setShow] = useState(false);
  return (
    <SWAPTheme>
      <Typography variant="subtitle1">自動鎖定</Typography>
      <Typography variant="body2" color="textSecondary">
        用戶的可視範圍內沒辦法看到 Banner 時，透過 focus 屬性可以自動捲動到
        SWAPBanner 的位置。用於頁面過長時的狀態提示。
      </Typography>
      <SWAPSpace />
      {show ? (
        <SWAPBanner
          title="資料已儲存"
          content="您的實名驗證資料已經儲存，SWAP 人員將於 1 個工作日完成審核"
          status="success"
          primaryButton={{
            title: "返回首頁",
            onClick: () => {},
          }}
          focus
        />
      ) : null}
      <div style={{ height: "180vh" }} />
      <Typography variant="body2" color="textSecondary">
        假設這個頁面有很長的欄位要更新，用戶最後點擊了儲存按鈕
      </Typography>
      <SWAPSpace size="s" />
      <Button variant="contained" color="primary" onClick={() => setShow(true)}>
        儲存
      </Button>
    </SWAPTheme>
  );
};
