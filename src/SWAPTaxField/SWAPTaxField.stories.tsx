import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import {
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";

import SWAPTaxField from "../SWAPTaxField/SWAPTaxField";
import { SWAPTaxFieldProps } from "../SWAPTaxField/SWAPTaxField.types";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import SWAPSpace from "../SWAPSpace/SWAPSpace";
import SWAPModal from "../SWAPModal/SWAPModal";

export default {
  title: "SWAPTaxField",
  component: SWAPTaxField,
  parameters: {
    docs: {
      description: {
        component:
          "案件所得申報類別的下拉選單。用戶可透過選擇案件分類來決定所得的申報類別。",
      },
    },
  },
};

const Demo: Story<SWAPTaxFieldProps> = (args) => <SWAPTaxField {...args} />;
export const 認識 = Demo.bind({});
認識.args = {
  defaultTaxDescription: "",
  onChange: (value) => alert(JSON.stringify(value)),
};

export const 完整示意 = () => {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(undefined);
  return (
    <SWAPTheme>
      <Typography variant="subtitle1">完整示意</Typography>
      <Typography variant="body2" color="textSecondary">
        模擬 SWAP 內建立請款單的情境
      </Typography>
      <SWAPSpace />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setModal(true)}
      >
        建立請款單
      </Button>
      <SWAPModal
        title="建立請款單"
        helpText="透過請款單來向業主請款，你的業主匯款後可取得 SWAP(優市股份有限公司)所開立的發票"
        onClose={() => setModal(false)}
        open={modal}
        steps={[
          {
            stepTitle: "填寫案件內容",
            stepChildren: (
              <div>
                <SWAPTaxField
                  defaultTaxDescription={value?.taxDescription}
                  onChange={(value) => setValue(value)}
                />
                <SWAPSpace />
                <TextField
                  fullWidth
                  multiline
                  label="案件內容"
                  rows={9}
                  variant="outlined"
                  helperText="請簡述本次案件的服務內容與服務對象"
                />
                <SWAPSpace size="large" />
              </div>
            ),
          },
          {
            stepTitle: "設定請款金額",
            stepChildren: "僅示意，此區域為空",
          },
        ]}
        primaryButton={{
          title: "建立請款單",
          onClick: () => alert("僅示意，不會產生請款單"),
        }}
      />
    </SWAPTheme>
  );
};

export const 回應內容 = () => {
  const [value, setValue] = useState(undefined);
  return (
    <SWAPTheme>
      <Typography variant="subtitle1">申報類別的相關資料</Typography>
      <Typography variant="body2" color="textSecondary">
        用戶操作『案件內容』下拉選單以及『設定申報類別』時會呼叫 onChange 函式。
      </Typography>
      <SWAPSpace size="large" />
      <SWAPTaxField
        defaultTaxDescription=""
        onChange={(value) => setValue(value)}
      />
      <SWAPSpace />
      <Typography variant="body2">
        {value ? `回應的 value 物件：${JSON.stringify(value)}` : null}
      </Typography>
    </SWAPTheme>
  );
};

export const 預設值 = () => {
  return (
    <SWAPTheme>
      <Typography variant="subtitle1">預設</Typography>
      <Typography variant="body2" color="textSecondary">
        預設申報類別的描述內容
      </Typography>
      <SWAPSpace />
      <SWAPTaxField
        defaultTaxDescription="9A 執行業務所得 - [92] 程式設計師"
        onChange={(value) => alert(JSON.stringify(value))}
      />
    </SWAPTheme>
  );
};

export const 相關幫助函式 = () => {
  return (
    <SWAPTheme>
      <Typography variant="subtitle1">Utils</Typography>
      <Typography variant="body2" color="textSecondary">
        元件中可以 import 原始資料、幫助函式。
      </Typography>
      <SWAPSpace size="large" />
      <Typography variant="body2" color="textSecondary">
        SWAPIncomeTypes 所得類別的陣列
        <SWAPSpace />
        SWAPExpenseTypes 費用類別的陣列
        <SWAPSpace />
        SWAPTaxDescription 申報類別的文字描述
        <SWAPSpace />
        SWAPTaxIncomeLabel 所得類別的文字描述
        <SWAPSpace />
        SWAPTaxExpenseLabel 費用類別的文字描述
      </Typography>
    </SWAPTheme>
  );
};
