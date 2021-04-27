import React from "react";
import { render } from "@testing-library/react";

import Link from "./Link";
import { MyLinkProps } from "./Link.types";

describe("Test Component", () => {
  let props: MyLinkProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Link {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Link");

    expect(component).toHaveTextContent("harvey was here");
  });
});
