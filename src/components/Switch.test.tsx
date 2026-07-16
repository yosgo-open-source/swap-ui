import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Switch from "./Switch";

test("點擊切換 checked", async () => {
  const fn = vi.fn();
  render(
    <SWAPThemeProvider>
      <Switch onChange={fn} />
    </SWAPThemeProvider>,
  );
  await userEvent.click(screen.getByRole("switch"));
  expect(fn).toHaveBeenCalled();
});
