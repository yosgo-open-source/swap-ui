import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPSpace from "../SWAPSpace/SWAPSpace";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import Styles from "./Styles";
import { StylesProps } from "./Styles.types";
import Typography from "../Typography/Typography";

export default {
  title: "Styles",
  component: Styles,
  parameters: {
    docs: {
      description: {
        component: "網頁上方的導覽列",
      },
    },
  },
};

const Demo: Story<StylesProps> = (args) => {
  return (
    <SWAPTheme>
      <Typography color="primary">調整看看！</Typography>
      <Styles {...args} />
      <SWAPSpace />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {
  color: "primary50",
  borderRadius: "s",
  boxShadow: "s",
};

export const 顏色 = () => {
  return (
    <SWAPTheme>
      <SWAPSpace />
      {/* Primary */}
      <div style={{ display: "flex" }}>
        <div>
          <Typography>primary50</Typography>
          <Styles color="primary50" />
        </div>
        <div>
          <Typography>primary100</Typography>
          <Styles color="primary100" />
        </div>
        <div>
          <Typography>primary200</Typography>
          <Styles color="primary200" />
        </div>
        <div>
          <Typography>primary300</Typography>
          <Styles color="primary300" />
        </div>
        <div>
          <Typography>primary400</Typography>
          <Styles color="primary400" />
        </div>
        <div>
          <Typography>primary500</Typography>
          <Styles color="primary500" />
        </div>
        <div>
          <Typography>primary600</Typography>
          <Styles color="primary600" />
        </div>
        <div>
          <Typography>primary700</Typography>
          <Styles color="primary700" />
        </div>
        <div>
          <Typography>primary800</Typography>
          <Styles color="primary800" />
        </div>

        <div>
          <Typography>primary900</Typography>
          <Styles color="primary900" />
        </div>
        <div>
          <Typography>primaryA11y</Typography>
          <Styles color="primaryA11y" />
        </div>
      </div>
      {/* Secondary */}
      <div style={{ display: "flex" }}>
        <div>
          <Typography>secondary50</Typography>
          <Styles color="secondary50" />
        </div>
        <div>
          <Typography>secondary100</Typography>
          <Styles color="secondary100" />
        </div>
        <div>
          <Typography>secondary200</Typography>
          <Styles color="secondary200" />
        </div>
        <div>
          <Typography>secondary300</Typography>
          <Styles color="secondary300" />
        </div>
        <div>
          <Typography>secondary400</Typography>
          <Styles color="secondary400" />
        </div>
        <div>
          <Typography>secondary500</Typography>
          <Styles color="secondary500" />
        </div>
        <div>
          <Typography>secondary600</Typography>
          <Styles color="secondary600" />
        </div>
        <div>
          <Typography>secondary700</Typography>
          <Styles color="secondary700" />
        </div>
        <div>
          <Typography>secondary800</Typography>
          <Styles color="secondary800" />
        </div>

        <div>
          <Typography>secondary900</Typography>
          <Styles color="secondary900" />
        </div>
        <div>
          <Typography>secondaryA11y</Typography>
          <Styles color="secondaryA11y" />
        </div>
      </div>
      {/* Danger */}
      <div style={{ display: "flex" }}>
        <div>
          <Typography>danger50</Typography>
          <Styles color="danger50" />
        </div>
        <div>
          <Typography>danger100</Typography>
          <Styles color="danger100" />
        </div>
        <div>
          <Typography>danger200</Typography>
          <Styles color="danger200" />
        </div>
        <div>
          <Typography>danger300</Typography>
          <Styles color="danger300" />
        </div>
        <div>
          <Typography>danger400</Typography>
          <Styles color="danger400" />
        </div>
        <div>
          <Typography>danger500</Typography>
          <Styles color="danger500" />
        </div>
        <div>
          <Typography>danger600</Typography>
          <Styles color="danger600" />
        </div>
        <div>
          <Typography>danger700</Typography>
          <Styles color="danger700" />
        </div>
        <div>
          <Typography>danger800</Typography>
          <Styles color="danger800" />
        </div>

        <div>
          <Typography>danger900</Typography>
          <Styles color="danger900" />
        </div>
        <div>
          <Typography>dangerA11y</Typography>
          <Styles color="dangerA11y" />
        </div>
      </div>
      {/* Success */}
      <div style={{ display: "flex" }}>
        <div>
          <Typography>success50</Typography>
          <Styles color="success50" />
        </div>
        <div>
          <Typography>success100</Typography>
          <Styles color="success100" />
        </div>
        <div>
          <Typography>success200</Typography>
          <Styles color="success200" />
        </div>
        <div>
          <Typography>success300</Typography>
          <Styles color="success300" />
        </div>
        <div>
          <Typography>success400</Typography>
          <Styles color="success400" />
        </div>
        <div>
          <Typography>success500</Typography>
          <Styles color="success500" />
        </div>
        <div>
          <Typography>success600</Typography>
          <Styles color="success600" />
        </div>
        <div>
          <Typography>success700</Typography>
          <Styles color="success700" />
        </div>
        <div>
          <Typography>success800</Typography>
          <Styles color="success800" />
        </div>

        <div>
          <Typography>success900</Typography>
          <Styles color="success900" />
        </div>
        <div>
          <Typography>successA11y</Typography>
          <Styles color="successA11y" />
        </div>
      </div>
      {/* Black */}
      <div style={{ display: "flex" }}>
        <div>
          <Typography>white</Typography>
          <Styles color="white" />
        </div>
        <div>
          <Typography>black100</Typography>
          <Styles color="black100" />
        </div>
        <div>
          <Typography>black200</Typography>
          <Styles color="black200" />
        </div>
        <div>
          <Typography>black300</Typography>
          <Styles color="black300" />
        </div>
        <div>
          <Typography>black400</Typography>
          <Styles color="black400" />
        </div>
        <div>
          <Typography>black500</Typography>
          <Styles color="black500" />
        </div>
        <div>
          <Typography>black600</Typography>
          <Styles color="black600" />
        </div>
        <div>
          <Typography>black700</Typography>
          <Styles color="black700" />
        </div>
        <div>
          <Typography>black800</Typography>
          <Styles color="black800" />
        </div>
        <div>
          <Typography>black900</Typography>
          <Styles color="black900" />
        </div>
        <div>
          <Typography>black1000</Typography>
          <Styles color="black1000" />
        </div>
      </div>
    </SWAPTheme>
  );
};
export const 字 = () => {
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
export const 圓角陰影 = () => {
  return (
    <SWAPTheme>
      <div>陰影</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: 500,
        }}
      >
        <div>
          <div>S</div>
          <Styles color="primary50" boxShadow="s" />
        </div>
        <div>
          <div>M</div>
          <Styles color="primary50" boxShadow="m" />
        </div>
        <div>
          <div>L</div>
          <Styles color="primary50" boxShadow="l" />
        </div>
        <div>
          <div>XL</div>
          <Styles color="primary50" boxShadow="xl" />
        </div>
      </div>
      <div>圓角</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: 500,
        }}
      >
        <div>
          <div>S</div>
          <Styles color="danger50" borderRadius="s" />
        </div>
        <div>
          <div>M</div>
          <Styles color="danger50" borderRadius="m" />
        </div>
        <div>
          <div>L</div>
          <Styles color="danger50" borderRadius="l" />
        </div>
        <div>
          <div>XL</div>
          <Styles color="danger50" borderRadius="xl" />
        </div>
      </div>
    </SWAPTheme>
  );
};
