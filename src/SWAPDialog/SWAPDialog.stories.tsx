import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPDialog from "./SWAPDialog";
import { SWAPDialogProps } from "../SWAPDialog/SWAPDialog.types";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Typography,
} from "@material-ui/core";
import SWAPSpace from "../SWAPSpace/SWAPSpace";
import SWAPModal from "../SWAPModal/SWAPModal";

export default {
  title: "SWAPDialog",
  component: SWAPDialog,
  parameters: {
    docs: {
      description: {
        component: "讓用戶確認某一件事情",
      },
    },
  },
};

const Demo: Story<SWAPDialogProps> = (args) => (
  <SWAPTheme>
    <Typography variant="subtitle1">Dialog 平常就像個隱形人</Typography>
    <Typography variant="body2" color="textSecondary">
      請將下方 open 屬性調整為 true，以開啟 Dialog。
    </Typography>
    <SWAPDialog {...args} />
  </SWAPTheme>
);
export const 認識 = Demo.bind({});
認識.args = {
  title: "Dialog 標題",
  helpText: "Dialog 的描述",
  primaryButton: {
    title: "主按鈕",
    onClick: () => alert("主按鈕"),
  },
  secondaryButton: {
    title: "次按鈕",
    onClick: () => alert("次按鈕"),
  },
};

export const 狀態 = () => {
  const [dia1, setDia1] = useState(false);
  const [dia2, setDia2] = useState(false);
  const [dia3, setDia3] = useState(false);
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">成功狀態</Typography>
        <Typography variant="body2" color="textSecondary">
          確認成功狀態並可引導後續步驟
        </Typography>
        <SWAPSpace />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDia1(true)}
        >
          點我示意
        </Button>
        <SWAPDialog
          status="success"
          title="成功"
          helpText="您的實名驗證資料已更新完畢"
          open={dia1}
          primaryButton={{
            title: "返回首頁",
            onClick: () => setDia1(false),
          }}
        />
        <SWAPSpace size="l" />
        <Typography variant="subtitle1">注意狀態</Typography>
        <Typography variant="body2" color="textSecondary">
          操作某件事前提醒用戶要注意
        </Typography>
        <SWAPSpace />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDia2(true)}
        >
          點我示意
        </Button>
        <SWAPDialog
          status="warning"
          title="請再次確認"
          helpText="送出資料前請再次確認您所填寫的資料是否正確"
          open={dia2}
          primaryButton={{
            title: "我確認資料正確",
            onClick: () => setDia2(false),
          }}
          children={
            <div>
              <Typography variant="body2" color="textSecondary">
                備註. 透過狀態的顏色來向用戶傳達確認事項的類型為何。
              </Typography>
            </div>
          }
        />
        <SWAPSpace size="l" />
        <Typography variant="subtitle1">危險狀態</Typography>
        <Typography variant="body2" color="textSecondary">
          告知用戶危險的狀態
        </Typography>
        <SWAPSpace />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDia3(true)}
        >
          點我示意
        </Button>
        <SWAPDialog
          status="critical"
          title="是否要發射核彈"
          helpText="發射核彈後你的所有財產都會歸零，你確認嗎？"
          open={dia3}
          primaryButton={{
            title: "發射吧！",
            onClick: () => setDia3(false),
            disabled: true,
          }}
          secondaryButton={{
            title: "不，我開玩笑的",
            onClick: () => setDia3(false),
          }}
          children={
            <div>
              <Typography variant="body2" color="textSecondary">
                備註. SWAPDialog 並不像 SWAPModal 有 onClose 的
                屬性，目的是希望用戶可以在操作按鈕上進行確認，避免按到 ESC
                而沒確認到該確認的事情。
              </Typography>
            </div>
          }
        />
      </div>
    </SWAPTheme>
  );
};

