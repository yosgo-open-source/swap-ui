import { render, screen } from "@testing-library/react";
import Button from "@mui/material/Button";
import { SWAPThemeProvider } from "./SWAPThemeProvider";

test("Provider 渲染 children", () => {
  render(
    <SWAPThemeProvider>
      <Button>hello</Button>
    </SWAPThemeProvider>,
  );
  expect(screen.getByRole("button", { name: "hello" })).toBeInTheDocument();
});
