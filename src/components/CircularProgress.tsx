import * as React from "react";
import MuiCircularProgress from "@mui/material/CircularProgress";
import { swapColors as c } from "../theme/tokens";
import type { CircularProgressProps } from "./CircularProgress.types";
import { cssSize } from "../utils/cssSize";

const CircularProgress = React.forwardRef<HTMLDivElement, CircularProgressProps>(
  function CircularProgress({ dark, size = 20, thickness = 5, style, ...rest }, ref) {
    return (
      <div ref={ref} style={{ position: "relative", width: cssSize(size), height: cssSize(size), ...style }} {...rest}>
        <MuiCircularProgress
          variant="determinate"
          value={100}
          size={size}
          thickness={thickness}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            color: dark ? c.black.white : c.black.black500,
            opacity: dark ? 0.4 : 1,
          }}
        />
        <MuiCircularProgress
          variant="indeterminate"
          size={size}
          thickness={thickness}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            color: dark ? c.black.white : c.primary.primary800,
          }}
        />
      </div>
    );
  },
);

export default CircularProgress;
