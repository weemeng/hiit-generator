import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const MIN_IN_SECONDS = 60;

class SetWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <Header />
        <div className="workout-params" data-testid="set-workout-params">
          <h3>Set Workout</h3>
          <div className="setTime">
            <h5>Time</h5>
            <button value={900} onClick={this.handleTimeClick}>
              15min
            </button>
            <button value={50000} onClick={this.handleTimeClick}>
              25min
            </button>
            <button value={162000} onClick={this.handleTimeClick}>
              45min
            </button>
            <p>Time: {this.state.time / MIN_IN_SECONDS}</p>
          </div>
          <div className="setFocus">
            <h5>Focus</h5>
            <button value="upper body" onClick={this.handleFocusClick}>
              upper body
            </button>
            <button value="lower body" onClick={this.handleFocusClick}>
              lower body
            </button>
            <button value="core" onClick={this.handleFocusClick}>
              core
            </button>
            <p>Focus: {this.state.focus}</p>
          </div>
          <hr></hr>
          <Link to={queryURL}>Generate</Link>
          <hr></hr>
          <div>
            <Link to="/home">Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SetWorkout;
//const HomeButton = props => {
//return <button onClick={props.goToHome}>Back</button>;
//};
//<HomeButton goToHome={this.props.triggerHomeState} />
