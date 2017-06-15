import React from 'react';
import axios from 'axios';
import Tweet from './Tweet.jsx';

class TwitterFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
    this.getTweets = this.getTweets.bind(this);
  }

  componentWillMount () {
    this.getTweets();
  }

  getTweets(){
    this.setState({
      tweets: []
    })
    axios
      .get("/getTweet", {
        params: {
          searchTerm: this.props.events.allEvents[this.props.events.activeEvent].name,
        }

      })
      .then(response => {
        console.log('this is the response: ', response)
        var tweetsObj = {};
        var tweetArray = [];
        for(var i = 0; i < response.data.length; i++){
          tweetsObj.username = response.data[i].user.screen_name;
          tweetsObj.tweet = response.data[i].text;
          tweetsObj.time = response.data[i].created_at;
          tweetArray.push(tweetsObj);
          tweetsObj = {};
        }
        console.log('this is tweetArray: ', tweetArray);
        this.setState({
          tweets: tweetArray
        })
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });
  }
  render() {
    console.log('this is the search term: ', this.props.events.allEvents[this.props.events.activeEvent].name);
    return(
      <div>
        {
          this.state.tweets.map(tweets =>
            <Tweet
              username={tweets.username}
              tweet={tweets.tweet}
              time={tweets.time}
            />
          )
        }
        <button onClick={this.getTweets}>Get More Tweets!</button>
      </div>
    )
  }
}

export default TwitterFeed;