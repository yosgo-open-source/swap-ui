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

// 置中模式高度上限：內容再多 panel 不超出視窗，head/footer 恆在畫面內、body 壓縮出捲軸
test("置中模式 panel 有視窗高度上限，head/footer 不可壓縮", () => {
  const { baseElement } = render(
    <SWAPThemeProvider>
      <Modal open onClose={() => {}} title="標題" primaryButton={{ title: "送出" }}>
        <div style={{ height: 3000 }}>長內容</div>
      </Modal>
    </SWAPThemeProvider>,
  );
  const paper = baseElement.querySelector(".MuiPaper-root") as HTMLElement;
  expect(getComputedStyle(paper).maxHeight).toBe("calc(100dvh - 64px)");
  const [head, , body] = Array.from(paper.children) as HTMLElement[];
  expect(getComputedStyle(head).flexShrink).toBe("0");
  expect(getComputedStyle(body).minHeight).toBe("0px");
  const footer = paper.lastElementChild as HTMLElement;
  expect(getComputedStyle(footer).flexShrink).toBe("0");
});

// fullWidth 滿寬語意優先：size 被忽略（桌機 size + 手機 fullWidth 是常見組合）
test("fullWidth 時忽略 size，寬度為 100%", () => {
  const { baseElement } = render(
    <SWAPThemeProvider>
      <Modal open fullWidth mobile size="small" title="t" onClose={() => {}}>
        內容
      </Modal>
    </SWAPThemeProvider>,
  );
  const paper = baseElement.querySelector(".MuiPaper-root") as HTMLElement;
  expect(getComputedStyle(paper).width).toBe("100%");
});

test("置中模式 size 照舊生效", () => {
  const { baseElement } = render(
    <SWAPThemeProvider>
      <Modal open size="small" title="t" onClose={() => {}}>
        內容
      </Modal>
    </SWAPThemeProvider>,
  );
  const paper = baseElement.querySelector(".MuiPaper-root") as HTMLElement;
  expect(getComputedStyle(paper).width).toBe("480px");
});
