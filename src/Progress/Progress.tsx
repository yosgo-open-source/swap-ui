import { makeStyles, Theme, useTheme } from "@material-ui/core";
import React from "react";
import Typography from "../Typography/Typography";
import { ProgressProps } from "./Progress.types";

// Style
interface StyleProps {
  width: number | string;
  stepWidth: number | string;
  size: number | string;
  // stepCursor: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: props.width,
  }),
  block: (props) => ({
    display: "flex",
    alignItems: "center",
    width: props.stepWidth,
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
  line: (props) => ({
    height: 2,
    width: (Number(props.stepWidth) - Number(props.size)) / 2,
  }),
}));

const Progress: React.FC<ProgressProps> = (props): React.ReactElement => {
  const theme = useTheme();
  const {
    onClick,
    width,
    size,
    stepWidth,
    label,
    step,
    count,
    ...other
  } = props;
  const styleProps: StyleProps = {
    width: width ? width : 592,
    size: size ? size : 24,
    stepWidth: stepWidth ? stepWidth : 200,
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              className={classes.block}
              // onClick={onClick[i]}
            >
              {/* Front Line */}
              <div
                className={classes.line}
                style={{
                  backgroundColor:
                    i !== 0
                      ? i + 1 < step
                        ? theme.primary.primary800
                        : i + 1 === step
                        ? theme.primary.primary800
                        : theme.black.black500
                      : "transparent",
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
                }}
              >
                {i + 1}
              </div>
              {/* Back Line */}
              <div
                className={classes.line}
                style={{
                  backgroundColor:
                    i + 1 !== count
                      ? i + 1 < step
                        ? theme.primary.primary800
                        : theme.black.black500
                      : "transparent",
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
