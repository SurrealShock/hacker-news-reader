import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar sticky-top navbar-dark mb-3"
        style={{
          backgroundColor: '#ff5722',
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
        }}
      >
        <span className="navbar-brand mb-0 h1">
          <i className="fab fa-hacker-news-square" /> Navbar
        </span>
        <div style={{ float: 'right' }}>
          <span className="mr-3" style={{ color: 'white' }}>
            Top Stories
          </span>
          <span className="mr-3" style={{ color: 'white' }}>
            New
          </span>
          <span className="mr-3" style={{ color: 'white' }}>
            Comments
          </span>
          <span className="mr-3" style={{ color: 'white' }}>
            Show
          </span>
          <span className="mr-3" style={{ color: 'white' }}>
            Ask
          </span>
          <span className="mr-3" style={{ color: 'white' }}>
            Jobs
          </span>
          <span className="mr-3" style={{ color: 'white' }}>
            Submit
          </span>
        </div>
      </nav>
    );
  }
}
