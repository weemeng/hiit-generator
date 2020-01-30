import React from "react";
import Timer from "./Timer";

class ExerciseTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalMin: this.props.totalMin,
      totalSec: this.props.totalSec,
      resetTimer: false
    };
  }

  refreshTimer = props => {
    if (this.props.isTimerZero(this.totalMin, this.totalSec)) {
      this.setState({
        totalMin: this.props.totalMin,
        totalSec: this.props.totalSec
      });
    }
  };

  render() {
    return (
      <div>
        Exercise Time Left:
        <Timer minutes={this.state.totalMin} seconds={this.state.totalSec} />
      </div>
    );
  }
}

export default ExerciseTimer;
