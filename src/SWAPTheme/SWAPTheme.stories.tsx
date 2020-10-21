import { Typography } from "@material-ui/core";
import React from "react";
import SWAPTheme from "./SWAPTheme";

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

export const 認識 = () => (
  <SWAPTheme>
    <Typography variant="body1">
      請在頁面最外層使用此元件，Theme 的效果就會套用在 Material 的相關元件內。
    </Typography>
    <Typography variant="body2" color="textSecondary">
      SWAPTheme 元件主要是用 Material 的 default theme
      來微調。https://material-ui.com/customization/default-theme/
    </Typography>
  </SWAPTheme>
);
