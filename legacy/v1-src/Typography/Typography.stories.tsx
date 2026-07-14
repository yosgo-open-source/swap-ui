import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPSpace from "../SWAPSpace/SWAPSpace";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { TypographyProps } from "./Typography.types";
import Typography from "../Typography/Typography";

export default {
  title: "Typography",
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<TypographyProps> = (args) => {
  return (
    <SWAPTheme>
      <Typography {...args} />
      <Typography {...args} style={{ backgroundColor: "#000000" }} />
      <SWAPSpace />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {
  variant: "d1",
  color: "primary",
  children: "SWAP",
  mode: "",
};

export const 字級 = () => {
  return (
    <SWAPTheme>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: 800,
        }}
      >
        <div style={{ fontSize: 32 }}>
          <Typography>
            <b>思源黑體</b>
          </Typography>
          <Typography style={{ fontFamily: "NotoSansTC" }}>
            <b>Noto Sans TC</b>
          </Typography>
          <Typography style={{ fontFamily: "NotoSansTC" }}>
            <b>Bold</b>
          </Typography>
          <SWAPSpace />
          <Typography>思源黑體</Typography>
          <Typography style={{ fontFamily: "NotoSansTC" }}>
            Noto Sans TC
          </Typography>
          <Typography style={{ fontFamily: "NotoSansTC" }}>Regular</Typography>
          <SWAPSpace />
          <Typography>
            <b>Rounded MPlus 1c</b>
          </Typography>
          <Typography>
            <b>Bold</b>
          </Typography>
          <SWAPSpace />
          <Typography>Rounded MPlus 1c</Typography>
          <Typography>Regular</Typography>
        </div>
        <div>
          <Typography variant="d1">D1</Typography>
          <Typography variant="d2">D2</Typography>
          <Typography variant="d3">D3</Typography>
          <Typography variant="d4">D4</Typography>
        </div>
        <div>
          <Typography variant="h1">H1</Typography>
          <Typography variant="h2">H2</Typography>
          <Typography variant="h3">H3</Typography>
          <Typography variant="h4">H4</Typography>
          <Typography variant="h5">H5</Typography>
          <Typography variant="h6">H6</Typography>
        </div>
        <div>
          <Typography variant="title">Title</Typography>
          <Typography variant="title_loose">Title_loose</Typography>
          <Typography variant="subtitle">Subtitle</Typography>
          <Typography variant="subtitle_loose">Subtitle_loose</Typography>
          <Typography variant="body1">Body1</Typography>
          <Typography variant="body1_loose">Body1_loose</Typography>
          <Typography variant="body2">Body2</Typography>
          <Typography variant="body2_loose">Body2_loose</Typography>
          <Typography variant="caption1">Caption1</Typography>
          <Typography variant="caption1_loose">Caption1_loose</Typography>
          <Typography variant="caption2">Caption2</Typography>
          <Typography variant="caption2_loose">Caption2_loose</Typography>
          <Typography variant="small1">Small1</Typography>
          <Typography variant="small1_loose">Small1_loose</Typography>
          <Typography variant="small2">Small2</Typography>
          <Typography variant="small2_loose">Small2_loose</Typography>
          <Typography variant="tiny1">Tiny1</Typography>
          <Typography variant="tiny1_loose">Tiny1_loose</Typography>
          <Typography variant="tiny2">Tiny2</Typography>
          <Typography variant="tiny2_loose">Tiny2_loose</Typography>
        </div>
        <div>
          <Typography variant="button_l">Button_l</Typography>
          <Typography variant="button_s">button_s</Typography>
        </div>
        <div>
          <Typography variant="h6">Light Mode</Typography>
          <Typography variant="h6" color="primary">
            Primary Text Color
          </Typography>
          <Typography variant="h6" color="secondary">
            Secondary Text Color
          </Typography>
          <Typography variant="h6" color="tertiary">
            Tertiary Text Color
          </Typography>
          <SWAPSpace size="l" />
          <Typography variant="h6">Dark Mode</Typography>
          <div style={{ backgroundColor: "#000000" }}>
            <Typography variant="h6" mode="dark" color="primary">
              Primary Text Color
            </Typography>
            <Typography variant="h6" mode="dark" color="secondary">
              Secondary Text Color
            </Typography>
            <Typography variant="h6" mode="dark" color="tertiary">
              Tertiary Text Color
            </Typography>
          </div>
        </div>
      </div>
    </SWAPTheme>
  );
};
