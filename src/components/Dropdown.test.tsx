import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuItem from "@mui/material/MenuItem";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Dropdown from "./Dropdown";

test("選擇選項觸發 onChange", async () => {
  const fn = vi.fn();
  render(
    <SWAPThemeProvider>
      <Dropdown value="" onChange={fn}>
        <MenuItem value="tw">台灣</MenuItem>
      </Dropdown>
    </SWAPThemeProvider>,
  );
  await userEvent.click(screen.getByRole("combobox"));
  await userEvent.click(await screen.findByText("台灣"));
  expect(fn).toHaveBeenCalled();
});
