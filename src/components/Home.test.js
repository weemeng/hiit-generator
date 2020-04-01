import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  test("<Home> should render", () => {
    const { getByLabelText } = render(<Home />);
    const HomeComponent = getByLabelText("home");
    expect(HomeComponent).toBeInTheDocument();
  });

  test("'Hiit Me Up' and 'About' buttons should render", () => {
    const { getByLabelText } = render(<Home />);
    const hmuButton = getByLabelText("hmu-button");
    const aboutButton = getByLabelText("about-button");
    expect(hmuButton).toBeInTheDocument();
    expect(aboutButton).toBeInTheDocument();
  });

  test("About information should render when 'About' button is clicked", () => {
    const { getByLabelText } = render(<Home />);
    const aboutButton = getByLabelText("about-button");
    fireEvent.click(aboutButton);
    const aboutText = getByLabelText("about-info");
    expect(aboutText).toBeInTheDocument();
  });
});
