import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { CircularProgressProps } from "./CircularProgress.types";
import CircularProgress from "../CircularProgress/CircularProgress";

export default {
  title: "CircularProgress",
  component: CircularProgress,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<CircularProgressProps> = (args) => {
  return (
    <SWAPTheme>
      <div style={{ padding: 20 }}>
        <CircularProgress {...args} />
      </div>
      Dark
      <div style={{ backgroundColor: "blue", padding: 20 }}>
        <CircularProgress dark />
      </div>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = { size: 20, thickness: 5 };
