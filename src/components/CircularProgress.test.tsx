import { render } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import CircularProgress from "./CircularProgress";

test("渲染兩層圓環", () => {
  const { container } = render(
    <SWAPThemeProvider>
      <CircularProgress />
    </SWAPThemeProvider>,
  );
  expect(container.querySelectorAll(".MuiCircularProgress-root").length).toBe(2);
});
