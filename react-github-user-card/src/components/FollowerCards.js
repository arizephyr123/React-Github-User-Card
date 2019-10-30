import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const FollowerCard = props => {
  console.log("in FollowerCard", props);

  const handleClick = e => {
      console.log(e.target.name)
    props.changePrimary(e.target.name);
  };

  return (
    <div>
      {props.followerData.map(user => {
        return (
          <div key={user.id} className="followers-div">
            <Card className="primary-card follower">
              <CardImg className="primary-img" src={user.avatar_url}></CardImg>
              <CardBody>
                <CardTitle>{user.name}</CardTitle>
                <a href={`https://github.com/${user.login}`}>
                  <CardSubtitle>GitHub Handle: {user.login}</CardSubtitle>
                </a>
                <CardText>Location: {user.location}</CardText>
                <CardText>User since: {user.created_at}</CardText>
                <CardText>Public Repos: {user.public_repos}</CardText>
                <CardText>Following: {user.following}</CardText>
                <CardText>Followers: {user.followers}</CardText>
                <CardText className={`${user.bio ? "" : "hide-bio"}`}>
                  Bio: {user.bio}
                </CardText>
                <Button name={user.login} onClick={handleClick}>See Followers</Button>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default FollowerCard;
