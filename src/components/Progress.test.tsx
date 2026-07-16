import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Progress from "./Progress";

test("渲染 count 顆步驟圓與標籤", () => {
  render(
    <SWAPThemeProvider>
      <Progress step={2} count={3} label={["填寫", "確認", "完成"]} />
    </SWAPThemeProvider>,
  );
  expect(screen.getByText("1")).toBeInTheDocument();
  expect(screen.getByText("3")).toBeInTheDocument();
  expect(screen.getByText("確認")).toBeInTheDocument();
  // 目前步（2）白底 + 藍框
  expect(screen.getByText("2")).toHaveStyle({
    backgroundColor: "rgb(255, 255, 255)",
    border: "2px solid #1F3C8E",
  });
});
