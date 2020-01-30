import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Summary from "./Summary";
import { Link } from "react-router-dom";

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
          <Link to="/set-workout">Set Workout</Link>
        </div>
      </div>
    );
  }
}

export default Home;
