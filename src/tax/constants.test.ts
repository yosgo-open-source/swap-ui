import {
  SWAPIncomeTypes,
  SWAPExpenseTypes,
  SWAPTaxIncomeLabel,
  SWAPTaxExpenseLabel,
  SWAPTaxDescription,
} from "./constants";

test("所得類別三筆", () => {
  expect(SWAPIncomeTypes.map((t) => t.code)).toEqual(["9A", "9B", "50"]);
});

test("費用類別標籤與比率", () => {
  expect(SWAPTaxExpenseLabel("10")).toBe("律師");
  expect(SWAPExpenseTypes.find((e) => e.code === "10")?.expenseRatio).toBe("30%");
});

test("所得標籤與稅務說明組字", () => {
  expect(SWAPTaxIncomeLabel("50")).toBe("薪資所得");
  expect(SWAPTaxDescription("50", "")).toContain("50");
});
