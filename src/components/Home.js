import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Profile from "./Profile";
import Summary from "./Summary";

const Home = () => {
  return (
    <div data-testid="home">
      <Header />
      <Profile />
      <Summary />
      <div>
        <Link to="/set-workout">
          <button>New Workout</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
