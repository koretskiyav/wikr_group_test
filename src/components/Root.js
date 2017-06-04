import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Provider } from 'mobx-react';
import routes from 'routes';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  };

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    )
  }
}
