import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import RadioList from "./RadioList";
import CheckBoxList from "./CheckBoxList";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("RadioList checked 樣式與點擊直通", async () => {
  const fn = vi.fn();
  r(<RadioList data-testid="rl" checked title="月繳" subtitle="NT$ 300" onClick={fn} />);
  const el = screen.getByTestId("rl");
  expect(el).toHaveStyle({ backgroundColor: "#E6E9F8" }); // primary50
  await userEvent.click(el);
  expect(fn).toHaveBeenCalled();
});

test("CheckBoxList 未選白底 + multiline 顯示 subtitle", () => {
  r(<CheckBoxList data-testid="cl" checked={false} multiline title="標題" subtitle="說明文字" />);
  expect(screen.getByTestId("cl")).toHaveStyle({ backgroundColor: "rgb(255, 255, 255)" });
  expect(screen.getByText("說明文字")).toBeInTheDocument();
});
