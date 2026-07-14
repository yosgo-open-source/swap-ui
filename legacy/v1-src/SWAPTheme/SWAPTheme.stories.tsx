import { Typography } from "@material-ui/core";
import { Story } from "@storybook/react/types-6-0";
import React from "react";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

import SWAPTheme from "./SWAPTheme";
import SWAPDefaultTheme from "./SWAPTheme";
import { SWAPThemeProps } from "./SWAPTheme.types";

export default {
  title: "SWAPTheme",
  compoenent: SWAPTheme,
  parameters: {
    docs: {
      description: {
        component:
          "SWAP 使用的 Material theme，參考網址(https://material-ui.com/customization/theming/)",
      },
    },
  },
};

const Demo: Story<SWAPThemeProps> = (args) => (
  <SWAPTheme {...args}>
    <Typography variant="body1">這是一個無聊但是重要的元件</Typography>
    <SWAPSpace size="s" />
    <Typography variant="body2" color="textSecondary">
      請在頁面最外層使用此元件，Theme 的效果就會套用在 Material 的相關元件內。
    </Typography>
  </SWAPTheme>
);

export const 認識 = Demo.bind({});
認識.args = {
  themeOptions: SWAPDefaultTheme,
};
