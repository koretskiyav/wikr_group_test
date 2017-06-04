import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import cx from 'classnames';
import './Paginator.css';

@inject('store')
@observer
export default class Paginator extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  handleClick = e => {
    e.preventDefault();
    const page = +e.target.getAttribute('data-id');
    this.props.store.posts.setPage(page);
  }

  render() {
    const { page, pages } = this.props.store.posts;

    if (!pages) return null;

    const startPage = Math.min(page > 7 ? page - 5 : 2, pages - 11);

    const pagination = Array(11).fill().map((_, index) => index + startPage);

    return(
      <div className="Paginator">
        <ul>
          <li>
            <a data-id={1} onClick={this.handleClick} className={cx('Paginator-link', { 'Paginator-link-active': page === 1})}>{1}</a>
          </li>
          <li>..</li>
          {pagination.map(p =>
            <li key={p}>
              <a data-id={p} onClick={this.handleClick} className={cx('Paginator-link', { 'Paginator-link-active': page === p})}>{p}</a>
            </li>
          )}
          <li>..</li>
          <li key={pages}>
            <a data-id={pages} onClick={this.handleClick} className={cx('Paginator-link', { 'Paginator-link-active': page === pages})}>{pages}</a>
          </li>
        </ul>
      </div>
    )
  }
}
