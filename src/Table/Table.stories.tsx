import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { MyTableProps } from "./Table.types";
import Table from "../Table/Table";

export default {
  title: "Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<MyTableProps> = (args) => {
  return (
    <SWAPTheme>
      <Table />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
