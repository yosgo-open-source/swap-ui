import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Banner from "./Banner";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("error variant 底色與文字", () => {
  r(
    <Banner variant="error" data-testid="bn">
      發生錯誤
    </Banner>,
  );
  expect(screen.getByTestId("bn")).toHaveStyle({ backgroundColor: "#FFEBED" }); // danger50
  expect(screen.getByText("發生錯誤")).toBeInTheDocument();
});

test("自訂 icon 取代預設", () => {
  r(
    <Banner variant="info" icon={<span data-testid="custom-icon">★</span>}>
      訊息
    </Banner>,
  );
  expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
});
