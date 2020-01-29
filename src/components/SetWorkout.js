import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class SetWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialised: true
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="workout-params" data-testid="set-workout-params">
          <h3>Set Workout</h3>
          <div className="setTime">
            <h5>Time</h5>
            <button>15min</button>
            <button>25min</button>
            <button>45min</button>
          </div>
          <div className="setFocus">
            <h5>Focus</h5>
            <button>upper body</button>
            <button>lower body</button>
            <button>core</button>
          </div>
          <hr></hr>
          <div>
            <Link to="/workout-page">
              <button>Generate</button>
            </Link>
          </div>
          <hr></hr>
          <div>
            <Link to="/">BACK</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SetWorkout;
