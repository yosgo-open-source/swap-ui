import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import { SWAPModalProps } from "../SWAPModal/SWAPModal.types";
import SWAPSpace from "../SWAPSpace/SWAPSpace";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import SWAPModal from "./SWAPModal";

export default {
  title: "SWAPModal",
  component: SWAPModal,
  parameters: {
    docs: {
      description: {
        component: "用戶在蓋板視窗內完成某一件事情",
      },
    },
  },
};

const Demo: Story<SWAPModalProps> = (args) => {
  return (
    <SWAPTheme>
      <Typography variant="subtitle1">Modal 平常就像個隱形人</Typography>
      <Typography variant="body2" color="textSecondary">
        請將下方 open 屬性調整為 true，以開啟 Modal。
      </Typography>
      <SWAPModal {...args} />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {
  title: "視窗標題",
  helpText: "輔助說明文字",
  open: false,
  onClose: () => alert("呼叫關閉視窗函式"),
  primaryButton: {
    title: "主按鈕",
    onClick: () => alert("點擊主按鈕"),
    disabled: false,
  },
  children: "備註：因為沒有 State 控制，請重新整理頁面來關閉 Modal",
  secondaryButton: {
    title: "次要按鈕",
    onClick: () => alert("點擊次要按鈕"),
    disabled: false,
  },
  successMessage: "這裡顯示操作相關的成功提示",
  errorMessage: "這裡顯示操作相關的錯誤提示",
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
        <SWAPModal
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
        </SWAPModal>
      </div>
      <SWAPSpace size="large" />
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
        <SWAPModal
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
        </SWAPModal>
      </div>
    </SWAPTheme>
  );
};

export const 訊息提示 = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">成功訊息</Typography>
        <Typography variant="body2" color="textSecondary">
          在視窗內點擊按鈕後執行某個事件所產生的成功訊息
        </Typography>
        <SWAPSpace />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModal1(true)}
        >
          點我示意
        </Button>
        <SWAPModal
          title="轉帳給常用聯絡人"
          helpText=""
          open={modal1}
          onClose={() => setModal1(false)}
          primaryButton={{
            title: "確認轉帳",
            onClick: () => setMessage1("轉帳完成"),
            disabled: false,
          }}
          successMessage={message1}
        >
          <div>
            <SWAPSpace />
            視窗內容
            <SWAPSpace />
          </div>
        </SWAPModal>
        <SWAPSpace size="large" />
        <Typography variant="subtitle1">錯誤訊息</Typography>
        <Typography variant="body2" color="textSecondary">
          在視窗內點擊按鈕後執行某個事件所產生的錯誤訊息
        </Typography>
        <SWAPSpace />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModal2(true)}
        >
          點我示意
        </Button>
        <SWAPModal
          title="轉帳給常用聯絡人"
          helpText=""
          open={modal2}
          onClose={() => setModal2(false)}
          primaryButton={{
            title: "確認轉帳",
            onClick: () => setMessage2("請選擇你的常用聯絡人"),
            disabled: false,
          }}
          errorMessage={message2}
        >
          <div>
            <SWAPSpace />
            視窗內容
            <SWAPSpace />
          </div>
        </SWAPModal>
      </div>
    </SWAPTheme>
  );
};

export const 綁定成功訊息 = () => {
  const [modal1, setModal1] = useState(false);
  const [message1, setMessage1] = useState("");
  const [modal2, setModal2] = useState(false);
  const [message2, setMessage2] = useState("");
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">關閉視窗</Typography>
        <Typography variant="body2" color="textSecondary">
          顯示成功訊息後，關閉視窗
        </Typography>
        <SWAPSpace />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModal1(true)}
        >
          點我示意
        </Button>
        <SWAPModal
          title="視窗標題"
          helpText="視窗說明文字"
          open={modal1}
          onClose={() => setModal1(false)}
          primaryButton={{
            title: "確認操作",
            onClick: () => setMessage1("OOOO操作已完成"),
            disabled: false,
          }}
          successMessage={message1}
          closeWindowOnSuccessMessage
        >
          <div>
            <SWAPSpace />
            例如: 下載某個檔案
            <SWAPSpace />
          </div>
        </SWAPModal>
        <SWAPSpace size="large" />
        <Typography variant="subtitle1">關閉並重新整理頁面</Typography>
        <Typography variant="body2" color="textSecondary">
          顯示成功訊息後，關閉視窗並重新整理
        </Typography>
        <SWAPSpace />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModal2(true)}
        >
          點我示意
        </Button>
        <SWAPModal
          title="視窗標題"
          helpText="視窗說明文字"
          open={modal2}
          onClose={() => setModal2(false)}
          primaryButton={{
            title: "確認操作",
            onClick: () => setMessage2("OOOO操作已完成"),
            disabled: false,
          }}
          successMessage={message2}
          closeWindowOnSuccessMessage
          reloadOnWindowClose
        >
          <div>
            <SWAPSpace />
            例如: 更新帳戶的資料
            <SWAPSpace />
          </div>
        </SWAPModal>
        <SWAPSpace />
      </div>
    </SWAPTheme>
  );
};