export const 內容多寡 = () => {
  const [dia1, setDia1] = useState(false);
  const [dia2, setDia2] = useState(false);
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">簡單資訊</Typography>
        <Typography variant="body2" color="textSecondary">
          一句話就可以向用戶傳達要確認的事情
        </Typography>
        <SWAPSpace />
        <SWAPDialog
          status="success"
          title="OOXX 成功"
          helpText="有些事情很簡單，不需要太多解釋，用戶知道就好"
          open={dia1}
          primaryButton={{
            title: "返回首頁",
            onClick: () => setDia1(false),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDia1(true)}
        >
          點我示意
        </Button>
        <SWAPSpace size="l" />
        <Typography variant="subtitle1">額外資訊</Typography>
        <Typography variant="body2" color="textSecondary">
          某件要用戶確認的事情無法以一句話解釋完畢。額外的資訊建議不要多於可視範圍，
          Dialog 需要讓用戶一目瞭然並直接做出動作
        </Typography>
        <SWAPSpace />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDia2(true)}
        >
          點我示意
        </Button>
        <SWAPDialog
          status="success"
          title="已收到您的提領請求"
          helpText="系統正在處理您的提領款項 19,999 元，請耐心等候"
          open={dia2}
          primaryButton={{
            title: "完成",
            onClick: () => setDia2(false),
          }}
          secondaryButton={{
            title: "聯繫客服",
            onClick: () => setDia2(false),
          }}
          children={
            <div>
              <Typography variant="subtitle1">
                <b>小叮嚀</b>
              </Typography>
              <SWAPSpace />
              <Typography variant="body2">
                1️⃣ 系統需要一個完整的工作日進行匯款
              </Typography>
              <SWAPSpace size="s" />
              <Typography variant="body2">
                2️⃣ 提領後若遇假日將於最近之工作日進行匯款
              </Typography>
              <SWAPSpace size="s" />
              <Typography variant="body2">
                3️⃣ 例如，週五晚上 8 點提領，系統將於週一完成匯款
              </Typography>
            </div>
          }
        />
      </div>
    </SWAPTheme>
  );
};

export const 整合應用 = () => {
  const [modal, setModal] = useState(false);
  const [dia, setDia] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFunc = () => {
    setLoading(true);
    setTimeout(() => {
      setMsg("套用成功");
      setTimeout(() => {
        setModal(false);
        setDia(true);
      }, 1000);
    }, 3000);
  };

  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">整合 SWAPModal</Typography>
        <Typography variant="body2" color="textSecondary">
          SWAPModal 完成某件事情後，使用 SWAPDialog 傳達事情的狀態與後續行動。
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
          title="請挑選你喜歡的造型風格"
          helpText="俗話說人要衣裝，佛要金裝，挑選合適的風格成為把妹達人"
          onClose={() => setModal(false)}
          open={modal}
          primaryButton={{
            title: loading ? "套用風格中..." : "確認此風格",
            onClick: () => handleFunc(),
            disabled: loading,
          }}
          successMessage={msg}
          closeWindowOnSuccessMessage
        >
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                選擇一個風格，開始你的把妹旅程
              </FormLabel>
              <SWAPSpace />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="gilad" color="primary" />}
                  label="時尚猛男風"
                />
                <FormControlLabel
                  control={<Checkbox name="jason" color="primary" />}
                  label="土豪乞丐風"
                />
                <FormControlLabel
                  control={<Checkbox name="antoine" color="primary" />}
                  label="陰柔美男風"
                />
              </FormGroup>
            </FormControl>
          </div>
        </SWAPModal>
        <SWAPDialog
          status="success"
          open={dia}
          title="你已成為時尚猛男"
          helpText="若要變更風格，請練到 30 等後再來改變風格"
          children={
            <div>
              <Typography variant="subtitle1">接下來你可以？</Typography>
              <SWAPSpace />
              <Typography variant="body2">
                1. 花錢課金，直接變成萬人迷
              </Typography>
              <SWAPSpace size="s" />
              <Typography variant="body2">2. 前往把妹新手村</Typography>
              <SWAPSpace size="s" />
              <Typography variant="body2">3. 刪帳號</Typography>
            </div>
          }
          primaryButton={{
            title: "課金",
            onClick: () => window.location.reload(),
          }}
          secondaryButton={{
            title: "前往新手村",
            onClick: () => window.location.reload(),
          }}
        />
      </div>
    </SWAPTheme>
  );
};
