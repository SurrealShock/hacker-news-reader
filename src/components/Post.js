import React, { Component } from 'react';
import dateFormat from 'dateformat';
export default class Post extends Component {
  render() {
    const { by, score, text, title, type, url, time } = this.props.post;
    return (
      <div className="card ml-3 mb-3 mr-3">
        <div className="card-body">
          <h5 className="card-title">
            <a style={{ color: 'inherit', pointerEvents: 'revert' }} href={url}>
              {title}
            </a>
          </h5>
          <h6 className="card-subtitle text-muted">
            By {by} posted at{' '}
            {dateFormat(time * 1000, 'hh:mm TT')
            // (new Date().getTime().toString() - time * 1000) / 1000 / 60 / 60
            }{' '}
          </h6>
        </div>
      </div>
    );
  }
}
