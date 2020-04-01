import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Home", () => {
  test("'Hiit Me Up' and 'About' buttons should render", () => {
    const { getByLabelText } = render(<App />);
    const hmuButton = getByLabelText("hmu-button");
    const aboutButton = getByLabelText("about-button");
    expect(hmuButton).toBeInTheDocument();
    expect(aboutButton).toBeInTheDocument();
  });

  test("About information should render when 'About' button is clicked", () => {
    const { getByLabelText } = render(<App />);
    const aboutButton = getByLabelText("about-button");
    fireEvent.click(aboutButton);
    const aboutText = getByLabelText("about-info");
    expect(aboutText).toBeInTheDocument();
  });

  test("Set Workout component should render when 'Hiit Me Up' button is clicked", () => {
    const { getByLabelText } = render(<App />);
    const hmuButton = getByLabelText("hmu-button");
    fireEvent.click(hmuButton);
    const setWorkoutText = getByLabelText("set-workout-params");
    expect(setWorkoutText).toBeInTheDocument();
  });
});
