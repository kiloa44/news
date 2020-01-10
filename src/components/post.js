import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { getApiData } from './api';

class Post extends Component {
  render() {
    return (
      <div>
        <Card style={styles.cardStyle}>
          <CardImg style={styles.cardImage} src={this.props.img_src} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>{this.props.subtitle}</CardSubtitle>
            <CardText style={styles.cardText}>
              {this.props.text}
            </CardText>
            <Button onClick={getApiData}>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const styles = {
  cardText: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    width: 350
  },
  cardStyle:{
    marginBottom:20
  },
  cardImage:{
    width:400,
  }
};

export default Post;
