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
import { getApiData } from "./api";
import "./styling.css";

class Post extends Component {
  render() {
    return (


      <div className="card-container">
        <Card className="card_style">
          <CardImg
            className="imagestyle"
            src={this.props.img_src}
            alt="Card image cap"
          />

          <CardBody>
            <CardTitle className="txtboxes">
              <a href={this.props.url}>{this.props.title}</a>
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Post;
