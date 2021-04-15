import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { MyPaginationProps } from "./Pagination.types";
import Pagination from "../Pagination/Pagination";

export default {
  title: "Pagination",
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<MyPaginationProps> = (args) => {
  return (
    <SWAPTheme>
      <Pagination {...args} />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = { count: 10 };
