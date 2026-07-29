import * as React from "react";
import Box from "@mui/material/Box";
import RadioButton from "./RadioButton";
import Typography from "./Typography";
import { selectionListStyles } from "./selectionList.styles";
import type { RadioListProps } from "./RadioList.types";

export function SelectionListInner({
  control,
  title,
  subtitle,
  multiline,
  line,
}: {
  control: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  multiline?: boolean;
  line?: boolean;
}) {
  // line 模式：直線高度隨 subtitle 內容量測（≥44）
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [lineHeight, setLineHeight] = React.useState(44);
  React.useEffect(() => {
    if (ref.current) setLineHeight(Math.max(ref.current.offsetHeight, 44));
  }, []);
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {control}
        {line ? (
          <Box sx={{ display: "flex", alignItems: "center", marginLeft: "4px" }}>
            <Typography
              variant="title"
              component="div"
              style={{ maxWidth: 56, minWidth: 56, textAlign: "center", wordBreak: "break-word" }}
            >
              {title}
            </Typography>
            <Box sx={{ height: lineHeight, width: "1px", margin: "0 12px", backgroundColor: "#909090" }} />
            <div ref={ref}>
              <Typography
                variant="body2_loose"
                color="black800"
                component="div"
                style={{ width: "100%", wordBreak: "break-word" }}
              >
                {subtitle}
              </Typography>
            </div>
          </Box>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="title" component="div">
              {title}
            </Typography>
            {multiline ? (
              <Typography variant="body2_loose" color="black800" component="div">
                {subtitle}
              </Typography>
            ) : null}
          </Box>
        )}
      </Box>
      {!multiline && !line ? (
        <Typography variant="body2_loose" color="black800" component="div">
          {subtitle}
        </Typography>
      ) : null}
    </>
  );
}

const RadioList = React.forwardRef<HTMLDivElement, RadioListProps>(function RadioList(
  { width, height, title, subtitle, multiline, checked, line, sx, ...rest },
  ref,
) {
  return (
    <Box
      ref={ref}
      sx={[
        selectionListStyles({ checked, multiline, line, width, height }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    >
      <SelectionListInner
        control={<RadioButton disableHover checked={Boolean(checked)} sx={{ marginLeft: "4px" }} />}
        title={title}
        subtitle={subtitle}
        multiline={multiline}
        line={line}
      />
    </Box>
  );
});

export default RadioList;
