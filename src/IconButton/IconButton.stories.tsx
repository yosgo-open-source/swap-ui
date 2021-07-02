import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { MyIconButtonProps } from "./IconButton.types";
import IconButton from "../IconButton/IconButton";

export default {
  title: "IconButton",
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<MyIconButtonProps> = (args) => {
  return (
    <SWAPTheme>
      <div
        style={{
          width: 100,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton {...args} style={{ marginRight: 12 }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8333 5.34169L14.6583 4.16669L9.99999 8.82502L5.34166 4.16669L4.16666 5.34169L8.82499 10L4.16666 14.6584L5.34166 15.8334L9.99999 11.175L14.6583 15.8334L15.8333 14.6584L11.175 10L15.8333 5.34169Z"
              fill="black"
            />
          </svg>
        </IconButton>
        <IconButton hoverColor="primary50" hoverIconColor="#002BA1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 20, height: 20 }}
          >
            <path
              d="M5 3C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3H5ZM5 5H19V19H5V5ZM7 7V9H17V7H7ZM7 11V13H17V11H7ZM7 15V17H14V15H7Z"
              fill="black"
            />
          </svg>
        </IconButton>
      </div>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = { hoverColor: "black400" };
