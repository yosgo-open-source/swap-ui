import React from "react";
import { Story } from "@storybook/react/types-6-0";

import TaxTextField from "../TaxTextField/TaxTextField";
import { TaxTextFieldProps } from "../TaxTextField/TaxTextField.types";

export default {
  title: "TaxTextField",
  component: TaxTextField,
  parameters: {
    docs: {
      description: {
        component:
          "案件所得申報類別的下拉選單。用戶可透過選擇案件分類來決定所得的申報類別。",
      },
    },
  },
};

const Demo: Story<TaxTextFieldProps> = (args) => <TaxTextField {...args} />;
export const 認識 = Demo.bind({});
認識.args = {
  taxDescription: "",
  onChange: (value: any) => alert(JSON.stringify(value)),
};
