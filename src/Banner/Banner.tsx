import { makeStyles, Theme, useTheme } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import Typography from "../Typography/Typography";
import { BannerProps } from "./Banner.types";

// Style
interface StyleProps {
  backgroundColor: string;
  borderColor: string;
  width: string | number;
  height: string | number;
  alignItems: string;
}

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  root: (props) => ({
    backgroundColor: props.backgroundColor,
    border: `1px solid ${props.borderColor}`,
    borderRadius: 8,
    padding: "12px 16px",
    width: props.width,
    height: props.height,
    display: "flex",
    alignItems: props.alignItems,
  }),
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
}));

const Banner: React.FC<BannerProps> = (props): React.ReactElement => {
  const [alignStart, setAlignStart] = useState(false);
  const theme = useTheme();
  const { variant, width, height, mobile, children, ...other } = props;
  const styleProps: StyleProps = {
    backgroundColor:
      variant === "normal"
        ? theme.black.black100
        : variant === "info"
        ? theme.primary.primary50
        : variant === "success"
        ? theme.success.success50
        : variant === "warning"
        ? theme.secondary.secondary50
        : variant === "error"
        ? theme.danger.danger50
        : theme.primary.primary50,
    borderColor:
      variant === "normal"
        ? theme.black.black500
        : variant === "info"
        ? theme.primary.primary200
        : variant === "success"
        ? theme.success.success400
        : variant === "warning"
        ? theme.secondary.secondary600
        : variant === "error"
        ? theme.danger.danger300
        : theme.primary.primary200,
    width: width ? width : null,
    height: height ? height : null,
    alignItems: mobile ? "flex-start" : alignStart ? "flex-start" : "center",
  };
  const classes = useStyles(styleProps);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      if (ref.current.offsetHeight > 60) {
        setAlignStart(true);
      }
    }
  }, [ref]);
  return (
    <div ref={ref} className={classes.root} {...other}>
      <div className={classes.icon}>
        {variant === "normal" || variant === "info" || variant === "error" ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 9H11V7H13V9ZM13 17H11V11H13V17ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
              fill={
                variant === "normal"
                  ? theme.black.black700
                  : variant === "info"
                  ? theme.primary.primary400
                  : variant === "error"
                  ? theme.danger.danger700
                  : theme.primary.primary400
              }
            />
          </svg>
        ) : variant === "success" ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
              fill="#00932A"
            />
          </svg>
        ) : variant === "warning" ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 14H11V9H13V14ZM13 18H11V16H13V18ZM1 21H23L12 2L1 21Z"
              fill="#E5640C"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 9H11V7H13V9ZM13 17H11V11H13V17ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
              fill={theme.primary.primary400}
            />
          </svg>
        )}
      </div>
      <Typography variant="caption2">{children}</Typography>
    </div>
  );
};

export default Banner;
