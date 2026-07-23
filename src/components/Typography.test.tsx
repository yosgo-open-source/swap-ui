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

test("sx 透傳且可複寫我方預設 color", () => {
  renderWithTheme(
    <Typography variant="body1" color="primary400" sx={{ color: "#FF0000", fontWeight: 900 }}>
      複寫
    </Typography>,
  );
  const el = screen.getByText("複寫");
  expect(el).toHaveStyle({ color: "#FF0000" }); // 使用者 sx 蓋過 primary400
  expect(el).toHaveStyle({ fontWeight: "900" });
});

test("其他 MUI props 透傳（align 生成 MUI class）", () => {
  renderWithTheme(
    <Typography variant="body1" align="center">
      置中
    </Typography>,
  );
  // MUI 以 class 套用 align，class 存在即證明 prop 有透傳到底層元件
  expect(screen.getByText("置中").className).toMatch(/MuiTypography-alignCenter/);
});
