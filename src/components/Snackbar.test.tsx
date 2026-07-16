import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Snackbar from "./Snackbar";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("open 顯示 message 與收回操作回呼", async () => {
  const fn = vi.fn();
  r(<Snackbar open message="已刪除 1 筆資料" revertButton={{ onClick: fn }} />);
  expect(screen.getByText("已刪除 1 筆資料")).toBeInTheDocument();
  await userEvent.click(screen.getByText("收回操作"));
  expect(fn).toHaveBeenCalled();
});

test("variant success 配色", () => {
  const { container } = render(
    <SWAPThemeProvider>
      <Snackbar open message="成功" variant="success" checkIcon />
    </SWAPThemeProvider>,
  );
  const content = container.querySelector(".MuiSnackbarContent-root") as HTMLElement;
  expect(content).toHaveStyle({ backgroundColor: "#00821E" }); // success800
});
