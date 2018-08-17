import React, { Component } from 'react';
import Axios from 'axios';
import Post from './Post';
import Pages from './navigation/Pages';

export default class NewList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const { page } = this.props.match.params;
    const res = await Axios.get(
      'https://hacker-news.firebaseio.com/v0/newstories.json'
    );

    res.data.slice((page - 1) * 20, page * 20).forEach(element => {
      Axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${element}.json`
      ).then(res => {
        this.setState(prevState => ({
          posts: [...prevState.posts, res.data]
        }));
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
        <Pages page={this.props.match.params.page} />
      </React.Fragment>
    );
  }
}
