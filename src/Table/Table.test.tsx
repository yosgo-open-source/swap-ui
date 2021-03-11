import React from "react";
import { render } from "@testing-library/react";

import Table from "./Table";
import { MyTableProps } from "./Table.types";

describe("Test Component", () => {
  let props: MyTableProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Table {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Table");

    expect(component).toHaveTextContent("harvey was here");
  });
});
