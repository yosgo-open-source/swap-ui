import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import SWAPLogo from "./SWAPLogo";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("預設一般 logo、middle 高 40", () => {
  r(<SWAPLogo />);
  const img = screen.getByAltText("SWAP");
  expect(img).toHaveStyle({ height: "40px" });
});

test("business 優先於 black/dark，且尺寸走 BIZ 映射", () => {
  r(<SWAPLogo business black dark size="small" />);
  const img = screen.getByAltText("SWAP BIZ");
  expect(img).toHaveStyle({ height: "48px" });
});

test("數字 size 轉 px", () => {
  r(<SWAPLogo size={64} />);
  expect(screen.getByAltText("SWAP")).toHaveStyle({ height: "64px" });
});
