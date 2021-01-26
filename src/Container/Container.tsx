import MaterialContainer from "@material-ui/core/Container";
import React from "react";
import styled from "styled-components";
import { ContainerProps } from "./Container.types";
import { makeStyles } from "@material-ui/core";
import SWAPTheme from "../SWAPTheme/SWAPTheme";

const Container: React.FC<ContainerProps> = ({ children, style, maxWidth }) => {
  const useStyles = makeStyles({
    root: {
      maxWidth:
        maxWidth === "xxs"
          ? 398
          : maxWidth === "xs"
          ? 382
          : maxWidth === "sm"
          ? 576
          : maxWidth === "md"
          ? 720
          : maxWidth === "lg"
          ? 960
          : maxWidth === "xl"
          ? 1140
          : maxWidth === "xxl"
          ? 1320
          : null,
    },
  });
  const classes = useStyles();
  return (
    <SWAPTheme>
      <ContainerWrap>
        <MaterialContainer className={classes.root} style={style}>
          {children}
        </MaterialContainer>
      </ContainerWrap>
    </SWAPTheme>
  );
};

const ContainerWrap = styled.div``;

export default Container;
