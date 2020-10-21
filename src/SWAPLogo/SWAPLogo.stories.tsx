import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPLogo from "./SWAPLogo";
import { SWAPLogoProps } from "./SWAPLogo.types";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { Typography } from "@material-ui/core";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

export default {
  title: "SWAPLogo",
  component: SWAPLogo,
  parameters: {
    docs: {
      description: {
        component: "以 .svg 檔案格式，呈現的 SWAP LOGO",
      },
    },
  },
};

const Demo: Story<SWAPLogoProps> = (args) => <SWAPLogo {...args} />;

export const 認識 = Demo.bind({});
認識.args = {
  size: "middle",
  business: false,
};

export const 顏色 = () => {
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">原色</Typography>
        <Typography variant="body2" color="textSecondary">
          標準顏色 #3f51b5 rgba(63, 81, 181, 1)
        </Typography>
        <SWAPSpace />
        <SWAPLogo />
        <SWAPSpace size="large" />
        <Typography variant="subtitle1">深色</Typography>
        <Typography variant="body2" color="textSecondary">
          深色顏色 #121037 rgba(18, 16, 55, 1)
        </Typography>
        <SWAPSpace />
        <SWAPLogo dark />
      </div>
    </SWAPTheme>
  );
};

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
