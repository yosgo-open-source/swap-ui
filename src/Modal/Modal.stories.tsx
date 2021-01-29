import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import { ModalProps } from "../Modal/Modal.types";
import SWAPSpace from "../SWAPSpace/SWAPSpace";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import Modal from "./Modal";
import SWAPDialog from "../SWAPDialog/SWAPDialog";

export default {
  title: "Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: "用戶在蓋板視窗內完成某一件事情",
      },
    },
  },
};

const Demo: Story<ModalProps> = (args) => {
  return (
    <SWAPTheme>
      <Typography variant="subtitle1">Modal 平常就像個隱形人</Typography>
      <Typography variant="body2" color="textSecondary">
        請將下方 open 屬性調整為 true，以開啟 Modal。
      </Typography>
      <Modal {...args} size="extraSmall" />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {
  title: "視窗標題視窗標題",
  helpText: "",
  open: false,
  onClose: () => alert("呼叫關閉視窗函式"),
  primaryButton: {
    title: "主按鈕",
    onClick: () => alert("點擊主按鈕"),
    disabled: false,
  },
  secondaryButton: {
    title: "次要按鈕",
    onClick: () => alert("點擊次要按鈕"),
    disabled: false,
  },
  children:
    "視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題視窗標題",
};
export const 內容多寡 = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">Modal 內容多於視線範圍</Typography>
        <Typography variant="body2" color="textSecondary">
          視窗的標題與操作區域將會固定在頂端與底部，內容區域可以捲動
        </Typography>
        <SWAPSpace />
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          color="primary"
        >
          點我示意
        </Button>
        <Modal
          title="視窗標題"
          helpText="視窗說明文字"
          open={open}
          onClose={() => setOpen(false)}
          primaryButton={{
            title: "確認執行",
            onClick: () => {},
            disabled: false,
          }}
        >
          <div>
            <Typography variant="body2">
              這裡的內容很長喔，所以可以捲動
            </Typography>
            <div style={{ height: "1200px" }}></div>
            <Typography variant="body2">已經捲動到最底部了</Typography>
          </div>
        </Modal>
      </div>
      <SWAPSpace size="l" />
      <div>
        <Typography variant="subtitle1">Modal 內容少於視線範圍</Typography>
        <Typography variant="body2" color="textSecondary">
          置中顯示視窗，內容無捲動功能
        </Typography>
        <SWAPSpace />
        <Button
          onClick={() => setOpen2(true)}
          variant="contained"
          color="primary"
        >
          點我示意
        </Button>
        <Modal
          title="蓋板視窗"
          helpText="這個蓋板視窗..."
          open={open2}
          onClose={() => setOpen2(false)}
          primaryButton={{
            title: "確認執行",
            onClick: () => {},
            disabled: false,
          }}
        >
          <div style={{ height: "180px" }}>
            <Typography variant="body2">
              這裡的內容比較少，不需捲動。
            </Typography>
            <br />
          </div>
        </Modal>
      </div>
    </SWAPTheme>
  );
};
