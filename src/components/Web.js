import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import './Web.css';

@inject('store')
@observer
export default class Web extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
  };

  render() {
    const { data } = this.props.store.posts;
    const { index } = this.props.params;

    if (data.length === 0 || !data[index]) return null;
    const src = data[index].web_url;

    return(
      <iframe title={src} src={src} />
    )
  }
}
