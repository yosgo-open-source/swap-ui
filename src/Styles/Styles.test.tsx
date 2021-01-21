import React from "react";
import { render } from "@testing-library/react";

import Styles from "./Styles";
import { StylesProps } from "./Styles.types";

describe("Test Component", () => {
  let props: StylesProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Styles {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Styles");

    expect(component).toHaveTextContent("harvey was here");
  });
});
