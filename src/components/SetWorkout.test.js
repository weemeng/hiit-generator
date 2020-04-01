import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("SetWorkout", () => {
  test("Workout Parameters should render when initialised", () => {
    const { getByLabelText } = render(<App />);
    const hmuButton = getByLabelText("hmu-button");
    fireEvent.click(hmuButton);
    const paramsElement = getByLabelText("set-workout-params");
    expect(paramsElement).toBeInTheDocument();
  });

  test("'Time(min): 15' should render when '15-min-button' button is clicked", () => {
    const { getByLabelText } = render(<App />);
    const timeButton = getByLabelText("15-min-button");
    fireEvent.click(timeButton);
    const timeText = getByLabelText("time");
    expect(timeText).toBeInTheDocument();
  });

  test("'Focus: upper body' should render when 'upper-body-button' button is clicked", () => {
    const { getByLabelText } = render(<App />);
    const focusButton = getByLabelText("upper-body-button");
    fireEvent.click(focusButton);
    const focusText = getByLabelText("focus");
    expect(focusText).toBeInTheDocument();
  });

  test("Workout component should render when 'Generate' button is clicked", () => {
    const { getByLabelText } = render(<App />);
    const timeButton = getByLabelText("15-min-button");
    fireEvent.click(timeButton);
    const focusButton = getByLabelText("upper-body-button");
    fireEvent.click(focusButton);
    const generateButton = getByLabelText("generate-button");
    fireEvent.click(generateButton);
    const workoutComponent = getByLabelText("workout-page");
    expect(workoutComponent).toBeInTheDocument();
  });
});
