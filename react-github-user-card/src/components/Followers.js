import React from "react";
import FollowerCard from "./FollowerCards";
import axios from "axios";

class Followers extends React.Component {
  constructor() {
    super();
    this.state = {
      followersData: []
    };
  }

  componentDidMount() {
    axios.get("");
  }

  render() {
    return <FollowerCard followersData={this.state.followersData}/>;
  }
}

export default Followers;
