import React from "react";
import { Link } from "react-router-dom";
import "../../public/css/SetWorkout.css";
const MIN_IN_SECONDS = 60;

class SetWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAbout: false,
      time: 0,
      focus: ""
    };
  }

  handleTimeClick = event => {
    this.setState({
      time: event.target.value
    });
  };

  handleFocusClick = event => {
    this.setState({
      focus: event.target.value
    });
  };

  constructQueryString(time, focus, link) {
    const queryArr = [time, focus];
    var queryURL = link.concat(
      "time=",
      queryArr[0],
      "&",
      "focus=",
      queryArr[1]
    );
    return queryURL;
  }

  render() {
    const link = "./workout?";
    const queryURL = this.constructQueryString(
      this.state.time,
      this.state.focus,
      link
    );

    return (
      <div>
        <div className="workout-params" data-testid="set-workout-params">
          <h4>Set Workout</h4>
          <div className="set-time">
            <h3>Time(min): {this.state.time / MIN_IN_SECONDS}</h3>
            <div className="set-time__buttons">
              <button value={900} onClick={this.handleTimeClick}>
                15min
              </button>
              {/* <button value={1500} onClick={this.handleTimeClick}>
                25min
              </button>
              <button value={2700} onClick={this.handleTimeClick}>
                45min
              </button> */}
            </div>
          </div>
          <div className="set-focus">
            <h3>Focus: {this.state.focus}</h3>
            <div className="set-focus__buttons">
              <button value="upper body" onClick={this.handleFocusClick}>
                upper body
              </button>
              <button value="lower body" onClick={this.handleFocusClick}>
                lower body
              </button>
              <button value="core" onClick={this.handleFocusClick}>
                core
              </button>
            </div>
          </div>
          <div className="workout-params__nav-buttons">
            <Link to="/home">
              <button>&#9665; Home</button>
            </Link>
            <Link to={queryURL}>
              <button className="workout-params__generate-button">
                Generate &#9655;
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SetWorkout;
