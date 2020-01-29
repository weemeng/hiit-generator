import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: true
    };
  }

  render() {
    return (
      <header>
        <h1>HIIT HARD GEN</h1>
        <button>Stats</button>
        <hr></hr>
      </header>
    );
  }
}

export default Header;
