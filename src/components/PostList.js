import React, { Component } from 'react';
import Axios from 'axios';
import Post from './Post';
import Pages from './navigation/Pages';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const { page } = this.props.match.params;
    const res = await Axios.get(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );

    async function asyncForEach(array, callback) {
      for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
      }
    }

    const newPosts = [];
    await asyncForEach(
      res.data.slice((page - 1) * 20, page * 20),
      async element => {
        const postData = await Axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${element}.json`
        );
        newPosts.push(postData.data);
      }
    );
    this.setState({
      posts: newPosts
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
