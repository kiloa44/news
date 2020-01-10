import React, { Component } from "react";
import Post from "./post";
import { CardDeck } from "reactstrap";
import { getApiData } from "./api";
import * as firebase from "firebase";
import { Redirect } from "react-router-dom";

class Home extends Component {
  state = {
    articles: [],
    user_interests: []
  };
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        var user = firebase.auth().currentUser;
        if (user != null) {
          user.providerData.forEach(function(profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
            console.log("  User UID : " + user.uid);
          });
        }
        firebase
          .firestore()
          .collection("users")
          .doc(user.email)
          .get()
          .then(doc => {
            if (doc.exists) {
              console.log(doc.data().user_interests);
              this.setState({ user_interests: doc.data().user_interests });
              this.getAllApis()
            }
          });
        console.log("user logged");
      } else {
        return <Redirect to="/login"></Redirect>;
      }
    });
  }

  getAllApis = async () => {
    console.log('in all apis')
    let {user_interests} = this.state;
    console.log(user_interests);
    for (let i = 0; i < user_interests.length; i++) {
      const interest = user_interests[i];
      console.log(
        "https://api.nytimes.com/svc/topstories/v2/" +
          interest +
          ".json?api-key=tdAbmOB482lwbw4drHWjHDlte0MgG5vq"
      );
      let nytimes = await getApiData(
        "https://api.nytimes.com/svc/topstories/v2/" +
          interest +
          ".json?api-key=tdAbmOB482lwbw4drHWjHDlte0MgG5vq"
      );
      nytimes.results.forEach(article => {
        let url = article.url;
        let title = article.title;
        let subtitle = article.abstract;
        let img_src = "/home/bigbang/news-stuff/src/assests/Missing.jpg";
        if (article.multimedia.length > 0) {
          img_src = article.multimedia[3].url;
        }
        let { articles } = this.state;
        articles.push({
          img_src: img_src,
          title: title,
          subtitle: subtitle,
          url: url
        });
        this.setState({ articles: articles });
      });
    }
  };

  render() {
    return (
      <div className="">
        <CardDeck style={styles.cardDeck}>
          {this.state.articles.map(article => {
            return (
              <Post
                img_src={article.img_src}
                url={article.url}
                title={article.title}
              ></Post>
            );
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
