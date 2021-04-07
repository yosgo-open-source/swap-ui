import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { ButtonProps } from "../Button/Button.types";
import Button from "./Button";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import SWAPSpace from "../SWAPSpace/SWAPSpace";
import Typography from "../Typography/Typography";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

export default {
  title: "Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const Demo: Story<ButtonProps> = (args) => {
  return (
    <SWAPTheme>
      調整看看！
      <Button {...args}></Button>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {
  children: "button",
  variant: "danger",
  size: "medium",
  startIcon: "",
  endIcon: "",
  onClick: () => alert("我是大笨豬"),
};

export const 類型 = () => {
  return (
    <SWAPTheme>
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 900 }}
      >
        <div>類型</div>
        <div>Primary</div>
        <div>Secondary</div>
        <div>Tertiary</div>
        <div>Text</div>
      </div>
      <SWAPSpace size="m" />
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 900 }}
      >
        <div style={{ width: 140, textAlign: "center" }}>Text Only</div>
        <Button variant="primary" minWidth={140}>
          button
        </Button>
        <Button variant="secondary" minWidth={140}>
          button
        </Button>
        <Button variant="tertiary" minWidth={140}>
          button
        </Button>
        <Button variant="text" minWidth={140}>
          button
        </Button>
      </div>
      <SWAPSpace size="m" />
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 900 }}
      >
        <div style={{ width: 140, textAlign: "center" }}>Text + Right Icon</div>
        <Button
          variant="primary"
          endIcon={<AccountCircleOutlinedIcon />}
          minWidth={140}
        >
          button
        </Button>
        <Button
          variant="secondary"
          endIcon={<AccountCircleOutlinedIcon />}
          minWidth={140}
        >
          button
        </Button>
        <Button
          variant="tertiary"
          endIcon={<AccountCircleOutlinedIcon />}
          minWidth={140}
        >
          button
        </Button>
        <Button
          variant="text"
          endIcon={<AccountCircleOutlinedIcon />}
          minWidth={140}
        >
          button
        </Button>
      </div>
      <SWAPSpace size="m" />
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 900 }}
      >
        <div style={{ width: 140, textAlign: "center" }}>Left Icon + Text </div>
        <Button
          variant="primary"
          startIcon={<AccountCircleOutlinedIcon />}
          minWidth={140}
        >
          button
        </Button>
        <Button
          variant="secondary"
          startIcon={<AccountCircleOutlinedIcon />}
          minWidth={140}
        >
          button
        </Button>
        <Button
          variant="tertiary"
          startIcon={<AccountCircleOutlinedIcon />}
          minWidth={140}
        >
          button
        </Button>
        <Button
          variant="text"
          startIcon={<AccountCircleOutlinedIcon />}
          minWidth={140}
        >
          button
        </Button>
      </div>
      <SWAPSpace size="m" />
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 900 }}
      >
        <div style={{ width: 140, textAlign: "center" }}> Icon Only</div>
        <Button variant="primary" minWidth={140}>
          <AccountCircleOutlinedIcon fontSize="small" />
        </Button>
        <Button variant="secondary" minWidth={140}>
          <AccountCircleOutlinedIcon fontSize="small" />
        </Button>
        <Button variant="tertiary" minWidth={140}>
          <AccountCircleOutlinedIcon fontSize="small" />
        </Button>
        <Button variant="text" minWidth={140}>
          <AccountCircleOutlinedIcon fontSize="small" />
        </Button>
      </div>
    </SWAPTheme>
  );
};

export const 尺寸 = () => {
  return (
    <SWAPTheme>
      <div style={{ display: "flex" }}>
        <div style={{ width: 300 }}>
          Small
          <div style={{ display: "flex" }}>
            <Button variant="primary" style={{ marginRight: 10 }} size="small">
              button
            </Button>
            <Button variant="secondary" size="small">
              button
            </Button>
          </div>
          <SWAPSpace size="m" />
          Medium
          <div style={{ display: "flex" }}>
            <Button variant="primary" style={{ marginRight: 10 }} size="medium">
              button
            </Button>
            <Button variant="secondary" size="medium">
              button
            </Button>
          </div>
          <SWAPSpace size="m" />
          Large
          <div style={{ display: "flex" }}>
            <Button variant="primary" style={{ marginRight: 10 }} size="large">
              button
            </Button>
            <Button variant="secondary" size="large">
              button
            </Button>
          </div>
        </div>
        <div style={{ width: 500 }}>
          Auto
          <Button variant="primary">我是一個按鈕</Button>
          <SWAPSpace size="m" />
          Fixed Width
          <Button variant="primary" width={240}>
            我是一個按鈕
          </Button>
          <SWAPSpace size="m" />
          Full Width
          <Button variant="primary" fullWidth>
            我是一個按鈕
          </Button>
        </div>
        <div style={{ paddingLeft: 10 }}>
          minWidth
          <br />
          60
          <Button variant="primary" minWidth={60}>
            我
          </Button>
          <SWAPSpace size="m" />
          72
          <Button variant="primary" minWidth={72}>
            我
          </Button>
          <SWAPSpace size="m" />
          84
          <Button variant="primary" minWidth={84}>
            我
          </Button>
          <SWAPSpace size="m" />
        </div>
      </div>
    </SWAPTheme>
  );
};

export const 狀態 = () => {
  return (
    <SWAPTheme>
      Default & Hover & Pressed & Focus
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 850 }}
      >
        <Button variant="primary" minWidth={140}>
          D H P F
        </Button>
        <Button variant="secondary" minWidth={140}>
          D H P F
        </Button>
        <Button variant="tertiary" minWidth={140}>
          D H P F
        </Button>
        <Button variant="text" minWidth={140}>
          D H P F
        </Button>
        <Button variant="black" minWidth={140}>
          D H P F
        </Button>
        <Button variant="danger" minWidth={140}>
          D H P F
        </Button>
      </div>
      <SWAPSpace size="m" />
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 850 }}
      >
        <Button variant="primary" minWidth={140} disabled>
          Disabled
        </Button>
        <Button variant="secondary" minWidth={140} disabled>
          Disabled
        </Button>
        <Button variant="tertiary" minWidth={140} disabled>
          Disabled
        </Button>
        <Button variant="text" minWidth={140} disabled>
          Disabled
        </Button>
        <Button variant="black" minWidth={140} disabled>
          Disabled
        </Button>
        <Button variant="danger" minWidth={140} disabled>
          Disabled
        </Button>
      </div>
      <SWAPSpace size="m" />
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 850 }}
      >
        <Button variant="primary" minWidth={140} loading>
          Loading
        </Button>
        <Button variant="secondary" minWidth={140} loading>
          Loading
        </Button>
        <Button variant="tertiary" minWidth={140} loading>
          Loading
        </Button>
        <Button variant="text" minWidth={140} loading>
          Loading
        </Button>
        <Button variant="black" minWidth={140} loading>
          Loading
        </Button>
        <Button variant="danger" minWidth={140} loading>
          Loading
        </Button>
      </div>
      <SWAPSpace size="m" />
    </SWAPTheme>
  );
};
