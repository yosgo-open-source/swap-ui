import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("渲染全部項目與分隔符", () => {
  r(
    <Breadcrumb>
      {[
        <BreadcrumbItem key="a" href="/a">
          首頁
        </BreadcrumbItem>,
        <BreadcrumbItem key="b" href="/b">
          列表
        </BreadcrumbItem>,
        <BreadcrumbItem key="c" last>
          詳情
        </BreadcrumbItem>,
      ]}
    </Breadcrumb>,
  );
  expect(screen.getByText("首頁")).toBeInTheDocument();
  expect(screen.getByText("詳情")).toHaveStyle({ color: "#000000" });
  expect(screen.getAllByText("/").length).toBe(2);
});

test("maxItems 收合出現省略鈕", () => {
  r(
    <Breadcrumb maxItems={2}>
      {[
        <BreadcrumbItem key="a" href="/a">
          A
        </BreadcrumbItem>,
        <BreadcrumbItem key="b" href="/b">
          B
        </BreadcrumbItem>,
        <BreadcrumbItem key="c" last>
          C
        </BreadcrumbItem>,
      ]}
    </Breadcrumb>,
  );
  expect(screen.getByTestId("breadcrumb-ellipsis")).toBeInTheDocument();
  expect(screen.queryByText("B")).not.toBeInTheDocument();
});
