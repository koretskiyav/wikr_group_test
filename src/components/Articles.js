import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Article from 'components/Article';
import './Articles.css';

@inject('store')
@observer
export default class Articles extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  renderMessage() {
    const { year, month } = this.props.store.posts;
    if (!year) return 'select year';
    if (!month) return 'select month';
    return 'loading...';
  }

  render() {
    const { list } = this.props.store.posts;

    return(
      <div className="Articles">
        {list.length
          ? list.map(article => <Article key={article._id} article={article} />)
          : this.renderMessage()
        }
      </div>
    )
  }
}
