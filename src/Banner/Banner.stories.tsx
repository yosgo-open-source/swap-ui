import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { BannerProps } from "./Banner.types";
import Banner from "../Banner/Banner";

export default {
  title: "Banner",
  component: Banner,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<BannerProps> = (args) => {
  return (
    <SWAPTheme>
      <Banner {...args} style={{ marginBottom: 30 }} />
      <div
        style={{
          width: 1100,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          1 Line
          <Banner width={400} variant="normal" style={{ marginBottom: 30 }}>
            這是一個一般的通知訊息。
          </Banner>
          <Banner width={400} variant="info" style={{ marginBottom: 30 }}>
            這是一個帶有稍微重要資訊的通知訊息。
          </Banner>
          <Banner width={400} variant="warning" style={{ marginBottom: 30 }}>
            這是一個警告的訊息。
          </Banner>
          <Banner width={400} variant="success" style={{ marginBottom: 30 }}>
            這是一個成功的訊息。
          </Banner>
          <Banner width={400} variant="error" style={{ marginBottom: 30 }}>
            這是一個錯誤的訊息。
          </Banner>
        </div>
        <div>
          2 Line
          <Banner width={400} variant="normal" style={{ marginBottom: 30 }}>
            This is a normal message.This is a normal message.This is a normal
            message.
          </Banner>
          <Banner width={400} variant="info" style={{ marginBottom: 30 }}>
            This is a normal message.This is a normal message.This is a normal
            message.This is a normal message.
          </Banner>
          <Banner width={400} variant="warning" style={{ marginBottom: 30 }}>
            This is a normal message.This is a normal message.This is a normal
            message.
          </Banner>
          <Banner width={400} variant="success" style={{ marginBottom: 30 }}>
            This is a normal message.This is a normal message.This is a normal
            message.
          </Banner>
          <Banner width={400} variant="error" style={{ marginBottom: 30 }}>
            This is a normal message.This is a normal message.This is a normal
            message.This is a normal message.
          </Banner>
        </div>
        <div>
          3 Line (Mobile)
          <Banner
            mobile
            width={240}
            variant="normal"
            style={{ marginBottom: 30 }}
          >
            This is a normal message.This is a normal message.This is a normal
            message.
          </Banner>
          <Banner
            mobile
            width={240}
            variant="info"
            style={{ marginBottom: 30 }}
          >
            This is a normal message.This is a normal message.This is a normal
            message.This is a normal message.
          </Banner>
          <Banner
            mobile
            width={240}
            variant="warning"
            style={{ marginBottom: 30 }}
          >
            This is a normal message.This is a normal message.This is a normal
            message.
          </Banner>
          <Banner
            mobile
            width={240}
            variant="success"
            style={{ marginBottom: 30 }}
          >
            This is a normal message.This is a normal message.This is a normal
            message.
          </Banner>
          <Banner
            mobile
            width={240}
            variant="error"
            style={{ marginBottom: 30 }}
          >
            This is a normal message.This is a normal message.This is a normal
            message.This is a normal message.
          </Banner>
        </div>
      </div>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = { children: "調整看看" };
