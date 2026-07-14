import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { ChipProps } from "./Chip.types";
import Chip from "../Chip/Chip";

export default {
  title: "Chip",
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<ChipProps> = (args) => {
  return (
    <SWAPTheme>
      <Chip {...args} />
      <div
        style={{
          marginTop: 50,
          display: "flex",
          width: 500,
          justifyContent: "space-around",
        }}
      >
        <div>
          <Chip
            label="Label"
            outlined
            variant="neutral"
            style={{ marginBottom: 20 }}
          />
          <Chip label="Label" contained variant="neutral" />
        </div>
        <div>
          <Chip
            label="Label"
            outlined
            variant="primary"
            style={{ marginBottom: 20 }}
          />
          <Chip label="Label" contained variant="primary" />
        </div>
        <div>
          <Chip
            label="Label"
            outlined
            variant="success"
            style={{ marginBottom: 20 }}
          />
          <Chip label="Label" contained variant="success" />
        </div>
        <div>
          <Chip
            label="Label"
            outlined
            variant="danger"
            style={{ marginBottom: 20 }}
          />
          <Chip label="Label" contained variant="danger" />
        </div>
      </div>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = { label: "調整看看" };
