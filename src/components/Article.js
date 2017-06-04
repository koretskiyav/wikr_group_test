import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import './Article.css';

@inject('store')
@observer
export default class Article extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  };

  handleClick = () => {
    this.props.store.posts.getDetails(this.props.article);
  }

  render() {
    const { article } = this.props;

    const img = article.multimedia[0];

    return(
      <div className="Article" onClick={this.handleClick}>
        {img && <img src={`https://static01.nyt.com/${img.url}`} width={img.width} height={img.height} alt="" />}
        <span>{article.snippet}</span>
      </div>
    )
  }
}
