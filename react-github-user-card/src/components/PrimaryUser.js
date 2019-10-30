import React from "react";
import axios from "axios";
import PrimaryCard from "./PrimaryCard";
import FollowerCard from "./FollowerCards";

class PrimaryUser extends React.Component {
  constructor() {
    super();
    this.state = {
      primaryUser: "arizephyr123",
      primaryData: {},
      followerData: []
    };
  }

  componentDidMount() {
    //getting primary user data
    axios
      .get(`https://api.github.com/users/${this.state.primaryUser}`)
      .then(res => {
        //console.log(res.data);
        this.setState({
          primaryData: res.data
        });
        //console.log( this.state.primaryData);
      })
      .catch(err => console.log(err));

    //to get followers' logins array
    axios
      .get(
        `https://api.github.com/users/${this.state.primaryData.login}/followers`
      )
      .then(res => {
        //console.log(res.data);
        res.data.map(follower => {
          const login = follower.login;
          axios
            .get(`https://api.github.com/users/${login}`)
            .then(res => {
              //console.log(res.data);
              //const dataToAdd = res.data;
              this.setState({
                followerData: [...this.state.followerData, res.data]
              });
              //console.log(this.state.followerData);
            })
            .catch(err => console.log(err));
            return this.state
        });
      })
      .catch(err => console.log(err));
  };


  changePrimary = selectedUser => {
    this.setState({
      primaryUser: selectedUser
    });
    console.log(this.state);
    return this.state;
  };

  render() {
    return (
      <>
        <div>
          <PrimaryCard primaryData={this.state.primaryData} />
        </div>
        <div>
          <FollowerCard
            followerData={this.state.followerData}
            changePrimary={this.changePrimary}
          />
        </div>
      </>
    );
  }
}

export default PrimaryUser;
