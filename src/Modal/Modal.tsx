import React from "react";
import {
  Paper,
  IconButton,
  Divider,
  Fade,
  Slide,
  makeStyles,
  Theme,
  Box,
} from "@material-ui/core";
import MaterialModal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { ModalProps } from "./Modal.types";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import { useBreakpoints } from "..";

const ModalOpenEffect = (props: {
  slide: boolean;
  in: boolean;
  children: any;
}) => {
  return (
    <>
      {props.slide ? (
        <Slide
          in={props.in}
          direction="up"
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 300, exit: 300 }}
        >
          {props.children}
        </Slide>
      ) : (
        <Fade in={props.in} timeout={{ enter: 300, exit: 0 }}>
          {props.children}
        </Fade>
      )}
    </>
  );
};

const Modal: React.FC<ModalProps> = ({
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
  checkIconColor,
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
}) => {
  const match_XS = useBreakpoints("xs");
  const match_SM = useBreakpoints("sm");
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      display: "flex",
      alignItems: fullWidth ? "flex-end" : "center",
      justifyContent: "center",
      border: "none",
    },
    modal: {
      margin: fullWidth
        ? null
        : match_SM
        ? "0px 24px"
        : match_XS
        ? "0px 16px"
        : "0px 8px",
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
      border: "none",
      boxShadow: theme.boxShadow.l,
      display: "flex",
      flexDirection: "column",
      outline: 0,
    },
    head: {
      height: helpText ? 72 : mobile ? 64 : 64,
      borderRadius: "12px 12px 0px 0px",
      padding: headpadding ? headpadding : mobile ? "0px 16px" : "0px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      display: "flex",
      alignItems: "center",
    },
    checkIcon: {
      "& path": {
        width: 20,
        height: 20,
      },
      color:
        checkIconColor === "primary50"
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
      width: 32,
      height: 32,
      borderRadius: 8,
      "&:hover": {
        borderRadius: 8,
        backgroundColor: theme.black.black400,
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
      height: height ? height : "100%",
      padding: bodyPadding ? bodyPadding : mobile ? 16 : 24,
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
    <MaterialModal open={open} className={classes.root}>
      <ModalOpenEffect in={open} slide={fullWidth}>
        <Paper className={classes.modal}>
          <Box className={classes.head}>
            <Box>
              {headChildren ? (
                headChildren
              ) : (
                <Box className={classes.title}>
                  {checked ? (
                    <CheckCircleIcon className={classes.checkIcon} />
                  ) : null}
                  <Box>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="body2_loose">{helpText}</Typography>
                  </Box>
                </Box>
              )}
            </Box>
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
          </Box>
          {children ? (
            <>
              <Divider />
              <Box className={classes.body}>{children}</Box>
            </>
          ) : null}
          {label || secondaryButton || primaryButton ? <Divider /> : null}
          <Box className={classes.footer}>
            {!buttonFullWidth || !footerDisplayColumn ? (
              <Box marginBottom={mobile ? (label ? "12px" : 0) : 0}>
                <Typography variant={mobile ? "title" : "h6"}>
                  {label}
                </Typography>
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
                  marginRight={!footerDisplayColumn ? 1 : 0}
                >
                  {secondaryButton ? (
                    <Button
                      fullWidth={buttonFullWidth || footerDisplayColumn}
                      variant="secondary"
                      size="small"
                      onClick={secondaryButton.onClick}
                      disabled={secondaryButton.disabled}
                    >
                      {secondaryButton.title}
                    </Button>
                  ) : null}
                </Box>
                <Box width="100%" marginBottom={footerDisplayColumn ? 1 : 0}>
                  {primaryButton ? (
                    <Button
                      fullWidth={
                        buttonFullWidth || footerDisplayColumn || mobile
                      }
                      variant="primary"
                      size="small"
                      onClick={primaryButton.onClick}
                      disabled={primaryButton.disabled}
                    >
                      {primaryButton.title}
                    </Button>
                  ) : null}
                </Box>
              </Box>
            ) : null}
          </Box>
        </Paper>
      </ModalOpenEffect>
    </MaterialModal>
  );
};

export default Modal;
