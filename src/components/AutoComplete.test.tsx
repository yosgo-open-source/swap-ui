import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import AutoComplete from "./AutoComplete";

test("開啟時渲染標題與選項", () => {
  render(
    <SWAPThemeProvider>
      <AutoComplete
        open
        title="選擇銀行"
        options={["台灣銀行", "國泰世華"]}
        getOptionLabel={(o) => String(o)}
      />
    </SWAPThemeProvider>,
  );
  expect(screen.getByText("選擇銀行")).toBeInTheDocument();
  expect(screen.getByText("台灣銀行")).toBeInTheDocument();
});

test("無選項時自由輸入回呼帶入輸入值", async () => {
  const fn = vi.fn();
  render(
    <SWAPThemeProvider>
      <AutoComplete
        open
        title="銀行"
        options={["台灣銀行"]}
        getOptionLabel={(o) => String(o)}
        handleNoOptionsValueChange={fn}
      />
    </SWAPThemeProvider>,
  );
  await userEvent.type(screen.getByRole("combobox"), "不存在的銀行");
  const link = await screen.findByText(/使用/);
  await userEvent.pointer({ keys: "[MouseLeft>]", target: link });
  expect(fn).toHaveBeenCalledWith("不存在的銀行");
});

// 手機體驗：預設不自動聚焦（v1 恆聚焦會強制彈出鍵盤）；需要時顯式開啟
test("搜尋框預設不自動聚焦；autoFocus 可開啟", () => {
  const { unmount } = render(
    <SWAPThemeProvider>
      <AutoComplete open title="t" options={["a"]} getOptionLabel={(o) => String(o)} />
    </SWAPThemeProvider>,
  );
  expect(document.activeElement).not.toBe(screen.getByRole("combobox"));
  unmount();
  render(
    <SWAPThemeProvider>
      <AutoComplete open autoFocus title="t" options={["a"]} getOptionLabel={(o) => String(o)} />
    </SWAPThemeProvider>,
  );
  expect(document.activeElement).toBe(screen.getByRole("combobox"));
});
