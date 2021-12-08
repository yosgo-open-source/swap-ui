import React from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { BreadcrumbProps } from "./Breadcrumb.types";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "../BreadcrumbItem/BreadcrumbItem";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<BreadcrumbProps> = (args) => {
  return (
    <SWAPTheme>
      <Breadcrumb maxItems={4} {...args}>
        <BreadcrumbItem href="https://google.com">頁面1</BreadcrumbItem>
        <BreadcrumbItem href="https://google.com">頁面2</BreadcrumbItem>
        <BreadcrumbItem href="https://google.com">頁面3</BreadcrumbItem>
        <BreadcrumbItem href="https://google.com">頁面4</BreadcrumbItem>
        <BreadcrumbItem href="https://google.com">頁面5</BreadcrumbItem>
        <BreadcrumbItem href="https://google.com">頁面6</BreadcrumbItem>
        <BreadcrumbItem last>當前頁面</BreadcrumbItem>
      </Breadcrumb>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
