import { makeStyles, Theme, useTheme } from "@material-ui/core";
import React from "react";
import { ProgressProps } from "./Progress.types";

// Style
interface StyleProps {}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
  stepRoot: (props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    lineHeight: 1.4,
    fontWeight: 700,
    width: 24,
    height: 24,
    borderRadius: "50%",
    cursor: "pointer",
  }),
}));

const Progress: React.FC<ProgressProps> = (props): React.ReactElement => {
  const theme = useTheme();
  const { complete, current, upcoming, step, count, ...other } = props;
  const styleProps: StyleProps = {};
  const classes = useStyles(styleProps);
  const a = Array.from(Array(count).keys());

  return (
    <div className={classes.root}>
      {a.map((i: number) => {
        return (
          <div
            className={classes.stepRoot}
            {...other}
            style={{
              backgroundColor: i === step - 1 ? "red" : "black",
            }}
          >
            {i + 1}
          </div>
        );
      })}
    </div>
  );
};

export default Progress;
