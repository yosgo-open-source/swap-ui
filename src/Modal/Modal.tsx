import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Grid,
  Paper,
  IconButton,
  Divider,
  Fade,
  Slide,
  makeStyles,
  Theme,
  Box,
  useTheme,
} from "@material-ui/core";
import MaterialModal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { ModalProps } from "./Modal.types";
import SWAPSpace from "../SWAPSpace/SWAPSpace";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

import useBreakpoints from "../utils/useBreakpoints";

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

const Modal: React.FC<ModalProps> = ({
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
  size,
  checkedIconColor,
  checked,
  label,
  footerColumn,
  footerRaw,
  width,
  displayBottom,
  style,
  headerStyle,
  bodyStyle,
  footerStyle,
  bodypadding,
}) => {
  const [sm, setSm] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const matches = useBreakpoints(480);
  const matchesExtraSmall = useBreakpoints(320);

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
    if (clientWidth < 480) {
      setSm(true);
    }
  }, [children]);

  //Styles
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      alignItems: displayBottom ? "flex-end" : null,
    },
    modal_inner: {
      borderBottomLeftRadius: displayBottom ? 0 : null,
      borderBottomRightRadius: displayBottom ? 0 : null,
      overflow: "hidden",
      position: "relative",
      width: width
        ? width
        : displayBottom
        ? document.documentElement.clientWidth
        : matchesExtraSmall
        ? size === "extraSmall"
          ? 320
          : size === "small"
          ? 480
          : size === "medium"
          ? 640
          : size === "large"
          ? 800
          : 800
        : document.documentElement.clientWidth,
      maxHeight: 800,
      zIndex: 2,
      "& .fWixIn": {
        height: 0,
      },
      padding: "0px 0px",
    },
    modal_inner_header: {
      padding: matches
        ? helpText
          ? "10.5px 24px"
          : "19.5px 24px"
        : helpText
        ? "21px 16px"
        : "8px 16px",
      height: matches ? (title ? (helpText ? 64 : 72) : 64) : 64,
      position: "relative",
      width: "100%",
      left: 0,
      top: 0,
      background: "white",
      zIndex: 1,
    },
    modal_inner_body: {
      padding: children
        ? bodypadding
          ? bodypadding
          : matches
          ? "24px 24px"
          : "16px 16px"
        : null,
      position: "relative",
      overflowY: "auto",
      zIndex: 1,
    },
    modal_inner_bottom: {
      padding: matches ? "16px 24px" : "12px 16px",
      position: "absolute",
      width: "100%",
      left: 0,
      bottom: 0,
      background: "white",
      zIndex: 1,
    },
  }));
  const classes = useStyles();
  const theme = useTheme();
  return (
    <MaterialModal
      open={open}
      onRendered={() => handleModalSize()}
      onClose={onClose}
    >
      <Fade in={open} timeout={{ enter: 300, exit: 300 }}>
        <ModalWrap id={`modal_wrap_${title}`} className={classes.root}>
          {/* Modal滑進來效果 */}
          <ModalOpenEffect in={open} sm={sm}>
            <Paper
              className={classes.modal_inner}
              style={style}
              id={`modal_inner_${title}`}
            >
              {/**Head */}
              <div
                className={classes.modal_inner_header}
                style={headerStyle}
                id={`modal_header_${title}`}
              >
                <Box>
                  <Grid
                    container
                    wrap="nowrap"
                    alignItems="center"
                    spacing={1}
                    justify="space-between"
                  >
                    <Grid item>
                      <Box display="flex" alignItems="center">
                        {checked ? (
                          <CheckCircleIcon
                            style={{
                              width: 20,
                              height: 20,
                              marginRight: 10,
                              color:
                                checkedIconColor === "primary50"
                                  ? theme.primary.primary50
                                  : checkedIconColor === "primary100"
                                  ? theme.primary.primary100
                                  : checkedIconColor === "primary200"
                                  ? theme.primary.primary200
                                  : checkedIconColor === "primary300"
                                  ? theme.primary.primary300
                                  : checkedIconColor === "primary400"
                                  ? theme.primary.primary400
                                  : checkedIconColor === "primary500"
                                  ? theme.primary.primary500
                                  : checkedIconColor === "primary600"
                                  ? theme.primary.primary600
                                  : checkedIconColor === "primary700"
                                  ? theme.primary.primary700
                                  : checkedIconColor === "primary800"
                                  ? theme.primary.primary800
                                  : checkedIconColor === "primary900"
                                  ? theme.primary.primary900
                                  : checkedIconColor === "primaryA11y"
                                  ? theme.primary.primaryA11y
                                  : checkedIconColor === "secondary50"
                                  ? theme.secondary.secondary50
                                  : checkedIconColor === "secondary100"
                                  ? theme.secondary.secondary100
                                  : checkedIconColor === "secondary200"
                                  ? theme.secondary.secondary200
                                  : checkedIconColor === "secondary300"
                                  ? theme.secondary.secondary300
                                  : checkedIconColor === "secondary400"
                                  ? theme.secondary.secondary400
                                  : checkedIconColor === "secondary500"
                                  ? theme.secondary.secondary500
                                  : checkedIconColor === "secondary600"
                                  ? theme.secondary.secondary600
                                  : checkedIconColor === "secondary700"
                                  ? theme.secondary.secondary700
                                  : checkedIconColor === "secondary800"
                                  ? theme.secondary.secondary800
                                  : checkedIconColor === "secondary900"
                                  ? theme.secondary.secondary900
                                  : checkedIconColor === "secondaryA11y"
                                  ? theme.secondary.secondaryA11y
                                  : checkedIconColor === "danger50"
                                  ? theme.danger.danger50
                                  : checkedIconColor === "danger100"
                                  ? theme.danger.danger100
                                  : checkedIconColor === "danger200"
                                  ? theme.danger.danger200
                                  : checkedIconColor === "danger300"
                                  ? theme.danger.danger300
                                  : checkedIconColor === "danger400"
                                  ? theme.danger.danger400
                                  : checkedIconColor === "danger500"
                                  ? theme.danger.danger500
                                  : checkedIconColor === "danger600"
                                  ? theme.danger.danger600
                                  : checkedIconColor === "danger700"
                                  ? theme.danger.danger700
                                  : checkedIconColor === "danger800"
                                  ? theme.danger.danger800
                                  : checkedIconColor === "danger900"
                                  ? theme.danger.danger900
                                  : checkedIconColor === "dangerA11y"
                                  ? theme.danger.dangerA11y
                                  : checkedIconColor === "success50"
                                  ? theme.success.success50
                                  : checkedIconColor === "success100"
                                  ? theme.success.success100
                                  : checkedIconColor === "success200"
                                  ? theme.success.success200
                                  : checkedIconColor === "success300"
                                  ? theme.success.success300
                                  : checkedIconColor === "success400"
                                  ? theme.success.success400
                                  : checkedIconColor === "success500"
                                  ? theme.success.success500
                                  : checkedIconColor === "success600"
                                  ? theme.success.success600
                                  : checkedIconColor === "success700"
                                  ? theme.success.success700
                                  : checkedIconColor === "success800"
                                  ? theme.success.success800
                                  : checkedIconColor === "success900"
                                  ? theme.success.success900
                                  : checkedIconColor === "successA11y"
                                  ? theme.success.successA11y
                                  : checkedIconColor === "white"
                                  ? theme.black.white
                                  : checkedIconColor === "black100"
                                  ? theme.black.black100
                                  : checkedIconColor === "black200"
                                  ? theme.black.black200
                                  : checkedIconColor === "black300"
                                  ? theme.black.black300
                                  : checkedIconColor === "black400"
                                  ? theme.black.black400
                                  : checkedIconColor === "black500"
                                  ? theme.black.black500
                                  : checkedIconColor === "black600"
                                  ? theme.black.black600
                                  : checkedIconColor === "black700"
                                  ? theme.black.black700
                                  : checkedIconColor === "black800"
                                  ? theme.black.black800
                                  : checkedIconColor === "black900"
                                  ? theme.black.black900
                                  : checkedIconColor === "black1000"
                                  ? theme.black.black1000
                                  : null,
                            }}
                          />
                        ) : null}
                        <Typography variant="h6">{title}</Typography>
                      </Box>
                      <SWAPSpace size="xxs" />
                      {helpText ? (
                        <Typography variant="body2" color="black800">
                          {helpText}
                        </Typography>
                      ) : null}
                    </Grid>
                    <Grid item>
                      <IconButton
                        onClick={() => modalCloseWindow()}
                        style={{ marginLeft: 16 }}
                      >
                        <CloseIcon
                          fontSize="small"
                          style={{ color: theme.black.black1000 }}
                        />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              </div>
              {children ? <Divider /> : null}
              {/**Body */}
              {/**原始視窗的內容 */}
              {children ? (
                <div
                  id={`modal_body_${title}`}
                  className={classes.modal_inner_body}
                  style={bodyStyle}
                >
                  {children}
                </div>
              ) : null}
              {primaryButton ? (
                <>
                  <Divider />
                  {/**Footer */}
                  <div
                    className={classes.modal_inner_bottom}
                    style={footerStyle}
                    id={`modal_bottom_${title}`}
                  >
                    <Box>
                      <Fade in timeout={{ enter: 300, exit: 300 }}>
                        {/* 一般情況按鈕 */}
                        {footerRaw ? (
                          //  Footer Raw
                          <Box display="flex" justifyContent="space-between">
                            <Box width="50%">
                              {secondaryButton &&
                              secondaryButton.title &&
                              secondaryButton.title.length > 0 ? (
                                <Button
                                  fullWidth
                                  variant="secondary"
                                  size="small"
                                  onClick={() => secondaryButton.onClick()}
                                  disabled={secondaryButton.disabled}
                                >
                                  {secondaryButton.title}
                                </Button>
                              ) : null}
                            </Box>
                            <Box width="8px"></Box>
                            <Box width="50%">
                              <Button
                                fullWidth
                                variant="primary"
                                size="small"
                                onClick={() => primaryButton.onClick()}
                                disabled={primaryButton.disabled}
                              >
                                {primaryButton.title}
                              </Button>
                            </Box>
                          </Box>
                        ) : footerColumn ? (
                          //  Footer Column
                          <Box width="100%">
                            {secondaryButton &&
                            secondaryButton.title &&
                            secondaryButton.title.length > 0 ? (
                              <Button
                                fullWidth
                                variant="secondary"
                                size="small"
                                onClick={() => secondaryButton.onClick()}
                                disabled={secondaryButton.disabled}
                                style={{ marginBottom: 8 }}
                              >
                                {secondaryButton.title}
                              </Button>
                            ) : null}
                            <Button
                              fullWidth
                              variant="primary"
                              size="small"
                              onClick={() => primaryButton.onClick()}
                              disabled={primaryButton.disabled}
                            >
                              {primaryButton.title}
                            </Button>
                          </Box>
                        ) : matches ? (
                          //  Footer Normal
                          <Grid
                            container
                            wrap="nowrap"
                            alignItems="center"
                            justify="space-between"
                          >
                            <Grid item>
                              <Typography
                                variant="h6"
                                style={{ paddingRight: 8 }}
                              >
                                {label}
                              </Typography>
                            </Grid>

                            <Grid item>
                              <Box display="flex">
                                {secondaryButton &&
                                secondaryButton.title &&
                                secondaryButton.title.length > 0 ? (
                                  <Button
                                    style={{ marginRight: 8 }}
                                    variant="secondary"
                                    size="small"
                                    onClick={() => secondaryButton.onClick()}
                                    disabled={secondaryButton.disabled}
                                  >
                                    {secondaryButton.title}
                                  </Button>
                                ) : null}
                                <Button
                                  variant="primary"
                                  size="small"
                                  onClick={() => primaryButton.onClick()}
                                  disabled={primaryButton.disabled}
                                >
                                  {primaryButton.title}
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                        ) : (
                          <>
                            {label ? (
                              <Box
                                display="flex"
                                justifyContent="center"
                                paddingBottom="12px"
                              >
                                <Typography variant="title">{label}</Typography>
                              </Box>
                            ) : null}

                            <Box display="flex" justifyContent="space-between">
                              <Box>
                                {secondaryButton &&
                                secondaryButton.title &&
                                secondaryButton.title.length > 0 ? (
                                  <Button
                                    style={{ marginRight: 8, marginBottom: 8 }}
                                    variant="secondary"
                                    size="small"
                                    onClick={() => secondaryButton.onClick()}
                                    disabled={secondaryButton.disabled}
                                  >
                                    <div style={{ whiteSpace: "nowrap" }}>
                                      {secondaryButton.title}
                                    </div>
                                  </Button>
                                ) : null}
                              </Box>
                              <Box width="100%">
                                <Button
                                  fullWidth={!matches}
                                  variant="primary"
                                  size="small"
                                  onClick={() => primaryButton.onClick()}
                                  disabled={primaryButton.disabled}
                                >
                                  {primaryButton.title}
                                </Button>
                              </Box>
                            </Box>
                          </>
                        )}
                      </Fade>
                      <SWAPSpace size="m" />
                    </Box>
                  </div>
                </>
              ) : null}
            </Paper>
          </ModalOpenEffect>
        </ModalWrap>
      </Fade>
    </MaterialModal>
  );
};

const ModalWrap = styled.div`
  outline: 0px;
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export default Modal;
