import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { LandingPageProps } from "../LandingPage/LandingPage.types";
import LandingPage from "./LandingPage";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { AppBar, Button, Container, Typography } from "..";
import { Box } from "@material-ui/core";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

export default {
  title: "LandingPage",
  component: LandingPage,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const Demo: Story<LandingPageProps> = (args) => {
  return (
    <SWAPTheme>
      <LandingPage
        hero
        logos
        hightLight
        painPoints
        howItWorks
        valueProp
        comparison
        userBase
        socialProof
        qA
        feature
        footer
      />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};

export const Hero = () => {
  return (
    <SWAPTheme>
      <LandingPage hero />
    </SWAPTheme>
  );
};
export const Logos = () => {
  return (
    <SWAPTheme>
      <LandingPage logos />
    </SWAPTheme>
  );
};
export const HightLight = () => {
  return (
    <SWAPTheme>
      <LandingPage hightLight />
    </SWAPTheme>
  );
};
export const PainPoints = () => {
  return (
    <SWAPTheme>
      <LandingPage painPoints />
    </SWAPTheme>
  );
};
export const HowItWorks = () => {
  return (
    <SWAPTheme>
      <LandingPage howItWorks />
    </SWAPTheme>
  );
};
export const ValueProp = () => {
  return (
    <SWAPTheme>
      <LandingPage valueProp />
    </SWAPTheme>
  );
};
export const Comparison = () => {
  return (
    <SWAPTheme>
      <LandingPage comparison />
    </SWAPTheme>
  );
};
export const UserBase = () => {
  return (
    <SWAPTheme>
      <LandingPage userBase />
    </SWAPTheme>
  );
};
export const SocialProof = () => {
  return (
    <SWAPTheme>
      <LandingPage socialProof />
    </SWAPTheme>
  );
};
export const QA = () => {
  return (
    <SWAPTheme>
      <LandingPage qA />
    </SWAPTheme>
  );
};
export const Feature = () => {
  return (
    <SWAPTheme>
      <LandingPage feature />
    </SWAPTheme>
  );
};
export const Footer = () => {
  return (
    <SWAPTheme>
      <LandingPage footer />
    </SWAPTheme>
  );
};
