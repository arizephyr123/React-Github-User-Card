import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const PrimaryCard = props => {
  //console.log("in PrimaryCard", props);
  return (
    <div>
      <Card className="primary-card">
        <CardImg
          className="primary-img"
          src={props.primaryData.avatar_url}
        ></CardImg>
        <CardBody>
          <CardTitle>{props.primaryData.name}</CardTitle>
          <a href={`https://github.com/${props.primaryData.login}`}>
            <CardSubtitle>
              GitHub Handle: {props.primaryData.login}
            </CardSubtitle>
          </a>
          <CardText>Location: {props.primaryData.location}</CardText>
          <CardText>User since: {props.primaryData.created_at}</CardText>
          <CardText>Public Repos: {props.primaryData.public_repos}</CardText>
          <CardText>Following: {props.primaryData.following}</CardText>
          <CardText>Followers: {props.primaryData.followers}</CardText>
          <CardText className={`${props.primaryData.bio ? "" : "hide-bio"}`}>
            Bio: {props.primaryData.bio}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PrimaryCard;
