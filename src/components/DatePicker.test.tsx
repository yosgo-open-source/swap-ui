import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import DatePicker from "./DatePicker";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("open 顯示日曆", () => {
  r(<DatePicker open value="2026-07-16" />);
  expect(screen.getByText("選擇日期")).toBeInTheDocument();
  expect(screen.getByRole("grid")).toBeInTheDocument(); // 日曆格
});

test("月份與星期顯示中文（zh-tw locale）", () => {
  r(<DatePicker open value="2026-07-16" />);
  expect(screen.getByText("2026年7月")).toBeInTheDocument(); // header 非 "July 2026"
  expect(screen.getByText("日")).toBeInTheDocument(); // 星期列非 S M T W T F S
  expect(screen.getByText("六")).toBeInTheDocument();
});

test("選日回呼 v1 格式（不補零）並關閉", async () => {
  const getValue = vi.fn();
  const onClose = vi.fn();
  r(<DatePicker open value="2026-07-16" getValue={getValue} onClose={onClose} />);
  await userEvent.click(screen.getByRole("gridcell", { name: "9" }));
  expect(getValue).toHaveBeenCalledWith("2026-7-9");
  expect(onClose).toHaveBeenCalled();
});
