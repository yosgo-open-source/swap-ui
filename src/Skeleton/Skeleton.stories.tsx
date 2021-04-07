import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { MySkeletonProps } from "./Skeleton.types";
import Skeleton from "../Skeleton/Skeleton";

export default {
  title: "Skeleton",
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: "網頁上方的導覽列",
      },
    },
  },
};

const Demo: Story<MySkeletonProps> = (args) => {
  return (
    <SWAPTheme>
      <div style={{ width: 500, marginBottom: 24 }}>
        <Skeleton {...args} />
      </div>

      <Skeleton variant="text" width={300} height={30} />
      <Skeleton variant="circle" width={60} height={60} />
      <Skeleton variant="rect" width={300} height={300} />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
