import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const HiitMeUp = () => {
  return (
    <div className="home" data-testid="home">
      <div>
        <Link to="/set-workout">
          <button className="hitt-me">HIIT ME UP</button>
        </Link>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about">
      {<p>
        HIIT ME UP is a casual web app to make getting that next workout done effortlessly &#9786; Please feel free to send your feedback for improvements or other features <a href="mailto:vallq@outlook.com">here</a>!
      </p>}
    </div>
  );
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAbout: false
    };
  }

  toggleAbout = event => {
    this.setState(prevState => {
      const displayAbout = prevState.displayAbout;
      return {displayAbout: !displayAbout};
    });
  };

  render() {
    // let {displayAbout} = this.state;
    // return <div>{displayAbout ? <About /> : <HiitMeUp />}</div>;
    return (
      <div>
        <div className="home-box">
          {!this.state.displayAbout ? (HiitMeUp()) : (About())}
        </div>
        <button onClick={this.toggleAbout}>{!this.state.displayAbout ? ("About") : ("Go Back")}</button>
      </div>
    );
  }
}

export default Home;
