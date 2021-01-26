import { useMediaQuery } from "@material-ui/core";

function useBreakpoints(
  breakpoints?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | number
) {
  const matches = useMediaQuery(
    `(min-width:${
      breakpoints === "xxs"
        ? 0
        : breakpoints === "xs"
        ? 414
        : breakpoints === "sm"
        ? 576
        : breakpoints === "md"
        ? 768
        : breakpoints === "lg"
        ? 992
        : breakpoints === "xl"
        ? 1200
        : breakpoints === "xxl"
        ? 1400
        : breakpoints
    }px)`
  );
  return matches;
}

export default useBreakpoints;
