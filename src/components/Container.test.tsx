import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Container from "./Container";

test("顯式 maxWidth xl 映射 1140", () => {
  render(
    <SWAPThemeProvider>
      <Container maxWidth="xl">內容</Container>
    </SWAPThemeProvider>,
  );
  expect(screen.getByText("內容")).toHaveStyle({ maxWidth: "1140px" });
});
