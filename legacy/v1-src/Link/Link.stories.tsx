import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { MyLinkProps } from "./Link.types";
import Link from "../Link/Link";

export default {
  title: "Link",
  component: Link,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<MyLinkProps> = (args) => {
  return (
    <SWAPTheme>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 200,
        }}
      >
        <Link {...args}>Text Link</Link>
        <Link>Text Link</Link>
      </div>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = { color: "primary400" };
