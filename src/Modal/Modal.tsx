import React, { useEffect, useState } from "react";
import {
  Paper,
  IconButton,
  Divider,
  Slide,
  makeStyles,
  Theme,
  Box,
  Backdrop,
} from "@material-ui/core";
import MaterialModal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WarningIcon from "@material-ui/icons/Warning";

import { ModalProps } from "./Modal.types";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import { useBreakpoints } from "..";
import { animated, useSpring } from "react-spring";

interface ModalTransitionEffectProps {
  children?: React.ReactElement;
  in: boolean;
  slide?: boolean;
  onEnter?: () => {};
  onExited?: () => {};
  style?: React.CSSProperties;
}
const ModalTransitionEffect = React.forwardRef<
  HTMLDivElement,
  ModalTransitionEffectProps
>(function ModalTransitionEffect(props, ref) {
  const {
    in: open,
    slide,
    children,
    onEnter,
    onExited,
    style,
    ...other
  } = props;
  const defaultStyle = useSpring({
    config: { duration: 200 },
    from: { opacity: 0, transform: "translateY(50px)" },
    to: {
      opacity: open ? 1 : 0,
      transform: open ? "translateY(0px)" : "translateY(50px)",
    },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <>
      {slide ? (
        <Slide
          in={open}
          direction="up"
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 300, exit: 300 }}
        >
          {children}
        </Slide>
      ) : (
        <animated.div
          style={{
            ...style,
            ...defaultStyle,
          }}
          {...other}
        >
          {children}
        </animated.div>
      )}
    </>
  );
});

