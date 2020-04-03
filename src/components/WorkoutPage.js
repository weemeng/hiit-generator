import React from "react";
import { Link } from "react-router-dom";
import BaseTimer from "./BaseTimer";
import "../css/WorkoutPage.css";
import WorkoutGenerator from "../functions/WorkoutGenerator.js";
const SECONDS_IN_ONE_MINUTE = 60;
const EXERCISE_DURATION = 30;
const EXERCISE_MIN = 0;
// const startTime = Date.now();

class WorkoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseMin: EXERCISE_MIN,
      exerciseSec: EXERCISE_DURATION,
      startTime: 0,
      mounted: false,
    };
  }

  componentDidMount() {
    console.log("setting time state");
    this.setState({
      startTime: Date.now(),
      mounted: true
    });
  }

  render() {
    const queries = new URLSearchParams(this.props.location.search);
    const time = queries.get("time");
    const focus = queries.get("focus");
    const timeInMin = time / SECONDS_IN_ONE_MINUTE;
    const timeInSec = (time / SECONDS_IN_ONE_MINUTE) % timeInMin;
    if (!this.state.mounted) {
      return <div></div>;
    }
    return (
      <div aria-label="workout-page">
        <div className="workout-page__nav-buttons">
          <Link to="/set-workout">
            <button aria-label="reset-button">&#9665; Reset Workout</button>
          </Link>
          <Link to="/home">
            <button aria-label="home-button">Go to Home &#9655;</button>
          </Link>
        </div>
        <div className="workout-timer" aria-label="workout-timer">
          <BaseTimer
            minutes={timeInMin}
            seconds={timeInSec}
            duration={time}
            startTime={this.state.startTime}
            isExerciseTimer={false}
          />
        </div>
        <div className="exercise-card" aria-label="exercise-card">
          <WorkoutGenerator
            focus={focus}
            time={900}
            duration={30}
            startTime={this.state.startTime}
          />
        </div>
        <div className="bottom-row-render"></div>
      </div>
    );
  }
}

export default WorkoutPage;
