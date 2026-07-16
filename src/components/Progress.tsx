import * as React from "react";
import Box from "@mui/material/Box";
import { swapColors as c } from "../theme/tokens";
import { cssSize } from "../utils/cssSize";
import Typography from "./Typography";
import type { ProgressProps } from "./Progress.types";

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(function Progress(
  { width, size, label, step, count, sx, ...rest },
  ref,
) {
  const circle = cssSize(size) ?? 24;
  const ourStyles = {
    width: cssSize(width) ?? "100%",
    display: "flex",
    alignItems: "flex-start",
  };
  return (
    <Box ref={ref} sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]} {...rest}>
      {Array.from(Array(count).keys()).map((i) => {
        const isCurrent = i === step - 1;
        const isDone = i + 1 < step;
        return (
          <Box
            key={i}
            sx={{ width: "100%", display: "flex", flexDirection: "column", textAlign: "center" }}
          >
            <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
              {/* 前段連接線 */}
              <Box
                sx={{
                  height: "2px",
                  width: "calc((100% - 24px)/2)",
                  backgroundColor:
                    i !== 0
                      ? i + 1 <= step
                        ? c.primary.primary800
                        : c.black.black500
                      : "transparent",
                }}
              />
              {/* 步驟圓 */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  lineHeight: 1.4,
                  fontWeight: 700,
                  width: circle,
                  height: circle,
                  borderRadius: "50%",
                  boxSizing: "border-box",
                  backgroundColor: isCurrent ? "white" : isDone ? c.primary.primary800 : c.black.black600,
                  color: isCurrent ? c.primary.primary800 : "white",
                  border: isCurrent ? `2px solid ${c.primary.primary800}` : "none",
                  boxShadow: isCurrent ? "0px 0px 0px 4px #D7DFF8" : "unset",
                }}
              >
                {i + 1}
              </Box>
              {/* 後段連接線 */}
              <Box
                sx={{
                  height: "2px",
                  width: "calc((100% - 24px)/2)",
                  backgroundColor:
                    i + 1 !== count
                      ? i + 1 < step
                        ? c.primary.primary800
                        : c.black.black500
                      : "transparent",
                }}
              />
            </Box>
            <Typography
              variant="caption1"
              color={i + 1 === step ? "black1000" : "black700"}
              style={{ marginTop: 8 }}
            >
              {label ? label[i] : null}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
});

export default Progress;
