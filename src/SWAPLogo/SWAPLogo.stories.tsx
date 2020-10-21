import React from "react";
import SWAPLogo from "./SWAPLogo";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { Typography } from "@material-ui/core";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

export default {
  title: "SWAPLogo",
  component: SWAPLogo,
  parameters: {
    docs: {
      description: {
        component: "以 .svg 的檔案格式所呈現的 SWAP 相關 LOGO",
      },
    },
  },
};

export const 認識 = () => <SWAPLogo />;

export const 尺寸 = () => {
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">小</Typography>
        <Typography variant="body2" color="textSecondary">
          小型尺寸的 Logo
        </Typography>
        <SWAPSpace />
        <SWAPLogo size="small" />
        <SWAPSpace size="large" />
        <Typography variant="subtitle1">中</Typography>
        <Typography variant="body2" color="textSecondary">
          中型尺寸的 Logo
        </Typography>
        <SWAPSpace />
        <SWAPLogo size="middle" />
        <SWAPSpace size="large" />
        <Typography variant="subtitle1">大</Typography>
        <Typography variant="body2" color="textSecondary">
          大型尺寸的 Logo
        </Typography>
        <SWAPSpace />
        <SWAPLogo size="large" />
      </div>
    </SWAPTheme>
  );
};

export const 企業版 = () => {
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">小</Typography>
        <Typography variant="body2" color="textSecondary">
          小型尺寸的 Logo
        </Typography>
        <SWAPSpace />
        <SWAPLogo size="small" business />
        <SWAPSpace size="large" />
        <Typography variant="subtitle1">中</Typography>
        <Typography variant="body2" color="textSecondary">
          中型尺寸的 Logo
        </Typography>
        <SWAPSpace />
        <SWAPLogo size="middle" business />
        <SWAPSpace size="large" />
        <Typography variant="subtitle1">大</Typography>
        <Typography variant="body2" color="textSecondary">
          大型尺寸的 Logo
        </Typography>
        <SWAPSpace />
        <SWAPLogo size="large" business />
      </div>
    </SWAPTheme>
  );
};
