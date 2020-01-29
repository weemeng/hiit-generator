import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Alexea"
    };
  }

  render() {
    return (
      <div className="profile" data-testid="home-profile">
        <img
          src={`${process.env.PUBLIC_URL}/img/user-icon.png`}
          alt="user-icon"
        />
        <h2>{this.state.name}</h2>
        <hr></hr>
      </div>
    );
  }
}

export default Profile;
