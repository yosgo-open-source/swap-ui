import { cssSize } from "./cssSize";

test("純數字字串轉數字（emotion 補 px）", () => {
  expect(cssSize("100")).toBe(100);
  expect(cssSize("12.5")).toBe(12.5);
});

test("其餘原樣", () => {
  expect(cssSize(100)).toBe(100);
  expect(cssSize("100px")).toBe("100px");
  expect(cssSize("fit-content")).toBe("fit-content");
  expect(cssSize("50%")).toBe("50%");
  expect(cssSize(undefined)).toBeUndefined();
});
