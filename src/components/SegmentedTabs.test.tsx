import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import SegmentedTab from "./SegmentedTab";
import SegmentedTabs from "./SegmentedTabs";

function Demo() {
  const [value, setValue] = React.useState(0);
  return (
    <SWAPThemeProvider>
      <SegmentedTabs value={value} onChange={(_, v) => setValue(v)}>
        <SegmentedTab label="我的請款單" />
        <SegmentedTab label="SWAP Point 明細" />
      </SegmentedTabs>
      <div>目前：{value}</div>
    </SWAPThemeProvider>
  );
}

test("點擊切換 value", async () => {
  render(<Demo />);
  await userEvent.click(screen.getByText("SWAP Point 明細"));
  expect(screen.getByText("目前：1")).toBeInTheDocument();
});

// 回歸鎖：scrollable 的置中只能捲 tabs 自己的 scroller 水平軸。
// 禁用 scrollIntoView——它會同時捲垂直軸，頁面重整還原到中段時整頁被拉到 tab 列位置。
test("scrollable 置中不得呼叫 scrollIntoView（只捲 scroller 水平軸）", () => {
  vi.useFakeTimers();
  const scrollIntoViewSpy = vi.fn();
  const scrollToSpy = vi.fn();
  Element.prototype.scrollIntoView = scrollIntoViewSpy;
  Element.prototype.scrollTo = scrollToSpy as unknown as Element["scrollTo"];
  try {
    render(
      <SWAPThemeProvider>
        <SegmentedTabs value={1} variant="scrollable" onChange={() => {}}>
          <SegmentedTab label="A" />
          <SegmentedTab label="B" />
          <SegmentedTab label="C" />
        </SegmentedTabs>
      </SWAPThemeProvider>,
    );
    vi.advanceTimersByTime(1100);
    expect(scrollIntoViewSpy).not.toHaveBeenCalled();
    expect(scrollToSpy).toHaveBeenCalledWith(
      expect.objectContaining({ left: expect.any(Number), behavior: "smooth" }),
    );
    // 只給 left，不給 top —— 垂直軸不受影響
    expect(scrollToSpy.mock.calls[0][0]).not.toHaveProperty("top");
  } finally {
    vi.useRealTimers();
  }
});
