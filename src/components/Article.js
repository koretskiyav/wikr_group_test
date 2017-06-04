import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Article.css';

export default class Article extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
  };

  render() {
    const { article } = this.props;

    const img = article.multimedia[0];

    return(
      <div className="Article">
        {img && <img src={`https://static01.nyt.com/${img.url}`} width={img.width} height={img.height} alt="" />}
        <span>{article.snippet}</span>
      </div>
    )
  }
}
