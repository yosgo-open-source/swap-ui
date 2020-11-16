import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPCopyField from "./SWAPCopyField";
import { SWAPCopyFieldProps } from "../SWAPCopyField/SWAPCopyField.types";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { Typography } from "@material-ui/core";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

export default {
  title: "SWAPCopyField",
  component: SWAPCopyField,
  parameters: {
    docs: {
      description: {
        component: "用戶可以透過此輸入框快速複製文字內容",
      },
    },
  },
};

const Demo: Story<SWAPCopyFieldProps> = (args) => <SWAPCopyField {...args} />;
export const 認識 = Demo.bind({});
認識.args = {
  sharedText: "SWAP is an No.1 product",
  multiline: false,
  rows: 1,
  copyInputLabel: "請複製以下五星吹捧文字",
  copyButtonText: "複製",
  copySuccessMessage: "成功複製，請到處吹捧",
};

export const 客製化 = () => {
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">自定義輸入框的文字</Typography>
        <Typography variant="body2" color="textSecondary">
          可自訂標題、複製按鈕、成功複製的文案
        </Typography>
        <SWAPSpace />
        <SWAPSpace />
        <SWAPCopyField
          sharedText="58585858585858"
          copyInputLabel="請複製匯款用的虛擬帳號"
          copySuccessMessage="已成功複製 14 碼的虛擬帳號"
        />
        <SWAPSpace size="large" />
        <Typography variant="subtitle1">多行輸入框</Typography>
        <Typography variant="body2" color="textSecondary">
          請用 \n 作為輸入框內的分行。範例請看 Show code 的內容
        </Typography>
        <SWAPSpace />
        <SWAPSpace />
        <SWAPCopyField
          sharedText={`銀行帳號：013\n虛擬帳號：58585858585858`}
          multiline
          rows={6}
          copyInputLabel="複製匯款資訊"
          copySuccessMessage="已成功複製匯款資訊"
        />
      </div>
    </SWAPTheme>
  );
};