const Modal: React.FC<ModalProps> = React.forwardRef((props, ref) => {
  const {
    width,
    height,
    open,
    onClose,
    title,
    helpText,
    size,
    headpadding,
    headChildren,
    checked,
    failed,
    icon,
    checkIconColor,
    iconColor,
    children,
    label,
    buttonFullWidth,
    footerDisplayColumn,
    secondaryButton,
    primaryButton,
    mobile,
    fullWidth,
    bodyPadding,
    maxWidth,
    disCloseIcon,
    titleStyle,
    bodyStyle,
    onExit,
    bodyMaxHeight,
    multiline,
    disUnderLine,
    footer,
    isFreshchatOpen,
  } = props;
  const [clientHeight, setClientHeight] = useState(0);
  const [scorllbarWidth, setScorllbarWidth] = useState(0);

  useEffect(() => {
    if (mobile || fullWidth) {
      if ((helpText || multiline) && !label) {
        setClientHeight(window.innerHeight - 64 - 73 - 64);
      } else if (!helpText && label) {
        setClientHeight(window.innerHeight - 64 - 56 - 99);
      } else if ((helpText || multiline) && label) {
        setClientHeight(window.innerHeight - 64 - 73 - 99);
      } else {
        setClientHeight(window.innerHeight - 64 - 56 - 64);
      }
    }
  }, [fullWidth, mobile]);

  useEffect(() => {
    const scrollbar_width: number =
      window.innerWidth - document.body.clientWidth;
    setScorllbarWidth(scrollbar_width / 2);
  }, []);

  useEffect(() => {
    if (!isFreshchatOpen) {
      const elem: any = document.getElementById("fc_frame");
      if (elem) {
        elem.style["display"] = open ? "none" : "block";
      }
    }
  }, [open]);

  const match_XS = useBreakpoints("xs");
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      display: "flex",
      alignItems: fullWidth ? "flex-end" : "center",
      justifyContent: "center",
      border: "unset",
      borderRadius: 12,
      margin: fullWidth ? 0 : match_XS ? "0px 24px" : "0px 16px",
    },
    backdrop: {
      transition: "all 0.2s ease-in-out !important",
    },
    modal: {
      width: width
        ? width
        : size === "large"
        ? 800
        : size === "medium"
        ? 640
        : size === "small"
        ? 480
        : size === "extraSmall"
        ? 320
        : "100%",
      maxWidth: maxWidth,
      borderRadius: fullWidth ? "12px 12px 0px 0px" : 12,
      border: "unset",
      boxShadow: theme.boxShadow.l,
      display: "flex",
      flexDirection: "column",
      outline: 0,
    },
    head: {
      height: "100%",
      borderRadius: "12px 12px 0px 0px",
      padding: headpadding
        ? headpadding
        : mobile
        ? disCloseIcon && !helpText && !multiline
          ? "17px 16px"
          : "12px 16px"
        : disCloseIcon && !helpText && !multiline
        ? "19.5px 24px"
        : "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      pointerEvents: onExit ? "none" : "unset",
    },
    title: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      "& path": {
        width: 20,
        height: 20,
      },
      color:
        iconColor === "primary50"
          ? theme.primary.primary50
          : iconColor === "primary100"
          ? theme.primary.primary100
          : iconColor === "primary200"
          ? theme.primary.primary200
          : iconColor === "primary300"
          ? theme.primary.primary300
          : iconColor === "primary400"
          ? theme.primary.primary400
          : iconColor === "primary500"
          ? theme.primary.primary500
          : iconColor === "primary600"
          ? theme.primary.primary600
          : iconColor === "primary700"
          ? theme.primary.primary700
          : iconColor === "primary800"
          ? theme.primary.primary800
          : iconColor === "primary900"
          ? theme.primary.primary900
          : iconColor === "primaryA11y"
          ? theme.primary.primaryA11y
          : iconColor === "secondary50"
          ? theme.secondary.secondary50
          : iconColor === "secondary100"
          ? theme.secondary.secondary100
          : iconColor === "secondary200"
          ? theme.secondary.secondary200
          : iconColor === "secondary300"
          ? theme.secondary.secondary300
          : iconColor === "secondary400"
          ? theme.secondary.secondary400
          : iconColor === "secondary500"
          ? theme.secondary.secondary500
          : iconColor === "secondary600"
          ? theme.secondary.secondary600
          : iconColor === "secondary700"
          ? theme.secondary.secondary700
          : iconColor === "secondary800"
          ? theme.secondary.secondary800
          : iconColor === "secondary900"
          ? theme.secondary.secondary900
          : iconColor === "secondaryA11y"
          ? theme.secondary.secondaryA11y
          : iconColor === "danger50"
          ? theme.danger.danger50
          : iconColor === "danger100"
          ? theme.danger.danger100
          : iconColor === "danger200"
          ? theme.danger.danger200
          : iconColor === "danger300"
          ? theme.danger.danger300
          : iconColor === "danger400"
          ? theme.danger.danger400
          : iconColor === "danger500"
          ? theme.danger.danger500
          : iconColor === "danger600"
          ? theme.danger.danger600
          : iconColor === "danger700"
          ? theme.danger.danger700
          : iconColor === "danger800"
          ? theme.danger.danger800
          : iconColor === "danger900"
          ? theme.danger.danger900
          : iconColor === "dangerA11y"
          ? theme.danger.dangerA11y
          : iconColor === "success50"
          ? theme.success.success50
          : iconColor === "success100"
          ? theme.success.success100
          : iconColor === "success200"
          ? theme.success.success200
          : iconColor === "success300"
          ? theme.success.success300
          : iconColor === "success400"
          ? theme.success.success400
          : iconColor === "success500"
          ? theme.success.success500
          : iconColor === "success600"
          ? theme.success.success600
          : iconColor === "success700"
          ? theme.success.success700
          : iconColor === "success800"
          ? theme.success.success800
          : iconColor === "success900"
          ? theme.success.success900
          : iconColor === "successA11y"
          ? theme.success.successA11y
          : iconColor === "white"
          ? theme.black.white
          : iconColor === "black100"
          ? theme.black.black100
          : iconColor === "black200"
          ? theme.black.black200
          : iconColor === "black300"
          ? theme.black.black300
          : iconColor === "black400"
          ? theme.black.black400
          : iconColor === "black500"
          ? theme.black.black500
          : iconColor === "black600"
          ? theme.black.black600
          : iconColor === "black700"
          ? theme.black.black700
          : iconColor === "black800"
          ? theme.black.black800
          : iconColor === "black900"
          ? theme.black.black900
          : iconColor === "black1000"
          ? theme.black.black1000
          : checkIconColor === "primary50"
          ? theme.primary.primary50
          : checkIconColor === "primary100"
          ? theme.primary.primary100
          : checkIconColor === "primary200"
          ? theme.primary.primary200
          : checkIconColor === "primary300"
          ? theme.primary.primary300
          : checkIconColor === "primary400"
          ? theme.primary.primary400
          : checkIconColor === "primary500"
          ? theme.primary.primary500
          : checkIconColor === "primary600"
          ? theme.primary.primary600
          : checkIconColor === "primary700"
          ? theme.primary.primary700
          : checkIconColor === "primary800"
          ? theme.primary.primary800
          : checkIconColor === "primary900"
          ? theme.primary.primary900
          : checkIconColor === "primaryA11y"
          ? theme.primary.primaryA11y
          : checkIconColor === "secondary50"
          ? theme.secondary.secondary50
          : checkIconColor === "secondary100"
          ? theme.secondary.secondary100
          : checkIconColor === "secondary200"
          ? theme.secondary.secondary200
          : checkIconColor === "secondary300"
          ? theme.secondary.secondary300
          : checkIconColor === "secondary400"
          ? theme.secondary.secondary400
          : checkIconColor === "secondary500"
          ? theme.secondary.secondary500
          : checkIconColor === "secondary600"
          ? theme.secondary.secondary600
          : checkIconColor === "secondary700"
          ? theme.secondary.secondary700
          : checkIconColor === "secondary800"
          ? theme.secondary.secondary800
          : checkIconColor === "secondary900"
          ? theme.secondary.secondary900
          : checkIconColor === "secondaryA11y"
          ? theme.secondary.secondaryA11y
          : checkIconColor === "danger50"
          ? theme.danger.danger50
          : checkIconColor === "danger100"
          ? theme.danger.danger100
          : checkIconColor === "danger200"
          ? theme.danger.danger200
          : checkIconColor === "danger300"
          ? theme.danger.danger300
          : checkIconColor === "danger400"
          ? theme.danger.danger400
          : checkIconColor === "danger500"
          ? theme.danger.danger500
          : checkIconColor === "danger600"
          ? theme.danger.danger600
          : checkIconColor === "danger700"
          ? theme.danger.danger700
          : checkIconColor === "danger800"
          ? theme.danger.danger800
          : checkIconColor === "danger900"
          ? theme.danger.danger900
          : checkIconColor === "dangerA11y"
          ? theme.danger.dangerA11y
          : checkIconColor === "success50"
          ? theme.success.success50
          : checkIconColor === "success100"
          ? theme.success.success100
          : checkIconColor === "success200"
          ? theme.success.success200
          : checkIconColor === "success300"
          ? theme.success.success300
          : checkIconColor === "success400"
          ? theme.success.success400
          : checkIconColor === "success500"
          ? theme.success.success500
          : checkIconColor === "success600"
          ? theme.success.success600
          : checkIconColor === "success700"
          ? theme.success.success700
          : checkIconColor === "success800"
          ? theme.success.success800
          : checkIconColor === "success900"
          ? theme.success.success900
          : checkIconColor === "successA11y"
          ? theme.success.successA11y
          : checkIconColor === "white"
          ? theme.black.white
          : checkIconColor === "black100"
          ? theme.black.black100
          : checkIconColor === "black200"
          ? theme.black.black200
          : checkIconColor === "black300"
          ? theme.black.black300
          : checkIconColor === "black400"
          ? theme.black.black400
          : checkIconColor === "black500"
          ? theme.black.black500
          : checkIconColor === "black600"
          ? theme.black.black600
          : checkIconColor === "black700"
          ? theme.black.black700
          : checkIconColor === "black800"
          ? theme.black.black800
          : checkIconColor === "black900"
          ? theme.black.black900
          : checkIconColor === "black1000"
          ? theme.black.black1000
          : theme.black.black700,
      marginRight: 10,
    },
    closeIconButton: {
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: 8,
      "&:hover": {
        borderRadius: 8,
      },
      marginLeft: 16,
    },
    closeIconRippleRoot: {
      borderRadius: 8,
    },
    closeIcon: {
      color: theme.black.black1000,
      borderRadius: 8,
      width: 20,
      height: 20,
    },
    body: {
      transition: "all 0.2s ease-in-out",
      height: height ? height : "100%",
      padding: bodyPadding ? bodyPadding : mobile ? 16 : 24,
      position: "relative",
      pointerEvents: onExit ? "none" : "unset",
      maxHeight: bodyMaxHeight
        ? bodyMaxHeight
        : fullWidth
        ? clientHeight
        : "unset",
      overflowY: !onExit ? "scroll" : "hidden",
      "&::-webkit-scrollbar": {
        backgroundColor: "transparent",
        width: 5,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.black.black600,
        borderRadius: 100,
      },
      "&::-webkit-scrollbar-track-piece:start": {
        marginTop: 12,
      },
      "&::-webkit-scrollbar-track-piece:end": {
        marginBottom: 12,
      },
    },
    footer: {
      height: "100%",
      padding:
        label || secondaryButton || primaryButton
          ? mobile
            ? "12px 16px"
            : "16px 24px"
          : null,
      borderRadius: "0px 0px 12px 12px",
      display: "flex",
      flexDirection: mobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    footerButton: {
      width: buttonFullWidth || footerDisplayColumn || mobile ? "100%" : null,
      display: "flex",
      flexDirection: footerDisplayColumn ? "column-reverse" : "row",
      alignItems: "center",
    },
  }));
  const classes = useStyles();
  return (
    <MaterialModal
      open={open}
      className={classes.root}
      BackdropComponent={Backdrop}
      BackdropProps={{ className: classes.backdrop }}
    >
      <ModalTransitionEffect
        in={open}
        slide={fullWidth}
        style={{
          outline: "none",
          transition: "ease-in-out",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          left: open ? 0 : scorllbarWidth,
          position: "absolute",
        }}
      >
        <Paper className={classes.modal}>
          {/* Head */}
          <div className={classes.head} style={titleStyle}>
            {onExit ? (
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background: "black",
                  top: -0,
                  left: -0,
                  opacity: 0.5,
                  borderRadius: "12px 12px 0px 0px",
                  zIndex: 10,
                }}
              />
            ) : null}
            {headChildren ? (
              headChildren
            ) : (
              <div className={classes.title}>
                {icon ? icon : null}
                {checked ? <CheckCircleIcon className={classes.icon} /> : null}
                {failed ? <WarningIcon className={classes.icon} /> : null}
                <div>
                  <Typography variant={!mobile ? "h6" : "title"}>
                    {title}
                  </Typography>
                  <Typography
                    variant="body2_loose"
                    color="black800"
                    style={{ marginTop: helpText ? 4 : 0 }}
                  >
                    {helpText}
                  </Typography>
                </div>
              </div>
            )}
            {disCloseIcon ? null : (
              <IconButton
                className={classes.closeIconButton}
                TouchRippleProps={{
                  classes: { child: classes.closeIconRippleRoot },
                }}
                onClick={() => {
                  onClose();
                }}
              >
                <CloseIcon className={classes.closeIcon} />
              </IconButton>
            )}
          </div>
          {/* Body */}
          {children ? (
            <>
              <Divider
                style={{
                  backgroundColor: onExit ? "#6d6d6d" : "#DADADA",
                }}
              />
              <Box
                id="body"
                className={classes.body}
                style={{
                  ...bodyStyle,
                }}
              >
                {onExit ? (
                  <div
                    style={{
                      marginLeft: bodyPadding
                        ? -bodyPadding
                        : mobile
                        ? -16
                        : -24,
                      marginTop: bodyPadding
                        ? -bodyPadding
                        : mobile
                        ? -16
                        : -24,
                      position:
                        bodyMaxHeight || height || (mobile && fullWidth)
                          ? "fixed"
                          : "absolute",
                      width: width
                        ? width
                        : size === "large"
                        ? 800
                        : size === "medium"
                        ? 640
                        : size === "small"
                        ? 480
                        : size === "extraSmall"
                        ? 320
                        : "100%",
                      height: bodyMaxHeight
                        ? bodyMaxHeight
                        : height
                        ? height
                        : mobile && fullWidth
                        ? clientHeight
                        : "100%",
                      background: "black",
                      opacity: 0.5,
                      zIndex: 10,
                    }}
                  />
                ) : null}
                {children}
              </Box>
            </>
          ) : null}
          {(label || secondaryButton || primaryButton) && !disUnderLine ? (
            <Divider />
          ) : null}
          {/* Footer */}
          <Box className={classes.footer}>
            {footer ? (
              footer
            ) : (
              <>
                {!buttonFullWidth || !footerDisplayColumn ? (
                  <Box
                    marginBottom={mobile ? (label ? "12px" : 0) : 0}
                    style={{
                      fontSize: mobile ? 16 : 18,
                      fontWeight: 700,
                      lineHeight: 1.4,
                    }}
                  >
                    {label}
                  </Box>
                ) : null}

                {secondaryButton || primaryButton ? (
                  <Box className={classes.footerButton}>
                    <Box
                      width={
                        mobile && !buttonFullWidth && !footerDisplayColumn
                          ? null
                          : "100%"
                      }
                      marginRight={
                        !footerDisplayColumn && secondaryButton ? 1 : 0
                      }
                    >
                      {secondaryButton ? (
                        <Button
                          fullWidth={buttonFullWidth || footerDisplayColumn}
                          variant={
                            secondaryButton.variant
                              ? secondaryButton.variant
                              : "secondary"
                          }
                          size="small"
                          onClick={secondaryButton.onClick}
                          disabled={secondaryButton.disabled}
                          loading={secondaryButton.loading}
                          style={secondaryButton.style}
                        >
                          {secondaryButton.title}
                        </Button>
                      ) : null}
                    </Box>
                    <Box
                      width="100%"
                      marginBottom={footerDisplayColumn ? 1 : 0}
                    >
                      {primaryButton ? (
                        <Button
                          fullWidth={
                            buttonFullWidth || footerDisplayColumn || mobile
                          }
                          variant={
                            primaryButton.variant
                              ? primaryButton.variant
                              : "primary"
                          }
                          size="small"
                          onClick={primaryButton.onClick}
                          disabled={primaryButton.disabled}
                          loading={primaryButton.loading}
                          style={primaryButton.style}
                        >
                          {primaryButton.title}
                        </Button>
                      ) : null}
                    </Box>
                  </Box>
                ) : null}
              </>
            )}
          </Box>
        </Paper>
      </ModalTransitionEffect>
    </MaterialModal>
  );
});

export default Modal;
