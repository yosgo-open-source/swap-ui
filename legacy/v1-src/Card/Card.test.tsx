import React from "react";
import { render } from "@testing-library/react";

import Card from "./Card";
import { CardProps } from "./Card.types";

describe("Test Component", () => {
  let props: CardProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Card {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Card");

    expect(component).toHaveTextContent("harvey was here");
  });
});
