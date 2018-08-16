import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    const { by, score, text, title, type, url } = this.props.post;

    return (
      <div className="card ml-3 mb-3 mr-3">
        <div className="card-body ml-0">
          {/* <span className="fa-stack">
            <i className="fas fa-arrow-alt-circle-up fa-stack" />
            <i className="fas fa-arrow-alt-circle-down fa-stack" />
          </span> */}
          <h6>
            <a style={{ color: 'inherit', pointerEvents: 'revert' }} href={url}>
              {title}
            </a>
          </h6>
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  }
}