export const 次按鈕 = () => {
  const [open, setOpen] = useState(false);
  const [sMessage, setSmessage] = useState("");
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">次按鈕</Typography>
        <Typography variant="body2" color="textSecondary">
          某件事情需要兩種操作按鈕時
        </Typography>
        <SWAPSpace />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
        >
          點我示意
        </Button>
        <SWAPModal
          title="分享我的請款單"
          open={open}
          onClose={() => setOpen(false)}
          primaryButton={{
            title: "前往請款單頁面",
            onClick: () => alert("主要按鈕功能被點擊"),
            disabled: false,
          }}
          secondaryButton={{
            title: "複製連結",
            onClick: () => setSmessage("你的請款單連結複製"),
            disabled: false,
          }}
          successMessage={sMessage}
          closeWindowOnSuccessMessage
          reloadOnWindowClose
        >
          <div>
            <SWAPSpace />
            視窗內容
            <SWAPSpace />
          </div>
        </SWAPModal>
      </div>
    </SWAPTheme>
  );
};

export const 多步驟視窗 = () => {
  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState("");
  return (
    <SWAPTheme>
      <Typography variant="subtitle1">多步驟視窗</Typography>
      <Typography variant="body2" color="textSecondary">
        某件事需要切分多個步驟來完成
      </Typography>
      <SWAPSpace />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setModal(true)}
      >
        點我示意
      </Button>
      <SWAPModal
        title="Space SWAP 發射火箭到太空"
        helpText="這是一個多個步驟的視窗示意，原本 children 的屬性將顯示於 stepChildren 的下方。primaryButton 與 secondaryButton 將顯示於最後一步驟"
        open={modal}
        onClose={() => setModal(false)}
        primaryButton={{
          title: "確認發射",
          onClick: () => setMsg("系統已安排發射火箭"),
        }}
        secondaryButton={{
          title: "取消",
          onClick: () => setModal(false),
        }}
        successMessage={msg}
        closeWindowOnSuccessMessage
        reloadOnWindowClose
        steps={[
          {
            stepTitle: "挑選火箭",
            stepChildren: (
              <div>
                <Typography variant="body1">◻️ 可回收型</Typography>
                <SWAPSpace size="large" />
                <Typography variant="body1">◻️ 低耗能續航型</Typography>
                <SWAPSpace size="large" />
                <Typography variant="body1">◻️ 高乘載運輸型</Typography>
              </div>
            ),
            nextStepText: "下一步，選擇星球",
          },
          {
            stepTitle: "選擇星球",
            stepChildren: (
              <div>
                <Typography variant="body1">◻️ 火星</Typography>
                <SWAPSpace size="large" />
                <Typography variant="body1">◻️ 金星</Typography>
                <SWAPSpace size="large" />
                <Typography variant="body1">◻️ 土星</Typography>
                <SWAPSpace size="large" />
                <Typography variant="body1">◻️ 水星</Typography>
                <SWAPSpace size="large" />
                <Typography variant="body1">◻️ 冥王星</Typography>
              </div>
            ),
            nextStepText: "下一步，設定發射時間",
          },
          {
            stepTitle: "發射時間",
            stepChildren: (
              <div>
                <Typography variant="body1">️️◻️ 立即</Typography>
                <SWAPSpace size="large" />
                <Typography variant="body1">◻️ 一天後</Typography>
                <SWAPSpace size="large" />
                <Typography variant="body1">◻️ 三天後</Typography>
                <SWAPSpace size="large" />
                <Typography variant="body1">◻️ 七天後</Typography>
              </div>
            ),
          },
        ]}
      />
    </SWAPTheme>
  );
};
