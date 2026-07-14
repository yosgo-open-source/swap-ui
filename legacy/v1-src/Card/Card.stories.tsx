import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { CardProps } from "./Card.types";
import Card from "./Card";
import Typography from "../Typography/Typography";
import Chip from "../Chip/Chip";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

export default {
  title: "Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<CardProps> = (args) => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <SWAPTheme>
      <Card {...args} />
      <Typography variant="h4" style={{ margin: "24px 0 16px" }}>
        Example
      </Typography>
      <div style={{ display: "flex", gap: 40 }}>
        <Card
          width={360}
          loading={loading}
          children={
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" color="black800">
                  2020/12/07
                </Typography>
                <Chip variant="success" label="已付款" />
              </div>
              <SWAPSpace size={8} />
              <Typography>
                iOS App 案件，要交付完整設計和介面規格書，並確認素材都有輸出
              </Typography>
              <SWAPSpace size={12} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1" color="black800">
                  50 薪資所得
                </Typography>
                <Typography variant="subtitle">SP 56,000</Typography>
              </div>
            </>
          }
          buttons={[
            { title: "封存請款單", onClick: () => {} },
            {
              title: (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {icon("#4862CC")}
                  <span>瀏覽請款單</span>
                </div>
              ),
              onClick: () => {},
              variant: "text",
            },
          ]}
        />
        <Card
          width={328}
          loading={loading}
          children={
            <>
              <Typography>專家方案自動扣款</Typography>
              <SWAPSpace size={8} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1" color="black800">
                  2020/12/07
                </Typography>
                <Typography variant="subtitle">TWD 720</Typography>
              </div>
            </>
          }
          buttons={[
            {
              title: (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {icon("#4B4B4B")}
                  <span>發票</span>
                </div>
              ),
              onClick: () => {},
            },
            {
              title: (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {icon("#4B4B4B")}
                  <span>勞報單</span>
                </div>
              ),
              onClick: () => {},
            },
            {
              title: (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {icon("#4B4B4B")}
                  <span>請款單</span>
                </div>
              ),
              onClick: () => {},
            },
          ]}
        />
      </div>
    </SWAPTheme>
  );
};

const icon = (color: string) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.91667 2.5C3.99167 2.5 3.25 3.24167 3.25 4.16667V15.8333C3.25 16.7583 3.99167 17.5 4.91667 17.5H16.5833C17.5083 17.5 18.25 16.7583 18.25 15.8333V4.16667C18.25 3.24167 17.5083 2.5 16.5833 2.5H4.91667ZM4.91667 4.16667H16.5833V15.8333H4.91667V4.16667ZM6.58333 5.83333V7.5H14.9167V5.83333H6.58333ZM6.58333 9.16667V10.8333H14.9167V9.16667H6.58333ZM6.58333 12.5V14.1667H12.4167V12.5H6.58333Z"
      fill={color}
    />
  </svg>
);

export const 認識 = Demo.bind({});
認識.args = {
  loading: false,
  children: (
    <div
      style={{
        width: "100%",
        height: 140,
        backgroundColor: "#ececec",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#6f6f6f",
        fontSize: 14,
        fontWeight: 700,
      }}
    >
      請替換 Body 內容
    </div>
  ),
  buttons: [
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {icon("#4b4b4b")}
          <span>Button1</span>
        </div>
      ),
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {icon("#4b4b4b")}
          <span>Button2</span>
        </div>
      ),
    },
  ],
};
