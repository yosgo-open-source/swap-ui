import * as React from "react";
import MuiModal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import { swapColors as c, swapShadows } from "../theme/tokens";
import { swapTokenMap } from "../theme/textColor";
import { cssSize } from "../utils/cssSize";
import useBreakpoints from "../hooks/useBreakpoints";
import Typography from "./Typography";
import Button from "@mui/material/Button";
import IconButton from "./IconButton";
import Tooltip from "./Tooltip";
import type { ModalProps, ModalButtonItem } from "./Modal.types";

const SIZE_WIDTH = { large: 800, medium: 640, small: 480, extraSmall: 320 } as const;

function FooterButton({
  item,
  fullWidth,
  fallbackVariant,
}: {
  item: ModalButtonItem;
  fullWidth: boolean;
  fallbackVariant: "primary" | "secondary";
}) {
  const btn = (
    <Button
      fullWidth={fullWidth}
      variant={item.variant ?? fallbackVariant}
      size="small"
      onClick={item.onClick}
      disabled={item.disabled}
      loading={item.loading ?? false} // 保持布林：undefined↔true 切換會重組 MUI loading DOM（官方警告）
      style={item.style}
    >
      {item.title}
    </Button>
  );
  return item.tooltip ? <Tooltip {...item.tooltip}>{btn}</Tooltip> : btn;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(props, ref) {
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
    fullScreen,
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
  } = props;

  // fullWidth/mobile 時 body 最大高度依視窗計算（四檔公式沿 v1）
  const [clientHeight, setClientHeight] = React.useState(0);
  const [scrollbarWidth, setScrollbarWidth] = React.useState(0);
  React.useEffect(() => {
    if (mobile || fullWidth) {
      if ((helpText || multiline) && !label) setClientHeight(window.innerHeight - 64 - 73 - 64);
      else if (!helpText && label) setClientHeight(window.innerHeight - 64 - 56 - 99);
      else if ((helpText || multiline) && label) setClientHeight(window.innerHeight - 64 - 73 - 99);
      else setClientHeight(window.innerHeight - 64 - 56 - 64);
    }
  }, [fullWidth, mobile, helpText, multiline, label]);
  React.useEffect(() => {
    setScrollbarWidth((window.innerWidth - document.body.clientWidth) / 2);
  }, []);

  const matchXS = useBreakpoints("xs");
  const slide = fullWidth || fullScreen;
  const resolvedWidth = fullScreen
    ? "100vw"
    : (cssSize(width) ?? (size ? SIZE_WIDTH[size] : "100%"));
  const iconSx = {
    "& path": { width: 20, height: 20 },
    color:
      (iconColor && swapTokenMap[iconColor]) ||
      (checkIconColor && swapTokenMap[checkIconColor]) ||
      c.black.black700,
    marginRight: "10px",
  };
  const headPad = headpadding
    ? headpadding
    : mobile
      ? disCloseIcon && !helpText && !multiline
        ? "17px 16px"
        : "12px 16px"
      : disCloseIcon && !helpText && !multiline
        ? "19.5px 24px"
        : "16px 24px";
  const bodyPad = bodyPadding ?? (mobile ? 16 : 24);

  const panel = (
    <Paper
      sx={{
        width: resolvedWidth,
        maxWidth: cssSize(maxWidth),
        borderRadius: fullScreen ? 0 : fullWidth ? "12px 12px 0px 0px" : "12px",
        border: "unset",
        boxShadow: fullScreen ? "unset" : swapShadows.l,
        display: "flex",
        flexDirection: "column",
        outline: 0,
        // v1 用 react-spring 做 200ms 淡入+上移；v2 以 CSS keyframes 等效（少一依賴）
        ...(slide
          ? {}
          : {
              // 置中模式的高度上限：內容再多也不超出視窗（head/footer 恆在畫面內，
              // body 以 flex 壓縮後啟動自身捲軸），不需呼叫端傳 bodyMaxHeight
              maxHeight: "calc(100dvh - 64px)",
              animation: open ? "swap-modal-in 200ms ease-in-out" : "none",
              "@keyframes swap-modal-in": {
                from: { opacity: 0, transform: "translateY(50px)" },
                to: { opacity: 1, transform: "translateY(0px)" },
              },
            }),
      }}
    >
      {/* Head */}
      <Box
        sx={{
          borderRadius: fullScreen ? 0 : "12px 12px 0px 0px",
          padding: headPad,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          pointerEvents: onExit ? "none" : "unset",
          flexShrink: 0, // panel 到達 maxHeight 時只壓縮 body，head 恆完整可見
        }}
        style={titleStyle}
      >
        {onExit ? (
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "black",
              top: 0,
              left: 0,
              opacity: 0.5,
              borderRadius: "12px 12px 0px 0px",
              zIndex: 10,
            }}
          />
        ) : null}
        {headChildren ?? (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {icon ?? null}
            {checked ? <CheckCircleIcon sx={iconSx} /> : null}
            {failed ? <WarningIcon sx={iconSx} /> : null}
            <div>
              <Typography variant={!mobile ? "h6" : "title"} component="h6">
                {title}
              </Typography>
              {helpText ? (
                <Typography variant="body2_loose" color="black800" component="div" style={{ marginTop: 4 }}>
                  {helpText}
                </Typography>
              ) : null}
            </div>
          </Box>
        )}
        {disCloseIcon ? null : (
          <IconButton sx={{ marginLeft: "16px" }} onClick={() => onClose()} aria-label="關閉">
            <CloseIcon sx={{ color: c.black.black1000, width: 20, height: 20 }} />
          </IconButton>
        )}
      </Box>
      {/* Body */}
      {children ? (
        <>
          <Divider sx={{ backgroundColor: onExit ? "#6d6d6d" : "#DADADA" }} />
          <Box
            sx={{
              transition: "all 0.2s ease-in-out",
              height: fullScreen ? "calc(100dvh - 146px)" : (cssSize(height) ?? "100%"),
              padding: `${bodyPad}px`,
              position: "relative",
              pointerEvents: onExit ? "none" : "unset",
              maxHeight: fullScreen
                ? "calc(100dvh - 146px)"
                : (cssSize(bodyMaxHeight) ?? (fullWidth ? clientHeight : "unset")),
              minHeight: 0, // 允許 flex 壓縮（配合 panel maxHeight），超出時啟動下方捲軸
              overflowY: !onExit ? "scroll" : "hidden",
              "&::-webkit-scrollbar": { backgroundColor: "transparent", width: 5 },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: c.black.black600,
                borderRadius: "100px",
              },
              "&::-webkit-scrollbar-track-piece:start": { marginTop: "12px" },
              "&::-webkit-scrollbar-track-piece:end": { marginBottom: "12px" },
            }}
            style={bodyStyle}
          >
            {onExit ? (
              <Box
                sx={{
                  marginLeft: `${-bodyPad}px`,
                  marginTop: `${-bodyPad}px`,
                  position:
                    bodyMaxHeight || height || (mobile && fullWidth) || fullScreen
                      ? "fixed"
                      : "absolute",
                  width: resolvedWidth,
                  height: fullScreen
                    ? "100dvh"
                    : (cssSize(bodyMaxHeight) ??
                      cssSize(height) ??
                      (mobile && fullWidth ? clientHeight : "100%")),
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
      {(label || secondaryButton || primaryButton) && !disUnderLine ? <Divider /> : null}
      {/* Footer */}
      <Box
        sx={{
          padding:
            label || secondaryButton || primaryButton
              ? mobile
                ? "12px 16px"
                : "16px 24px"
              : undefined,
          borderRadius: "0px 0px 12px 12px",
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0, // panel 到達 maxHeight 時只壓縮 body，footer 按鈕恆可點擊
        }}
      >
        {footer ?? (
          <>
            {!buttonFullWidth || !footerDisplayColumn ? (
              <Box
                sx={{
                  marginBottom: mobile && label ? "12px" : 0,
                  fontSize: mobile ? 16 : 18,
                  fontWeight: 700,
                  lineHeight: 1.4,
                }}
              >
                {label}
              </Box>
            ) : null}
            {secondaryButton || primaryButton ? (
              <Box
                sx={{
                  width: buttonFullWidth || footerDisplayColumn || mobile ? "100%" : undefined,
                  display: "flex",
                  flexDirection: footerDisplayColumn ? "column-reverse" : "row",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: mobile && !buttonFullWidth && !footerDisplayColumn ? undefined : "100%",
                    marginRight: !footerDisplayColumn && secondaryButton ? "8px" : 0,
                  }}
                >
                  {secondaryButton ? (
                    <FooterButton
                      item={secondaryButton}
                      fullWidth={Boolean(buttonFullWidth || footerDisplayColumn)}
                      fallbackVariant="secondary"
                    />
                  ) : null}
                </Box>
                <Box sx={{ width: "100%", marginBottom: footerDisplayColumn ? "8px" : 0 }}>
                  {primaryButton ? (
                    <FooterButton
                      item={primaryButton}
                      fullWidth={Boolean(buttonFullWidth || footerDisplayColumn || mobile)}
                      fallbackVariant="primary"
                    />
                  ) : null}
                </Box>
              </Box>
            ) : null}
          </>
        )}
      </Box>
    </Paper>
  );

  return (
    <MuiModal
      ref={ref}
      open={open}
      onClose={() => onClose()}
      sx={{
        display: "flex",
        alignItems: fullWidth ? "flex-end" : "center",
        justifyContent: "center",
        border: "unset",
        margin: fullWidth || fullScreen ? 0 : matchXS ? "0px 24px" : "0px 16px",
      }}
      slotProps={{
        backdrop: {
          sx: { transition: "all 0.2s ease-in-out !important" },
          style: { overflow: "auto", WebkitOverflowScrolling: "touch" },
        },
      }}
    >
      <Box
        sx={{
          outline: "none",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          left: open ? 0 : scrollbarWidth,
          position: "absolute",
          ...(fullWidth ? { bottom: 0 } : {}),
        }}
      >
        {slide ? (
          <Slide in={open} direction="up" mountOnEnter unmountOnExit timeout={{ enter: 300, exit: 300 }}>
            {panel}
          </Slide>
        ) : (
          panel
        )}
      </Box>
    </MuiModal>
  );
});

export default Modal;
