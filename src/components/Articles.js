import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router';
import { inject, observer } from 'mobx-react';
// import cx from 'classnames';
import Article from 'components/Article';
import './Articles.css';

@inject('store')
@observer
export default class Articles extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const { list, month } = this.props.store.posts;

    return(
      <div className="Articles">
        {list.length
          ? list.map(article => <Article key={article._id} article={article} />)
          : (month ? 'loading...' : 'select month')
        }
      </div>
    )
  }
}
