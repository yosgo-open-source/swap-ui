import { useTheme } from "@material-ui/core";
import React from "react";
import { CircularProgressProps } from "./CircularProgress.types";
import MaterialCircularProgress from "@material-ui/core/CircularProgress";

const CircularProgress: React.FC<CircularProgressProps> = (
  props
): React.ReactElement => {
  const theme = useTheme();
  const { dark, size, thickness } = props;
  return (
    <div
      style={{
        position: "relative",
        width: size ? size : 20,
        height: size ? size : 20,
      }}
    >
      {/* bottom */}
      <MaterialCircularProgress
        variant="determinate"
        value={100}
        size={size ? size : 20}
        thickness={thickness ? thickness : 5}
        style={{
          position: "absolute",
          left: -0,
          top: -0,
          color: dark ? theme.black.white : theme.black.black500,
          opacity: dark ? 0.4 : 1,
        }}
      />
      {/* top */}
      <MaterialCircularProgress
        variant="indeterminate"
        color="primary"
        size={size ? size : 20}
        thickness={thickness ? thickness : 5}
        style={{
          position: "absolute",
          left: -0,
          top: -0,
          color: dark ? theme.black.white : theme.primary.primary800,
        }}
      />
    </div>
  );
};

export default CircularProgress;
