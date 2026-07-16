import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Typography from "./Typography";

function renderWithTheme(ui: React.ReactElement) {
  return render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);
}

test("渲染文字內容", () => {
  renderWithTheme(<Typography variant="body1">哈囉</Typography>);
  expect(screen.getByText("哈囉")).toBeInTheDocument();
});

test("color 解析為文字色（token 名）", () => {
  renderWithTheme(
    <Typography variant="body1" color="primary400">
      藍字
    </Typography>,
  );
  expect(screen.getByText("藍字")).toHaveStyle({ color: "#4862CC" });
});

test("語意色 primary 在 light 為黑", () => {
  renderWithTheme(
    <Typography variant="h1" color="primary">
      標題
    </Typography>,
  );
  expect(screen.getByText("標題")).toHaveStyle({ color: "#000000" });
});
