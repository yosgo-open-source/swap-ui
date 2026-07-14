import React from "react";
import { render } from "@testing-library/react";

import Pagination from "./Pagination";
import { MyPaginationProps } from "./Pagination.types";

describe("Test Component", () => {
  let props: MyPaginationProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Pagination {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Pagination");

    expect(component).toHaveTextContent("harvey was here");
  });
});
