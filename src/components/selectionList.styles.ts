import { swapColors as c } from "../theme/tokens";
import { cssSize } from "../utils/cssSize";

/** RadioList / CheckBoxList 共用的可選卡片樣式（三模式尺寸沿 v1） */
export function selectionListStyles(opts: {
  checked?: boolean;
  multiline?: boolean;
  line?: boolean;
  width?: string | number;
  height?: string | number;
}) {
  const { checked, multiline, line, width, height } = opts;
  return {
    width: cssSize(width) ?? (multiline ? 240 : line ? 342 : 327),
    height: cssSize(height) ?? (multiline ? 69 : line ? 76 : 54),
    padding: line ? "16px" : multiline ? "12px 16px" : "15px 16px",
    border: checked ? `1px solid ${c.primary.primary400}` : `1px solid ${c.black.black500}`,
    boxSizing: "border-box" as const,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    backgroundColor: checked ? c.primary.primary50 : "white",
    WebkitTapHighlightColor: "transparent",
    "&:hover": {
      backgroundColor: checked ? c.primary.primary50 : c.black.black100,
      border: checked ? `1px solid ${c.primary.primary400}` : `1px solid ${c.black.black600}`,
    },
  };
}
