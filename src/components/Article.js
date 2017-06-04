import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Article.css';

export default class Article extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
  };

  render() {
    const { article } = this.props;

    return(
      <p className="Article">
        {article.snippet}
      </p>
    )
  }
}
