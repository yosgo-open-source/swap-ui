import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuItem from "@mui/material/MenuItem";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Select from "./Select";

test("選擇選項觸發 onChange", async () => {
  const fn = vi.fn();
  render(
    <SWAPThemeProvider>
      <Select placeholder="類別" value="" onChange={fn}>
        <MenuItem value="a">A</MenuItem>
      </Select>
    </SWAPThemeProvider>,
  );
  await userEvent.click(screen.getByRole("combobox"));
  await userEvent.click(await screen.findByText("A"));
  expect(fn).toHaveBeenCalled();
});
