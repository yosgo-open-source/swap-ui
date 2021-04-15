import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { ProgressProps } from "./Progress.types";
import Progress from "../Progress/Progress";
import Button from "../Button/Button";

export default {
  title: "Progress",
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<ProgressProps> = (args) => {
  const [step, setStep] = useState(1);
  return (
    <SWAPTheme>
      <Progress {...args} step={step} />
      <Button
        size="small"
        style={{ margin: 4 }}
        variant="text"
        onClick={() => setStep(step + 1)}
      >
        step +1
      </Button>
      <Button
        size="small"
        style={{ margin: 4 }}
        variant="text"
        onClick={() => setStep(step - 1)}
      >
        step -1
      </Button>
      <Button
        size="small"
        style={{ margin: 4 }}
        variant="text"
        onClick={() => setStep(3)}
      >
        to step 3
      </Button>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {
  count: 15,
  label: [
    <span>第一個</span>,
    "第二個",
    "第三個",
    <span>
      第四個
      <br />
      個四第
    </span>,
    "第五個",
    "第六個",
    "第七個",
    "第八個",
    "第九個",
    "第十個",
    "第十一個",
    "第十二個",
    "第十三個",
    "第十四個",
    "最後一個",
  ],
  width: 1000,
};
