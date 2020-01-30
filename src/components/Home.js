import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Summary from "./Summary";

const SetWorkoutButton = props => {
  return <button onClick={props.goToSetWorkout}>New Workout</button>;
};
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: true
    };
  }

  render() {
    return (
      <div data-testid="home">
        <Header />
        <Profile />
        <Summary />
        <div>
          <SetWorkoutButton
            goToSetWorkout={this.props.triggerSetWorkoutState}
          />
        </div>
      </div>
    );
  }
}

export default Home;
