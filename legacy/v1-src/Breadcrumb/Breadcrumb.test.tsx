import React from "react";
import { render } from "@testing-library/react";

import Breadcrumb from "./Breadcrumb";
import { BreadcrumbProps } from "./Breadcrumb.types";

describe("Test Component", () => {
  let props: BreadcrumbProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Breadcrumb {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Breadcrumb");

    expect(component).toHaveTextContent("harvey was here");
  });
});
