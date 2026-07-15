import { render, screen } from "@testing-library/react";
import Button from "@mui/material/Button";
import { SWAP_UI_VERSION } from "./index";

test("版本常數正確", () => {
  expect(SWAP_UI_VERSION).toBe("2.0.0-alpha.0");
});

test("MUI v9 元件可在測試環境渲染", () => {
  render(<Button>hello</Button>);
  expect(screen.getByRole("button", { name: "hello" })).toBeInTheDocument();
});
