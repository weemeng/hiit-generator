import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "../css/Home.css";

const HiitMeUp = () => {
  return (
    <div className="home">
      <div>
        <Link to="/set-workout">
          <button className="hitt-me" aria-label="hmu-button">
            HIIT ME UP
          </button>
        </Link>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about" aria-label="about-info">
      {
        <p>
          HIIT ME UP is an exercise generator that makes getting that next
          workout done effortlessly &#9786; Please feel free to send your
          feedback for improvements or other features{" "}
          <a href="mailto:vallq@outlook.com">here</a>!
        </p>
      }
    </div>
  );
};

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      displayAbout: false
    };
  }

  toggleAbout = event => {
    this.setState(prevState => {
      const displayAbout = prevState.displayAbout;
      return { displayAbout: !displayAbout };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="home-box" aria-label="home">
            {!this.state.displayAbout ? HiitMeUp() : About()}
          </div>
          <button onClick={this.toggleAbout} aria-label="about-button">
            {!this.state.displayAbout ? "About" : "Go Back"}
          </button>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
