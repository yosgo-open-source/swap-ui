import React, { useEffect, useState } from "react";
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
  Slide,
  Breadcrumbs,
} from "@material-ui/core";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import WarningIcon from "@material-ui/icons/Warning";

import { SWAPModalProps } from "./SWAPModal.types";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

const ModalOpenEffect = (props: {
  sm: boolean;
  in: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      {props.sm ? (
        <Slide
          in={props.in}
          direction="up"
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 300, exit: 300 }}
        >
          <div>{props.children}</div>
        </Slide>
      ) : (
        <Fade in={props.in} timeout={{ enter: 300, exit: 300 }}>
          <div>{props.children}</div>
        </Fade>
      )}
    </>
  );
};

const SWAPModal: React.FC<SWAPModalProps> = ({
  open,
  title,
  onClose,
  helpText,
  primaryButton,
  secondaryButton,
  children,
  steps,
  successMessage,
  errorMessage,
  closeWindowOnSuccessMessage,
  reloadOnWindowClose,
}) => {
  const [sm, setSm] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const handleModalSize = () => {
    const clientHeight = `${document.documentElement.clientHeight}px`;
    const wrap = document.getElementById(`modal_wrap_${title}`);
    const inner = document.getElementById(`modal_inner_${title}`);
    const header = document.getElementById(`modal_header_${title}`);
    const body = document.getElementById(`modal_body_${title}`);
    const bottom = document.getElementById(`modal_bottom_${title}`);
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
    }
  };

  const modalCloseWindow = () => {
    onClose();
    if (reloadOnWindowClose) {
      window.location.reload();
    }
  };

  const handleStepButton = (type: "next" | "prev") => {
    if (type === "next") {
      let value = stepIndex + 1 > steps.length - 1 ? 0 : stepIndex + 1;
      setStepIndex(value);
    } else if (type === "prev") {
      let value = stepIndex - 1 < 0 ? 0 : stepIndex - 1;
      setStepIndex(value);
    } else {
      setStepIndex(stepIndex);
    }
  };

  useEffect(() => {
    /**視窗中的相關內容變動時調整視窗大小 */
    handleModalSize();
    /**收到成功訊息後關閉視窗 */
    if (successMessage && closeWindowOnSuccessMessage) {
      setTimeout(() => {
        modalCloseWindow();
      }, 1500);
    }
    /**一開始偵測視窗大小，決定 modal 效果 */
    const clientWidth = document.documentElement.clientWidth;
    if (clientWidth < 960) {
      setSm(true);
    }
  }, [successMessage, errorMessage, children]);

  return (
    <Modal
      open={open}
      onRendered={() => handleModalSize()}
      onClose={() => onClose()}
    >
      <Fade in={open} timeout={{ enter: 300, exit: 300 }}>
        <SWAPModalWrap id={`modal_wrap_${title}`}>
          <ModalOpenEffect in={open} sm={sm}>
            <Paper className="modal_inner" id={`modal_inner_${title}`}>
              {/**視窗標題區域 */}
              <div className="modal_inner_header" id={`modal_header_${title}`}>
                <Container maxWidth="lg">
                  <SWAPSpace size="m" />
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
                  <SWAPSpace size="m" />
                </Container>
                <Divider />
              </div>
              {/**視窗內容區域 */}
              <div className="modal_inner_body" id={`modal_body_${title}`}>
                <Container maxWidth="lg">
                  <SWAPSpace size="m" />
                  {/**步驟視窗的內容 */}
                  {steps && steps.length > 0 ? (
                    <div>
                      <Breadcrumbs separator="›" style={{ marginLeft: "-9px" }}>
                        {steps.map((s, i) => (
                          <Button
                            key={`step_breadcrumb_${i}`}
                            color={i === stepIndex ? "primary" : "default"}
                            onClick={() => setStepIndex(i)}
                            size={sm ? "small" : "medium"}
                          >
                            {i + 1}.{s.stepTitle}
                          </Button>
                        ))}
                      </Breadcrumbs>
                      <SWAPSpace size="m" />
                      <div>{steps[stepIndex].stepChildren}</div>
                    </div>
                  ) : null}
                  {/**原始視窗的內容 */}
                  {children ? <div>{children}</div> : null}
                  <SWAPSpace size="m" />
                </Container>
              </div>
              {/**視窗底端 */}
              <div className="modal_inner_bottom" id={`modal_bottom_${title}`}>
                <Divider />
                <Container maxWidth="lg">
                  <SWAPSpace size="m" />
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
                        <SWAPSpace size="s" />
                      </div>
                    </Fade>
                  ) : null}
                  {/**
                   * 顯示主要與次要按鈕
                   * 1. 當沒有 steps 屬性時顯示
                   * 2. 當有 step 屬性且為最後一步驟時顯示
                   * 其餘狀態顯示步驟的上下步驟按鈕
                   */}
                  {!steps ||
                  (steps &&
                    steps.length > 0 &&
                    stepIndex === steps.length - 1) ? (
                    <Fade in timeout={{ enter: 300, exit: 300 }}>
                      <Grid
                        container
                        wrap="nowrap"
                        alignItems="center"
                        spacing={sm ? 1 : 2}
                        justify="flex-end"
                      >
                        {/**
                         * 顯示上一步驟的按鈕
                         * 1. 有 steps 屬性
                         * 2. 為最後一步驟時，
                         * 3. steps 的長度要大於一
                         * */}
                        {steps &&
                        steps.length > 1 &&
                        stepIndex === steps.length - 1 ? (
                          <Button
                            variant="text"
                            size={sm ? "medium" : "large"}
                            onClick={() => handleStepButton("prev")}
                          >
                            {steps[stepIndex].prevStepText || "上一步"}
                          </Button>
                        ) : null}
                        <Grid item>
                          {secondaryButton &&
                          secondaryButton.title &&
                          secondaryButton.title.length > 0 ? (
                            <Button
                              variant="outlined"
                              size={sm ? "medium" : "large"}
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
                            size={sm ? "medium" : "large"}
                            color="primary"
                            onClick={() => primaryButton.onClick()}
                            disabled={primaryButton.disabled}
                          >
                            {primaryButton.title}
                          </Button>
                        </Grid>
                      </Grid>
                    </Fade>
                  ) : (
                    <Fade in timeout={{ enter: 300, exit: 300 }}>
                      <Grid
                        container
                        wrap="nowrap"
                        alignItems="center"
                        spacing={sm ? 1 : 2}
                        justify="flex-end"
                      >
                        <Grid item>
                          {stepIndex > 0 ? (
                            <Button
                              variant="text"
                              size={sm ? "medium" : "large"}
                              onClick={() => handleStepButton("prev")}
                            >
                              {steps[stepIndex].prevStepText || "上一步"}
                            </Button>
                          ) : null}
                        </Grid>
                        <Grid item>
                          <Button
                            variant="text"
                            size={sm ? "medium" : "large"}
                            onClick={() => handleStepButton("next")}
                          >
                            {steps[stepIndex].nextStepText || "下一步"}
                          </Button>
                        </Grid>
                      </Grid>
                    </Fade>
                  )}
                  <SWAPSpace size="m" />
                </Container>
              </div>
            </Paper>
          </ModalOpenEffect>
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
    border-radius: 9px;
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
