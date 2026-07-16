import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuList from "@mui/material/MenuList";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import MenuItem from "./MenuItem";

test("渲染與點擊直通", async () => {
  const fn = vi.fn();
  render(
    <SWAPThemeProvider>
      <MenuList>
        <MenuItem onClick={fn}>編輯</MenuItem>
      </MenuList>
    </SWAPThemeProvider>,
  );
  await userEvent.click(screen.getByText("編輯"));
  expect(fn).toHaveBeenCalled();
});
