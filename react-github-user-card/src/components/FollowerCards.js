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
  return (
    <div>
      {props.followerData.map(user => {
        return (
          <Card key={user.id}>
            <CardImg top width="100%" src={user.avatar_url} alt="user" />
            <CardBody>
              <CardTitle></CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>See Followers</Button>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default FollowerCard;
