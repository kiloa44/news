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
import "./styling.css"

class Post extends Component {
  render() {
    return (
      <a href={this.props.url}>
        <Card  className="card_style "  >
          <CardImg className='imagestyle' src={this.props.img_src} alt="Card image cap" />
          <CardBody>
            <CardTitle className='txtboxes' >  {this.props.title}</CardTitle >
          </CardBody>
        </Card>
      </a>
    );
  }
}



export default Post;



  

