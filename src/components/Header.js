import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import cx from 'classnames';
import './Header.css';

const getUrl = (year, month) => [
  '/posts',
  year ? `?year=${year}` : '',
  year && month ? `&month=${month}` : '',
].join('');

const years = Array(11).fill().map((_, index) => index + 2007); // 2007..2017
const months = Array(12).fill().map((_, index) => index + 1); // 1..12

@inject('store')
@observer
export default class Header extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const { year, month } = this.props.store.posts;

    return(
      <div className="Header">
        <ul>
          {years.map(y => <li key={y}>
            <Link className={cx('Header-link', { 'Header-link-active': y === +year})} to={getUrl(y)}>{y}</Link>
          </li>)}
        </ul>
        {year && <ul>
          {months.map(m => <li key={m}>
            <Link className={cx('Header-link', { 'Header-link-active': m === +month})} to={getUrl(year, m)}>{m}</Link>
          </li>)}
        </ul>}
      </div>
    )
  }
}
