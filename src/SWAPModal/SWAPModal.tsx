import React from "react";
import styled from "styled-components";
import {
  Container,
  Modal,
  Grid,
  Typography,
  Paper,
  IconButton,
  Divider,
  Button,
  Fade,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

import { SWAPModalProps } from "./SWAPModal.types";
import Space from "../Space/Space";
import SWAPTheme from "../SWAPTheme/SWAPTheme";

const SWAPModal: React.FC<SWAPModalProps> = ({
  open,
  title,
  onClose,
  helpText,
  primaryButton,
  secondaryButton,
  children,
}) => {
  const handleModalSize = () => {
    const clientHeight = `${document.documentElement.clientHeight}px`;
    const wrap = document.getElementById("modal_wrap");
    const inner = document.getElementById("modal_inner");
    const header = document.getElementById("modal_header");
    const body = document.getElementById("modal_body");
    const bottom = document.getElementById("modal_bottom");
    if (clientHeight && wrap && inner && header && body && bottom) {
      /**
       * 0. 更新 Modal 外層高度
       * 1. 更新 Body 高度
       * 2. 更新 Modal 上下間距
       * */
      const bodyMaxHeight = `calc(${clientHeight} - ${
        header.offsetHeight + bottom.offsetHeight + 12
      }px)`;
      const innerPadding = `${header.offsetHeight}px 0 ${bottom.offsetHeight}px 0`;
      wrap.setAttribute("style", `height: ${clientHeight};`);
      inner.setAttribute("style", `padding: ${innerPadding};`);
      body.setAttribute("style", `max-height: ${bodyMaxHeight};`);
    } else {
      console.log("Error");
    }
  };
  return (
    <SWAPTheme>
      <Modal open={open} onRendered={() => handleModalSize()}>
        <Fade in={open}>
          <SWAPModalWrap id="modal_wrap">
            <Paper className="modal_inner" id="modal_inner">
              <div className="modal_inner_header" id="modal_header">
                <Container maxWidth="lg">
                  <Space size="medium" />
                  <Grid
                    container
                    wrap="nowrap"
                    alignItems="center"
                    spacing={1}
                    justify="space-between"
                  >
                    <Grid item>
                      <Typography variant="h5">{title}</Typography>
                      {helpText ? (
                        <Typography variant="body2" color="textSecondary">
                          {helpText}
                        </Typography>
                      ) : null}
                    </Grid>
                    <Grid item>
                      <IconButton onClick={() => onClose()}>
                        <CloseIcon fontSize="large" />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Space size="medium" />
                </Container>
                <Divider />
              </div>
              <div className="modal_inner_body" id="modal_body">
                <Container maxWidth="lg">
                  <Space size="medium" />
                  <div>{children}</div>
                  <Space size="medium" />
                </Container>
              </div>
              <div className="modal_inner_bottom" id="modal_bottom">
                <Divider />
                <Container maxWidth="lg">
                  <Space size="medium" />
                  <Grid
                    container
                    wrap="nowrap"
                    alignItems="center"
                    spacing={1}
                    justify="flex-end"
                  >
                    <Grid item>
                      {secondaryButton.title ? (
                        <Button
                          variant="outlined"
                          size="large"
                          onClick={() => secondaryButton.onClick()}
                          disabled={secondaryButton.disabled}
                        >
                          返回
                        </Button>
                      ) : null}
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        onClick={() => primaryButton.onClick()}
                        disabled={primaryButton.disabled}
                      >
                        {primaryButton.title}
                      </Button>
                    </Grid>
                  </Grid>
                  <Space size="medium" />
                </Container>
              </div>
            </Paper>
          </SWAPModalWrap>
        </Fade>
      </Modal>
    </SWAPTheme>
  );
};

const SWAPModalWrap = styled.div`
  outline: 0px;
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  .modal_inner {
    overflow: hidden;
    position: relative;
    width: 48vw;
    z-index: 2;
    .modal_inner_header {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      background: white;
      z-index: 1;
    }
    .modal_inner_body {
      position: relative;
      overflow-y: auto;
      z-index: 1;
    }
    .modal_inner_bottom {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      background: white;
      z-index: 1;
    }
  }
  @media screen and (max-width: 960px) {
    align-items: flex-end;
    .modal_inner {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      width: 100vw;
    }
  }
`;

export default SWAPModal;
