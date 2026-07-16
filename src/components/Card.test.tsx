import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Card from "./Card";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("渲染 children 與按鈕點擊直通", async () => {
  const fn = vi.fn();
  r(
    <Card buttons={[{ title: "查看", onClick: fn }, { title: "刪除", variant: "danger" }]}>
      卡片內容
    </Card>,
  );
  expect(screen.getByText("卡片內容")).toBeInTheDocument();
  await userEvent.click(screen.getByText("查看"));
  expect(fn).toHaveBeenCalled();
});

test("loading 顯示骨架、隱藏內容", () => {
  const { container } = render(
    <SWAPThemeProvider>
      <Card loading buttons={[{ title: "查看" }]}>
        卡片內容
      </Card>
    </SWAPThemeProvider>,
  );
  expect(screen.queryByText("卡片內容")).not.toBeInTheDocument();
  expect(container.querySelectorAll(".MuiSkeleton-root").length).toBeGreaterThan(0);
});
