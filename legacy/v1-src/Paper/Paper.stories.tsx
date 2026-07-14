import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { MyPaperProps } from "./Paper.types";
import Paper from "../Paper/Paper";

export default {
  title: "Paper",
  component: Paper,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<MyPaperProps> = (args) => {
  return (
    <SWAPTheme>
      <Paper width={300} height={500} {...args}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h3>Content</h3>
        </div>
      </Paper>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
