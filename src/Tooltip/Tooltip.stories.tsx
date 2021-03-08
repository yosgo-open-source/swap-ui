import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { MyTooltipProps } from "./Tooltip.types";
import Tooltip from "../Tooltip/Tooltip";
import Typography from "../Typography/Typography";

export default {
  title: "Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: "網頁上方的導覽列",
      },
    },
  },
};

const Demo: Story<MyTooltipProps> = (args) => {
  return (
    <SWAPTheme>
      <div
        style={{
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tooltip {...args}>
          <Typography>調整看看</Typography>
        </Tooltip>
      </div>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = { title: "Label", placement: "top", arrow: true, open: true };
