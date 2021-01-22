import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { ContainerProps } from "../Container/Container.types";
import Container from "./Container";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import useBreakpoints from "../utils/useBreakpoints";
export default {
  title: "Container & Breakpoints",
  component: Container,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const Demo: Story<ContainerProps> = (args) => {
  const matches = useBreakpoints("md");
  return (
    <SWAPTheme>
      調整視窗大小！
      <Container
        {...args}
        style={{
          backgroundColor: matches ? "#1f3c8e" : "#00821E",
          height: 500,
        }}
      >
        {matches ? (
          <div style={{ fontSize: 50, color: "#ffffff" }}>
            {"breakpoints: >md"}
          </div>
        ) : (
          <div style={{ fontSize: 50, color: "#ffffff" }}>
            {"breakpoints: <md"}
          </div>
        )}
      </Container>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {
  maxWidth: "md",
};
