import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import TextField from "./TextField";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("渲染 label 與輸入", () => {
  r(<TextField label="姓名" placeholder="請輸入" />);
  expect(screen.getByLabelText("姓名")).toBeInTheDocument();
});

test("onChange 直通", async () => {
  const fn = vi.fn();
  r(<TextField label="n" onChange={fn} />);
  await userEvent.type(screen.getByLabelText("n"), "a");
  expect(fn).toHaveBeenCalled();
});
