import { renderHook } from "@testing-library/react";
import useBreakpoints from "./useBreakpoints";

test("回傳 boolean（斷點名與數字皆可）", () => {
  const { result: byName } = renderHook(() => useBreakpoints("md"));
  const { result: byNumber } = renderHook(() => useBreakpoints(800));
  expect(typeof byName.current).toBe("boolean");
  expect(typeof byNumber.current).toBe("boolean");
});
