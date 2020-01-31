import React from "react";

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "30 Jan 2020 - 15min HIIT Workout"
    };
  }

  render() {
    return (
      <div className="last-workout-summary">
        <h5>YOUR LAST WORKOUT</h5>
        <p>{this.state.data}</p>
        <hr></hr>
      </div>
    );
  }
}

export default Summary;
