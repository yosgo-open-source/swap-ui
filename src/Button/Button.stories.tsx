import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { MyButtonProps } from "../Button/Button.types";
import Button from "./Button";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

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

const Demo: Story<MyButtonProps> = (args) => {
  return (
    <SWAPTheme>
      <Button {...args} />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {
  children: "I'm Button.",
};
認識.parameters = {
  docs: {
    source: {
      code: `<Button>
  I'm Button.
</Button>`,
    },
  },
};
export const 類型 = () => {
  return (
    <SWAPTheme>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: 950,
          fontWeight: 700,
        }}
      >
        <div>類型</div>
        <div>Primary</div>
        <div>Secondary</div>
        <div>Tertiary</div>
        <div>Text</div>
        <div>Danger</div>
      </div>
      <SWAPSpace size="m" />
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 950 }}
      >
        <div style={{ width: 140, textAlign: "center", fontWeight: 700 }}>
          Text Only
        </div>
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
        <Button variant="danger" minWidth={140}>
          button
        </Button>
      </div>
      <SWAPSpace size="m" />
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 950 }}
      >
        <div style={{ width: 140, textAlign: "center", fontWeight: 700 }}>
          Text + Right Icon
        </div>
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
        <Button
          variant="danger"
          endIcon={<AccountCircleOutlinedIcon />}
          minWidth={140}
        >
          button
        </Button>
      </div>
      <SWAPSpace size="m" />
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 950 }}
      >
        <div style={{ width: 140, textAlign: "center", fontWeight: 700 }}>
          Left Icon + Text{" "}
        </div>
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
        <Button
          variant="danger"
          startIcon={<AccountCircleOutlinedIcon />}
          minWidth={140}
        >
          button
        </Button>
      </div>
      <SWAPSpace size="m" />
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 950 }}
      >
        <div style={{ width: 140, textAlign: "center", fontWeight: 700 }}>
          {" "}
          Icon Only
        </div>
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
        <Button variant="danger" minWidth={140}>
          <AccountCircleOutlinedIcon fontSize="small" />
        </Button>
      </div>
    </SWAPTheme>
  );
};

export const 狀態 = () => {
  return (
    <SWAPTheme>
      <div
        style={{
          margin: 12,
          fontWeight: 700,
          fontSize: 18,
          display: "flex",
          justifyContent: "space-around",
          width: 500,
        }}
      >
        <div>D：Default</div>
        <div> H：Hover</div>
        <div> P：Pressed</div>
        <div> F：Focus</div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 950 }}
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
        style={{ display: "flex", justifyContent: "space-around", width: 950 }}
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
        style={{ display: "flex", justifyContent: "space-around", width: 950 }}
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
          <br />
          <Button variant="primary">我是一個按鈕</Button>
          <SWAPSpace size="m" />
          Fixed Width
          <br />
          <Button variant="primary" width={240}>
            我是一個按鈕
          </Button>
          <SWAPSpace size="m" />
          Full Width
          <br />
          <Button variant="primary" fullWidth>
            我是一個按鈕
          </Button>
        </div>
        <div style={{ paddingLeft: 10 }}>
          minWidth
          <br />
          60 px
          <br />
          <Button variant="primary" minWidth={60}>
            我
          </Button>
          <SWAPSpace size="m" />
          72 px
          <br />
          <Button variant="primary" minWidth={72}>
            我
          </Button>
          <SWAPSpace size="m" />
          84 px
          <br />
          <Button variant="primary" minWidth={84}>
            我
          </Button>
          <SWAPSpace size="m" />
        </div>
      </div>
    </SWAPTheme>
  );
};
