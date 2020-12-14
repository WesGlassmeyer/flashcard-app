import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

describe("Card component", () => {
  const props = {
    key: 1,
    frontSide: "sample text",
    backSide: "sample answer",
  };

  it("renders a card by default", () => {
    const wrapper = shallow(<Card />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders a card with props", () => {
    const wrapper = shallow(<Card {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
