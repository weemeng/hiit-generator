import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import ExerciseTimer from "./ExerciseTimer.js";
import WorkoutTimer from "./WorkoutTimer.js";
import "../App.css";
const SECONDS_IN_ONE_MINUTE = 60;
const EXERCISE_DURATION = 30;
const EXERCISE_MIN = 0;

class WorkoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseMin: EXERCISE_MIN,
      exerciseSec: EXERCISE_DURATION
    };
  }

  render() {
    const queries = new URLSearchParams(this.props.location.search);
    const time = queries.get("time");
    //const focus = queries.get("focus");
    const timeInMin = time / SECONDS_IN_ONE_MINUTE;
    const timeInSec = (time / SECONDS_IN_ONE_MINUTE) % timeInMin;

    return (
      <div>
        <Header />
        <div data-testid="exercise-card">
          <div className="gif">
            <iframe
              src="https://giphy.com/embed/8JZfoNdMCWGSjbSkaT"
              className="giphy-embed"
              allowFullScreen
              title="push-up-gif"
            ></iframe>
            <br></br>
            <span>
              <a href="https://giphy.com/">via GIPHY</a>
            </span>
            <h3>PUSH UPS</h3>
          </div>
        </div>
        <div className="timers">
          <div data-testid="exercise-timer">
            <ExerciseTimer
              totalMin={this.state.exerciseMin}
              totalSec={this.state.exerciseSec}
            />
          </div>
          <div data-testid="workout-timer">
            <WorkoutTimer totalMin={timeInMin} totalSec={timeInSec} />
          </div>
          <div>
            <Link to="/set-workout">
              <button>Back to Set Workout</button>
            </Link>
          </div>
          <div>
            <Link to="/home">
              <button>Go to Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutPage;
