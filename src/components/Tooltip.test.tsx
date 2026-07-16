import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Tooltip from "./Tooltip";

test("hover 顯示 tooltip 文字（open 強制開）", async () => {
  render(
    <SWAPThemeProvider>
      <Tooltip title="說明文字" open>
        <span>目標</span>
      </Tooltip>
    </SWAPThemeProvider>,
  );
  expect(await screen.findByRole("tooltip")).toHaveTextContent("說明文字");
});
