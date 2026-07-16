import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import CheckBox from "./CheckBox";
import RadioButton from "./RadioButton";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("CheckBox 點 label 勾選", async () => {
  const fn = vi.fn();
  r(<CheckBox label="同意條款" onChange={fn} />);
  await userEvent.click(screen.getByText("同意條款"));
  expect(fn).toHaveBeenCalled();
});

test("RadioButton 點擊選取", async () => {
  const fn = vi.fn();
  r(<RadioButton label="選項A" onChange={fn} />);
  await userEvent.click(screen.getByText("選項A"));
  expect(fn).toHaveBeenCalled();
});
