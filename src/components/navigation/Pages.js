import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Pages extends Component {
  render() {
    const { page } = this.props;
    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a
              className="page-link"
              href={(1).toString()}
              tabIndex="0"
              style={{ color: 'black' }}
            >
              First
            </a>
          </li>
          {parseInt(page) - 1 == 0 ? (
            <li className="page-item disabled">
              <a className="page-link" href={(parseInt(page) - 1).toString()}>
                {parseInt(page) - 1}
              </a>
            </li>
          ) : (
            <li className="page-item">
              <a
                className="page-link"
                href={(parseInt(page) - 1).toString()}
                style={{ color: 'black' }}
              >
                {parseInt(page) - 1}
              </a>
            </li>
          )}

          <li className="page-item">
            <a className="page-link" href={page} style={{ color: '#ff5722' }}>
              {page}
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href={(parseInt(page) + 1).toString()}
              style={{ color: 'black' }}
            >
              {parseInt(page) + 1}
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href={(parseInt(page) + 2).toString()}
              style={{ color: 'black' }}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
