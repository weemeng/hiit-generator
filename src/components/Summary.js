import React from "react";

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Insert date, and workout details here"
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
