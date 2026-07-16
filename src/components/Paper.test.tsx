import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Paper from "./Paper";

test("套用圓角 12 與外框", () => {
  render(
    <SWAPThemeProvider>
      <Paper>內容</Paper>
    </SWAPThemeProvider>,
  );
  expect(screen.getByText("內容")).toHaveStyle({ borderRadius: "12px" });
});
