import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import { Button, Divider, Typography } from "@material-ui/core";

import { SWAPSpaceProps } from "../SWAPSpace/SWAPSpace.types";
import SWAPSpace from "./SWAPSpace";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import SWAPModal from "../SWAPModal/SWAPModal";

export default {
  title: "SWAPSpace",
  component: SWAPSpace,
  parameters: {
    docs: {
      description: {
        component: "標準化網頁上物件與物件之間的間隔距離",
      },
    },
  },
};

const Demo: Story<SWAPSpaceProps> = (args) => {
  return (
    <SWAPTheme>
      <Typography variant="h4">區間的配置</Typography>
      <SWAPSpace size="s" />
      <Typography variant="body1">
        &nbsp;我是一段描述，與上下方元件有著特定的區間
      </Typography>
      <div style={{ backgroundColor: "#4b4b4b" }}>
        <SWAPSpace {...args} />
      </div>
      <Button color="primary" variant="contained">
        我是按鈕
      </Button>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {
  size: "l",
};

export const 小區間 = () => {
  return (
    <SWAPTheme>
      <Typography variant="h4">標題</Typography>
      <SWAPSpace size="s" />
      <Typography variant="body1">
        &nbsp;輔助文字。這標題與輔助文字的距離是小區間
      </Typography>
    </SWAPTheme>
  );
};

export const 中區間 = () => {
  const [open, setOpen] = useState(false);
  return (
    <SWAPTheme>
      <Typography variant="subtitle1">以 Modal 元件為例</Typography>
      <Typography variant="body2">
        視窗開啟後，Modal 操作按鈕上下的區間即是使用中區間
      </Typography>
      <SWAPSpace size="m" />
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        點我示意
      </Button>
      <SWAPModal
        title="視窗的標題"
        helpText="視窗的說明文字"
        open={open}
        onClose={() => setOpen(false)}
        primaryButton={{
          title: "主要操作按鈕",
          onClick: () => alert("主要按鈕功能被點擊"),
          disabled: false,
        }}
        secondaryButton={{
          title: "次按鈕",
          onClick: () => alert("次要按鈕功能被點擊"),
          disabled: false,
        }}
      >
        <div>
          <SWAPSpace />
          下方操作按鈕區域，按鈕上下的區間為中區間
          <SWAPSpace />
        </div>
      </SWAPModal>
    </SWAPTheme>
  );
};

export const 大區間 = () => {
  return (
    <SWAPTheme>
      <div>
        <SWAPSpace size="l" />
        <Typography variant="h4" align="center">
          我是區間一
        </Typography>
        <SWAPSpace size="s" />
        <Typography variant="body1" align="center">
          分隔線到此段描述是使用大區間
        </Typography>
        <SWAPSpace size="l" />
      </div>
      <Divider />
      <div>
        <SWAPSpace size="l" />
        <Typography variant="h4" align="center">
          我是區間二
        </Typography>
        <SWAPSpace size="s" />
        <Typography variant="body1" align="center">
          區間二不甘寂寞，也需要一點描述
        </Typography>
        <SWAPSpace size="l" />
      </div>
    </SWAPTheme>
  );
};
