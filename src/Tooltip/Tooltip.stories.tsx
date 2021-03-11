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
          width: 300,
          height: 150,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#cccccc",
        }}
      >
        <Tooltip {...args}>
          <Typography>Hover me please!</Typography>
        </Tooltip>
      </div>
      <div
        style={{
          width: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 50,
        }}
      >
        <Tooltip title="Label" arrow placement="top" open={true}>
          Top
        </Tooltip>
        <Tooltip title="Label" arrow placement="bottom" open={true}>
          Bottom
        </Tooltip>
        <Tooltip
          title="本付款機制與國泰世華銀行以及 Tappay 提供。您提供的資訊將透過 SSL 加密傳輸至銀行端進行交易，SWAP 並不會儲存任何資訊。"
          placement="top"
          open={true}
          dark
        >
          Dark
        </Tooltip>
        <Tooltip
          title="本付款機制與國泰世華銀行以及 Tappay 提供。您提供的資訊將透過 SSL 加密傳輸至銀行端進行交易，SWAP 並不會儲存任何資訊。"
          placement="bottom"
          open={true}
          light
        >
          Light
        </Tooltip>
      </div>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {
  title: "Label",
  placement: "top",
  arrow: true,
};
