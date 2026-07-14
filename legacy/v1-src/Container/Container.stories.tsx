import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { ContainerProps } from "../Container/Container.types";
import Container from "./Container";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import useBreakpoints from "../utils/useBreakpoints";
import { Box } from "@material-ui/core";
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
      <Box style={{ backgroundColor: "pink", width: "100%" }}>
        <Container
          {...args}
          style={{
            backgroundColor: matches ? "yellow" : "#00821E",
            height: 500,
          }}
        >
          {matches ? (
            <div
              style={{
                fontSize: 50,
                color: "#000000",
                border: "5px solid blue",
              }}
            >
              {"breakpoints: 大於 md"}
            </div>
          ) : (
            <div
              style={{
                fontSize: 50,
                color: "#000000",
                border: "5px solid blue",
              }}
            >
              {"breakpoints: 小於 md"}
            </div>
          )}
        </Container>
      </Box>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = { maxWidth: "", padding: "" };
