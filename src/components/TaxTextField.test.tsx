import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import TaxTextField from "./TaxTextField";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("未選類別時只有申報類別欄", () => {
  r(<TaxTextField />);
  expect(screen.getByLabelText("選擇申報類別")).toBeInTheDocument();
  expect(screen.queryByLabelText("輸入執行業務類別")).not.toBeInTheDocument();
});

// 回歸鎖：桌機兩欄必須等寬——flex:1 1 0 均分、minWidth:0 解除 min-content 下限，
// 否則內容較寬的欄位會把該欄撐寬（產品端回報左右差 ~20px），外層也無法覆寫
test("桌機模式兩欄等寬（flex 1 1 0 + minWidth 0）；mobile 維持 width 100%", () => {
  const { container, rerender } = render(
    <SWAPThemeProvider>
      <TaxTextField codeValue="9B" />
    </SWAPThemeProvider>,
  );
  const desktopCols = Array.from(container.firstElementChild!.children) as HTMLElement[];
  expect(desktopCols).toHaveLength(2);
  for (const col of desktopCols) {
    expect(col.style.flexGrow).toBe("1");
    expect(col.style.flexBasis).toBe("0px");
    expect(col.style.minWidth).toBe("0px");
  }
  rerender(
    <SWAPThemeProvider>
      <TaxTextField codeValue="9B" mobile />
    </SWAPThemeProvider>,
  );
  const mobileCols = Array.from(container.firstElementChild!.children) as HTMLElement[];
  for (const col of mobileCols) {
    expect(col.style.width).toBe("100%");
  }
});

test("codeValue=50（薪資）無費用欄；9B 出現費用下拉", () => {
  const { rerender } = render(
    <SWAPThemeProvider>
      <TaxTextField codeValue="50" />
    </SWAPThemeProvider>,
  );
  expect(screen.queryByLabelText("輸入執行業務類別")).not.toBeInTheDocument();
  rerender(
    <SWAPThemeProvider>
      <TaxTextField codeValue="9B" />
    </SWAPThemeProvider>,
  );
  expect(screen.getByLabelText("輸入執行業務類別")).toBeInTheDocument();
});
