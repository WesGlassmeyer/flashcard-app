import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Button from "./Button";
import toJSON from "enzyme-to-json";
import { isExportDeclaration } from "typescript";

describe("Button component", () => {
  const props = {
    text: "text",
    style: "color",
  };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a button by default", () => {
    const wrapper = shallow(<Button />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders a button with props", () => {
    const wrapper = shallow(<Button {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
