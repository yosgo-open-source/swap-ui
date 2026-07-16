import useMediaQuery from "@mui/material/useMediaQuery";
import { swapBreakpoints } from "../theme/tokens";

/**
 * v1 相容的斷點 hook：回傳視窗寬度是否 ≥ 指定斷點。
 * 斷點名對應 xxs 0 / xs 375 / sm 576 / md 768 / lg 992 / xl 1200 / xxl 1400，亦可傳任意 px 數字。
 */
export default function useBreakpoints(
  breakpoint?: keyof typeof swapBreakpoints | number,
): boolean {
  const px = typeof breakpoint === "number" ? breakpoint : swapBreakpoints[breakpoint ?? "xxs"];
  return useMediaQuery(`(min-width:${px}px)`);
}
