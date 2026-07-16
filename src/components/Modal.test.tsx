import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Modal from "./Modal";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("open 渲染 title/children 與雙按鈕", async () => {
  const onPrimary = vi.fn();
  r(
    <Modal
      open
      onClose={() => {}}
      title="確認刪除"
      helpText="此操作無法復原"
      size="small"
      secondaryButton={{ title: "取消" }}
      primaryButton={{ title: "刪除", variant: "danger", onClick: onPrimary }}
    >
      確定要刪除這筆資料嗎？
    </Modal>,
  );
  expect(screen.getByText("確認刪除")).toBeInTheDocument();
  expect(screen.getByText("確定要刪除這筆資料嗎？")).toBeInTheDocument();
  await userEvent.click(screen.getByText("刪除"));
  expect(onPrimary).toHaveBeenCalled();
});

test("關閉鈕觸發 onClose；disCloseIcon 隱藏", async () => {
  const onClose = vi.fn();
  const { rerender } = render(
    <SWAPThemeProvider>
      <Modal open onClose={onClose} title="t" />
    </SWAPThemeProvider>,
  );
  await userEvent.click(screen.getByLabelText("關閉"));
  expect(onClose).toHaveBeenCalled();
  rerender(
    <SWAPThemeProvider>
      <Modal open onClose={onClose} title="t" disCloseIcon />
    </SWAPThemeProvider>,
  );
  expect(screen.queryByLabelText("關閉")).not.toBeInTheDocument();
});
