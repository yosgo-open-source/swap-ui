import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import { swapColors as c } from "../theme/tokens";
import { cssSize } from "../utils/cssSize";
import type { CardProps } from "./Card.types";

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { width, height, children, buttons, bodyStyle, loading, sx, ...rest },
  ref,
) {
  const ourStyles = {
    width: cssSize(width) ?? 350,
    height: cssSize(height) ?? "100%",
    backgroundColor: c.black.white,
    boxSizing: "border-box" as const,
    border: `1px solid ${c.black.black500}`,
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
    overflow: "hidden",
  };
  return (
    <Box ref={ref} sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]} {...rest}>
      <Box sx={{ padding: "24px", width: "100%", height: "100%" }} style={bodyStyle}>
        {!loading ? (
          children
        ) : (
          <Box sx={{ width: "100%", height: "100%" }}>
            <Skeleton width="40%" height="calc((100% - 16px) / 3)" />
            <Box sx={{ height: "8px" }} />
            <Skeleton width="100%" height="calc((100% - 16px) / 3)" />
            <Box sx={{ height: "8px" }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "calc((100% - 16px) / 3)",
              }}
            >
              <Skeleton width="26.4%" height="100%" />
              <Skeleton width="26.4%" height="100%" />
            </Box>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          width: "100%",
          boxShadow: `0px -1px 0px ${c.black.black400}`,
          borderRadius: "0px 0px 8px 8px",
          display: "flex",
          padding: 0,
        }}
      >
        {!loading ? (
          buttons?.map((b, index) => (
            <Button
              key={index}
              fullWidth
              variant={b.variant ?? "black"}
              style={{
                borderRight:
                  index + 1 === buttons.length ? undefined : `1px solid ${c.black.black400}`,
                borderRadius: "0px 0px 0px 0px",
                ...b.style,
              }}
              onClick={b.onClick}
              disabled={b.disabled}
              loading={b.loading ?? false} // 保持布林：undefined↔true 切換會重組 MUI loading DOM（官方警告）
            >
              {b.title}
            </Button>
          ))
        ) : (
          <Box sx={{ padding: "16px 24px", width: "100%", height: 48 }}>
            <Skeleton width="100%" height="100%" />
          </Box>
        )}
      </Box>
    </Box>
  );
});

export default Card;
