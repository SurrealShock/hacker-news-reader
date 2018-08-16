import React, { Component } from 'react';
import Axios from 'axios';
import Post from './Post';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const { page } = this.props;
    const res = await Axios.get(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );

    res.data.slice((page - 1) * 20, page * 20).forEach(element => {
      Axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${element}.json`
      ).then(res => {
        console.log('ran');
        this.setState(prevState => ({
          posts: [...prevState.posts, res.data]
        }));
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}
