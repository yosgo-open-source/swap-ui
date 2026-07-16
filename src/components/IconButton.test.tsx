import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import IconButton from "./IconButton";

test("預設尺寸 32 圓角 8 + onClick 直通", () => {
  const fn = vi.fn();
  render(
    <SWAPThemeProvider>
      <IconButton data-testid="ib" onClick={fn}>
        <svg />
      </IconButton>
    </SWAPThemeProvider>,
  );
  const el = screen.getByTestId("ib");
  expect(el).toHaveStyle({ width: "32px", borderRadius: "8px" });
  el.click();
  expect(fn).toHaveBeenCalled();
});
