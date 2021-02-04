import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { LandingPageProps } from "../LandingPage/LandingPage.types";
import LandingPage from "./LandingPage";
import LandingPageMobile from "./LandingPageMobile";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { useBreakpoints } from "..";

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
  const matches = useBreakpoints("md");
  return (
    <SWAPTheme>
      {matches ? (
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
      ) : (
        <LandingPageMobile
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
      )}
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};

export const Hero = () => {
  const matches = useBreakpoints("md");

  return (
    <SWAPTheme>
      {matches ? <LandingPage hero /> : <LandingPageMobile hero />}
    </SWAPTheme>
  );
};
export const Logos = () => {
  const matches = useBreakpoints("md");

  return (
    <SWAPTheme>
      {matches ? <LandingPage logos /> : <LandingPageMobile logos />}
    </SWAPTheme>
  );
};
export const HightLight = () => {
  const matches = useBreakpoints("md");

  return (
    <SWAPTheme>
      {matches ? <LandingPage hightLight /> : <LandingPageMobile hightLight />}
    </SWAPTheme>
  );
};
export const PainPoints = () => {
  const matches = useBreakpoints("md");

  return (
    <SWAPTheme>
      {matches ? <LandingPage painPoints /> : <LandingPageMobile painPoints />}
    </SWAPTheme>
  );
};
export const HowItWorks = () => {
  const matches = useBreakpoints("md");

  return (
    <SWAPTheme>
      {matches ? <LandingPage howItWorks /> : <LandingPageMobile howItWorks />}
    </SWAPTheme>
  );
};
export const ValueProp = () => {
  const matches = useBreakpoints("md");

  return (
    <SWAPTheme>
      {matches ? <LandingPage valueProp /> : <LandingPageMobile valueProp />}
    </SWAPTheme>
  );
};
export const Comparison = () => {
  const matches = useBreakpoints("md");

  return (
    <SWAPTheme>
      {matches ? <LandingPage comparison /> : <LandingPageMobile comparison />}
    </SWAPTheme>
  );
};
export const UserBase = () => {
  const matches = useBreakpoints("md");

  return (
    <SWAPTheme>
      {matches ? <LandingPage userBase /> : <LandingPageMobile userBase />}
    </SWAPTheme>
  );
};
export const SocialProof = () => {
  const matches = useBreakpoints("md");

  return (
    <SWAPTheme>
      {matches ? (
        <LandingPage socialProof />
      ) : (
        <LandingPageMobile socialProof />
      )}
    </SWAPTheme>
  );
};
export const QA = () => {
  const matches = useBreakpoints("md");

  return (
    <SWAPTheme>
      {matches ? <LandingPage qA /> : <LandingPageMobile qA />}
    </SWAPTheme>
  );
};
export const Feature = () => {
  const matches = useBreakpoints("md");

  return (
    <SWAPTheme>
      {matches ? <LandingPage feature /> : <LandingPageMobile feature />}
    </SWAPTheme>
  );
};
export const Footer = () => {
  const matches = useBreakpoints("md");

  return (
    <SWAPTheme>
      {matches ? <LandingPage footer /> : <LandingPageMobile footer />}
    </SWAPTheme>
  );
};
