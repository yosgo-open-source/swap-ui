import MaterialContainer from "@material-ui/core/Container";
import React from "react";
import { ContainerProps } from "./Container.types";
import { makeStyles } from "@material-ui/core";
import { useBreakpoints } from "..";

interface styleProps {
  maxWidth: any;
  padding: any;
  XXL: any;
  XL: any;
  LG: any;
  MD: any;
  SM: any;
  XS: any;
  XXS: any;
}
const useStyles = makeStyles({
  root: {
    maxWidth: ({ maxWidth, XXL, XL, LG }: styleProps) =>
      maxWidth
        ? maxWidth === "lg"
          ? 960
          : maxWidth === "xl"
          ? 1140
          : maxWidth === "xxl"
          ? 1320
          : maxWidth
        : XXL
        ? 1320
        : XL
        ? 1140
        : LG
        ? 960
        : null,
    padding: ({ padding, XXL, XL, LG, MD, SM, XS, XXS }: styleProps) =>
      padding
        ? padding === "xxs"
          ? "0px 8px"
          : padding === "xs"
          ? "0px 16px"
          : padding === "sm"
          ? "0px 24px"
          : padding === "md"
          ? "0px 24px"
          : padding
        : XXL
        ? "0px 0px"
        : XL
        ? "0px 0px"
        : LG
        ? "0px 0px"
        : MD
        ? "0px 24px"
        : SM
        ? "0px 24px"
        : XS
        ? "0px 16px"
        : XXS
        ? "0px 8px"
        : null,
  },
});

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  maxWidth,
  padding,
}) => {
  const XXS = useBreakpoints("xxs");
  const XS = useBreakpoints("xs");
  const SM = useBreakpoints("sm");
  const MD = useBreakpoints("md");
  const LG = useBreakpoints("lg");
  const XL = useBreakpoints("xl");
  const XXL = useBreakpoints("xxl");

  const classes = useStyles({
    maxWidth,
    padding,
    XXL,
    XL,
    LG,
    MD,
    SM,
    XS,
    XXS,
  });
  return (
    <MaterialContainer className={classes.root} style={style}>
      {children}
    </MaterialContainer>
  );
};

export default Container;
