import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Chip from "./Chip";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("primary contained：50 色底、800 文字", () => {
  r(<Chip variant="primary" contained label="標籤" />);
  const el = screen.getByText("標籤").parentElement as HTMLElement;
  expect(el).toHaveStyle({ backgroundColor: "#E6E9F8", color: "#1F3C8E" }); // primary50 底、primary800 字
});

test("預設（outlined）：白底 + 邊框", () => {
  r(<Chip variant="danger" label="危險" />);
  const el = screen.getByText("危險").parentElement as HTMLElement;
  expect(el).toHaveStyle({ backgroundColor: "#FFFFFF" });
});

test("MUI props 直通、sx 複寫預設樣式", () => {
  r(<Chip variant="primary" contained label="x" data-testid="chip" sx={{ borderRadius: 0 }} />);
  const el = screen.getByTestId("chip");
  expect(el).toHaveStyle({ borderRadius: "0px" });
});
