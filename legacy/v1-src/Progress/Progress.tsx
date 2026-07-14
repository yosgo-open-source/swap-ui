import { makeStyles, Theme, useTheme } from "@material-ui/core";
import React from "react";
import Typography from "../Typography/Typography";
import { ProgressProps } from "./Progress.types";

// Style
interface StyleProps {
  width: number | string;
  size: number | string;
  // stepCursor: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    width: props.width,
    display: "flex",
    alignItems: "flex-start",
  }),
  step: (props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    lineHeight: 1.4,
    fontWeight: 700,
    width: props.size,
    height: props.size,
    borderRadius: "50%",
    // cursor: props.stepCursor,
  }),
}));

const Progress: React.FC<ProgressProps> = (props): React.ReactElement => {
  const theme = useTheme();
  const {
    // onClick,
    width,
    size,
    label,
    step,
    count,
    ...other
  } = props;
  const styleProps: StyleProps = {
    width: width ? width : "100%",
    size: size ? size : 24,
    // stepCursor: onClick ? "pointer" : null,
  };
  const classes = useStyles(styleProps);
  const a = Array.from(Array(count).keys());

  return (
    <div className={classes.root} {...other}>
      {a.map((i: number) => {
        return (
          <div
            key={i}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Front Line */}
              <div
                className={classes.line}
                style={{
                  height: 2,
                  backgroundColor:
                    i !== 0
                      ? i + 1 < step
                        ? theme.primary.primary800
                        : i + 1 === step
                        ? theme.primary.primary800
                        : theme.black.black500
                      : "transparent",
                  width: `calc((100% - 24px)/2)`,
                }}
              />
              {/* Step Circle */}
              <div
                className={classes.step}
                style={{
                  backgroundColor:
                    i === step - 1
                      ? "white"
                      : i + 1 < step
                      ? theme.primary.primary800
                      : theme.black.black600,
                  color: i === step - 1 ? theme.primary.primary800 : "white",
                  border:
                    i === step - 1
                      ? `2px solid ${theme.primary.primary800}`
                      : null,
                  boxShadow:
                    i === step - 1 ? "0px 0px 0px 4px #D7DFF8" : "unset",
                }}
              >
                {i + 1}
              </div>
              {/* Back Line */}
              <div
                className={classes.line}
                style={{
                  height: 2,
                  backgroundColor:
                    i + 1 !== count
                      ? i + 1 < step
                        ? theme.primary.primary800
                        : theme.black.black500
                      : "transparent",
                  width: `calc((100% - 24px)/2)`,
                }}
              />
            </div>
            <Typography
              variant="caption1"
              color={i + 1 === step ? "black1000" : "black700"}
              style={{ marginTop: 8 }}
            >
              {label ? label[i] : null}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default Progress;
