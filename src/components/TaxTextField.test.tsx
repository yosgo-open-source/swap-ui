import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import TaxTextField from "./TaxTextField";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("未選類別時只有申報類別欄", () => {
  r(<TaxTextField />);
  expect(screen.getByLabelText("選擇申報類別")).toBeInTheDocument();
  expect(screen.queryByLabelText("輸入執行業務類別")).not.toBeInTheDocument();
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
