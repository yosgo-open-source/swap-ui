import React, { useEffect } from "react";
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

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import WarningIcon from "@material-ui/icons/Warning";

import { SWAPModalProps } from "./SWAPModal.types";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

const SWAPModal: React.FC<SWAPModalProps> = ({
  open,
  title,
  onClose,
  helpText,
  primaryButton,
  secondaryButton,
  children,
  successMessage,
  errorMessage,
  closeWindowOnSuccessMessage,
  reloadOnWindowClose,
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

  const modalCloseWindow = () => {
    onClose();
    if (reloadOnWindowClose) {
      window.location.reload();
    }
  };

  useEffect(() => {
    /**視窗中的相關內容變動時調整視窗大小 */
    handleModalSize();
    /**收到成功訊息後關閉視窗 */
    if (successMessage && closeWindowOnSuccessMessage) {
      setTimeout(() => {
        modalCloseWindow();
      }, 1000);
    }
  }, [successMessage, errorMessage, children]);

  return (
    <Modal open={open} onRendered={() => handleModalSize()}>
      <Fade in={open}>
        <SWAPModalWrap id="modal_wrap">
          <Paper className="modal_inner" id="modal_inner">
            <div className="modal_inner_header" id="modal_header">
              <Container maxWidth="lg">
                <SWAPSpace size="middle" />
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
                    <IconButton onClick={() => modalCloseWindow()}>
                      <CloseIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                </Grid>
                <SWAPSpace size="middle" />
              </Container>
              <Divider />
            </div>
            <div className="modal_inner_body" id="modal_body">
              <Container maxWidth="lg">
                <SWAPSpace size="middle" />
                <div>{children}</div>
                <SWAPSpace size="middle" />
              </Container>
            </div>
            <div className="modal_inner_bottom" id="modal_bottom">
              <Divider />
              <Container maxWidth="lg">
                <SWAPSpace size="middle" />
                {(successMessage && successMessage.length > 0) ||
                (errorMessage && errorMessage.length > 0) ? (
                  <Fade in>
                    <div>
                      <Grid
                        container
                        wrap="nowrap"
                        alignItems="center"
                        justify="flex-end"
                      >
                        <Grid item style={{ margin: "0 6px -6px 0" }}>
                          {successMessage ? (
                            <CheckCircleIcon color="primary" />
                          ) : (
                            <WarningIcon color="secondary" />
                          )}
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">
                            {successMessage ? successMessage : errorMessage}
                          </Typography>
                        </Grid>
                      </Grid>
                      <SWAPSpace size="small" />
                    </div>
                  </Fade>
                ) : null}
                <Grid
                  container
                  wrap="nowrap"
                  alignItems="center"
                  spacing={1}
                  justify="flex-end"
                >
                  <Grid item>
                    {secondaryButton && secondaryButton.title ? (
                      <Button
                        variant="outlined"
                        size="large"
                        onClick={() => secondaryButton.onClick()}
                        disabled={secondaryButton.disabled}
                      >
                        {secondaryButton.title}
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
                <SWAPSpace size="middle" />
              </Container>
            </div>
          </Paper>
        </SWAPModalWrap>
      </Fade>
    </Modal>
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
