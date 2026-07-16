import * as React from "react";
import Box from "@mui/material/Box";
import CheckBox from "./CheckBox";
import { SelectionListInner } from "./RadioList";
import { selectionListStyles } from "./selectionList.styles";
import type { CheckBoxListProps } from "./RadioList.types";

const CheckBoxList = React.forwardRef<HTMLDivElement, CheckBoxListProps>(function CheckBoxList(
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
        control={<CheckBox disableHover checked={Boolean(checked)} sx={{ marginLeft: "4px" }} />}
        title={title}
        subtitle={subtitle}
        multiline={multiline}
        line={line}
      />
    </Box>
  );
});

export default CheckBoxList;
