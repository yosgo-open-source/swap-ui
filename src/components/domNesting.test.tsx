import { render } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Banner from "./Banner";
import RadioList from "./RadioList";
import CheckBoxList from "./CheckBoxList";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";
import Progress from "./Progress";
import Modal from "./Modal";
import AutoComplete from "./AutoComplete";
import Card from "./Card";

/**
 * 契約：任何公開的 children / ReactNode prop 都不得被放進 <p>。
 *
 * <p> 只能容納 phrasing content，瀏覽器解析到區塊元素會自動閉合 <p>，
 * 使 SSR 產出的 HTML 與 client render 不一致 → hydration error（Next.js 實際回報）。
 * Typography 的多數 variant 預設映射為 <p>，故包裹使用者節點時必須指定 component。
 *
 * React 對同一種 (child,parent) 巢狀警告會全域去重，因此不以 console.error 判定，
 * 直接檢查使用者節點是否有 <p> 祖先。
 */
function expectNotInsideP(ui: React.ReactElement) {
  const { baseElement, unmount } = render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);
  const node = baseElement.querySelector("[data-probe]");
  expect(node).not.toBeNull(); // 確保真的渲染了，否則測試會假綠
  expect(node!.closest("p")).toBeNull();
  unmount();
}

const D = <div data-probe>區塊內容</div>;

test("Banner children 不落在 <p> 內", () => {
  expectNotInsideP(<Banner variant="warning">{D}</Banner>);
});

test("RadioList / CheckBoxList 的 title、subtitle 不落在 <p> 內（含 line/multiline 模式）", () => {
  expectNotInsideP(<RadioList checked={false} title={D} subtitle="s" />);
  expectNotInsideP(<RadioList checked={false} title="t" subtitle={D} />);
  expectNotInsideP(<RadioList checked={false} multiline title="t" subtitle={D} />);
  expectNotInsideP(<RadioList checked={false} line title={D} subtitle="s" />);
  expectNotInsideP(<RadioList checked={false} line title="t" subtitle={D} />);
  expectNotInsideP(<CheckBoxList checked={false} title={D} subtitle="s" />);
});

test("Breadcrumb separator 不落在 <p> 內", () => {
  expectNotInsideP(
    <Breadcrumb separator={D}>
      <BreadcrumbItem>a</BreadcrumbItem>
      <BreadcrumbItem last>b</BreadcrumbItem>
    </Breadcrumb>,
  );
});

test("Progress label 不落在 <p> 內", () => {
  expectNotInsideP(<Progress step={1} count={2} label={[D, "第二步"]} />);
});

test("Modal 的 title、helpText、children 不落在 <p> 內（桌機與 mobile）", () => {
  expectNotInsideP(
    <Modal open title={D} onClose={() => {}}>
      內容
    </Modal>,
  );
  expectNotInsideP(
    <Modal open mobile title={D} onClose={() => {}}>
      內容
    </Modal>,
  );
  expectNotInsideP(
    <Modal open title="標題" helpText={D} onClose={() => {}}>
      內容
    </Modal>,
  );
  expectNotInsideP(
    <Modal open title="標題" onClose={() => {}}>
      {D}
    </Modal>,
  );
});

test("AutoComplete title 不落在 <p> 內", () => {
  expectNotInsideP(<AutoComplete open options={["a"]} title={D} onChange={() => {}} />);
});

test("Card children 不落在 <p> 內", () => {
  expectNotInsideP(<Card>{D}</Card>);
});

test("Modal 標題保留 heading 語意（a11y）", () => {
  const { baseElement, unmount } = render(
    <SWAPThemeProvider>
      <Modal open title="對話框標題" onClose={() => {}}>
        內容
      </Modal>
    </SWAPThemeProvider>,
  );
  expect(baseElement.querySelector("h6")?.textContent).toBe("對話框標題");
  unmount();
});
