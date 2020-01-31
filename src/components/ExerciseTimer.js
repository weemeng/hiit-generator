import React from "react";
import Timer from "./Timer";

class ExerciseTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalMin: this.props.totalMin,
      totalSec: this.props.totalSec
    };
  }

  render() {
    return (
      <div>
        Exercise Time Left:
        <Timer minutes={this.props.totalMin} seconds={this.props.totalSec} />
      </div>
    );
  }
}

export default ExerciseTimer;
