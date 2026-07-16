import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Link from "./Link";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("token 色", () => {
  r(
    <Link color="primary400" href="#">
      連結
    </Link>,
  );
  expect(screen.getByText("連結")).toHaveStyle({ color: "#4862CC" });
});

test("非 token（含 v1 的 secondary）落到 black1000", () => {
  r(
    <Link color="secondary" href="#">
      黑連結
    </Link>,
  );
  expect(screen.getByText("黑連結")).toHaveStyle({ color: "#000000" });
});

test("MUI props 直通 + sx 複寫", () => {
  r(
    <Link href="#" data-testid="lk" sx={{ fontWeight: 400 }}>
      x
    </Link>,
  );
  expect(screen.getByTestId("lk")).toHaveStyle({ fontWeight: 400 });
});
