import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { ChipProps } from "./Chip.types";
import Chip from "../Chip/Chip";

export default {
  title: "Chip",
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<ChipProps> = (args) => {
  return (
    <SWAPTheme>
      <Chip {...args} />
      <div
        style={{
          marginTop: 50,
          display: "flex",
          width: 500,
          justifyContent: "space-around",
        }}
      >
        <div>
          <Chip
            label="Label"
            outlined
            variant="neutral"
            style={{ marginBottom: 20 }}
          />
          <Chip label="Label" contained variant="neutral" />
        </div>
        <div>
          <Chip
            label="Label"
            outlined
            variant="primary"
            style={{ marginBottom: 20 }}
          />
          <Chip label="Label" contained variant="primary" />
        </div>
        <div>
          <Chip
            label="Label"
            outlined
            variant="success"
            style={{ marginBottom: 20 }}
            icon={
              <div
                style={{
                  width: 16,
                  height: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1.16667L4 9.16667L0.333334 5.5L1.27333 4.56L4 7.28L11.06 0.226669L12 1.16667Z"
                    fill="#00821E"
                  />
                </svg>
              </div>
            }
          />
          <Chip
            label="Label"
            contained
            variant="success"
            icon={
              <div
                style={{
                  width: 16,
                  height: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1.16667L4 9.16667L0.333334 5.5L1.27333 4.56L4 7.28L11.06 0.226669L12 1.16667Z"
                    fill="#00821E"
                  />
                </svg>
              </div>
            }
          />
        </div>
        <div>
          <Chip
            label="Label"
            outlined
            variant="danger"
            style={{ marginBottom: 20 }}
          />
          <Chip label="Label" contained variant="danger" />
        </div>
      </div>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = { label: "調整看看" };
