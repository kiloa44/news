import React , { Component } from 'react';
import Post from './post';
import {CardDeck} from 'reactstrap';
import { getApiData } from "./api";

class Home extends Component{
    state={
        img_src:'',
        text:'',
        title:'',
        subtitle:''
    };

     async componentDidMount(){
       const data = await getApiData();
       console.log(data ,"data")
     this.setState({
            img_src:data.url,
            title:data.title,
            text:data.explanation
        })
    }

    render(){
        console.log(this.state.img_src)
        return (
        <div className="">
            
            <CardDeck style={styles.cardDeck}>
            <Post
            img_src={this.state.img_src}
            text={this.state.text}
            title={this.state.title}
            subtitle={this.state.subtitle}
            ></Post>
  
            </CardDeck>
        </div>
        );
    }
  }

const styles={
    cardDeck:{
        margin:10,
        marginTop:60
    }
};
export default  Home;