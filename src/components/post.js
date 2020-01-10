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
      <a href={this.props.url}>
        <Card style={styles.cardStyle} >
          <CardImg style={styles.cardImage} src={this.props.img_src} alt="Card image cap" />
          <CardBody>
            <CardTitle style={styles.titleText} >  {this.props.title}</CardTitle>
          </CardBody>
        </Card>
      </a>
    );
  }
}

const styles = {
   
  titleText: {
    width: 340,
    fontSize: 17,
    color: "red",
  },
  cardStyle:{
    marginBottom:20
  },
  cardImage:{
    height:251,
    width:400,
  }
};

export default Post;
