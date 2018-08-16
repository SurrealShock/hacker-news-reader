import React, { Component } from 'react';
import PostList from '../PostList';
import Pages from '../navigation/Pages';

class PostPage extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <React.Fragment>
        <PostList page={this.props.match.params.page} />
        <Pages page={this.props.match.params.page} />
      </React.Fragment>
    );
  }
}

export default PostPage;
