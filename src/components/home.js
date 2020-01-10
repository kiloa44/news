import React, { Component } from "react";
import Post from "./post";
import { CardDeck } from "reactstrap";
import { getApiData } from "./api";

class Home extends Component {
  state = {
    articles:[]
  };
      

  async componentDidMount() {
    let nytimes = await getApiData('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=tdAbmOB482lwbw4drHWjHDlte0MgG5vq');
    nytimes.results.forEach((article)=>{
        let title = article.title;
        let url = article.url;
        let subtitle = article.abstract;
        let image_url = article.multimedia["3"].url;
        
        let {articles} = this.state;
        articles.push({
          img_src:image_url,
          title:title,
          subtitle:subtitle,
          url:url
        });
        this.setState({articles:articles});
    });
  }
  render() {
    console.log(this.state.img_src);
    return (
      <div className="">
        <CardDeck style={styles.cardDeck}>
          {this.state.articles.map(article =>{
            return <Post
            img_src={article.img_src}
            url={article.url}
            title={article.title}
          ></Post>
          })}
          
        </CardDeck>
      </div>
    );
  }
}

const styles = {
  cardDeck: {
    margin: 10,
    marginTop: 60
  }
};
export default Home;
