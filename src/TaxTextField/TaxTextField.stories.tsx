import React from "react";
import { Story } from "@storybook/react/types-6-0";

import TaxTextField from "../TaxTextField/TaxTextField";
import { TaxTextFieldProps } from "../TaxTextField/TaxTextField.types";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import Modal from "../Modal/Modal";

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

const Demo: Story<TaxTextFieldProps> = (args) => {
  const [step, setStep] = React.useState(1);
  const [codeValue, setCodeValue] = React.useState("");
  const [domainValue, setDomainValue] = React.useState("");
  const [domainCodeValue, setDomainCodeValue] = React.useState("");
  const [codeError, setCodeError] = React.useState(false);
  const [domainError, setDomainError] = React.useState(false);
  return (
    <SWAPTheme>
      <Modal
        open
        onClose={() => {}}
        title="TEST"
        children={
          step === 1 ? (
            <TaxTextField
              onChange={(value: any) => {
                const {
                  incomeCode,
                  taxDescription,
                  expenseCode,
                  expenseCodeAndLabel,
                } = value;
                setCodeValue(incomeCode);
                setDomainValue(expenseCodeAndLabel);
                setDomainCodeValue(expenseCode);
              }}
              codeValue={codeValue}
              domainValue={domainValue}
              domainCodeValue={domainCodeValue}
              codeError={codeError}
              codeHelperText={
                codeError ? <div style={{ color: "red" }}>錯誤 </div> : null
              }
              domainError={domainError}
              domainHelperText={
                domainError ? <div style={{ color: "red" }}>錯誤 </div> : null
              }
              codeOnClick={() => setCodeError(false)}
              domainOnClick={() => setDomainError(false)}
            />
          ) : (
            <div>THE END</div>
          )
        }
        primaryButton={{
          title: "next",
          onClick: () => {
            if (!codeValue) {
              setCodeError(true);
            } else if (codeValue !== "50" && !domainValue) {
              setDomainError(true);
            } else {
              setStep(step + 1);
            }
          },
        }}
        secondaryButton={{ title: "prev", onClick: () => setStep(step - 1) }}
      />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
